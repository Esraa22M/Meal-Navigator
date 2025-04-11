import { AccountBackground } from "../../screens/account/account.styles";
import {
	OuterWrapper,
	LoginContainer,
} from "./auth.styles";
import { View, Text, Pressable } from "react-native";
import { useCallback } from "react";
import { colors } from "../../../../infastructure/theme/colors";
import { fonts } from "../../../../infastructure/theme/fonts";
import { AuthButton } from "../../screens/account/Auth-button.components";
import { KeyboardAwareScrollView } from "@pietile-native-kit/keyboard-aware-scrollview";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { AuthInputComponent } from "./auth-input.components";
import {
	login,
	createUser,
} from "../../../../services/authentication/authentication.service";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { HelperText } from "react-native-paper";
import { AuthHeader } from "../../../../components/header/authentication-header.components";
import { AuthFormContext } from "../../../../services/authentication/auth-form.context";
import { AuthenticationContext } from "../../../../services/authentication/authentication.context";
import { useNavigation } from "@react-navigation/native";
export const AuthForm = ({ isLogin, isValidInputData, inputData }) => {
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const { authenticate } = useContext(AuthenticationContext);
	const mode = isLogin ? "login" : "register";
	const navigation = useNavigation();
	
	const handleNavigation = useCallback((name) => {
		navigation?.navigate(name);
	},[ navigation]);
	const authHandler = useCallback(async (email, password, mode) => {
		try {
			if (
				mode === "register" &&
				(!isValidInputData?.firstName?.isValid ||
					!isValidInputData?.lastName?.isValid ||
					!isValidInputData?.password?.isValid ||
					!isValidInputData?.repeatedPassword?.isValid)
			) {
				setIsLoading(false);

				throw new Error("Invalid input , please try again.");
			}
			setIsLoading(true);
			setError("")
			let token = "";
			if (mode === "login") {
				token = await login(email.trim(), password.trim());
			} else {
				token = await createUser(email.trim(), password.trim());
			}

			authenticate(token);
			setIsLoading(false);
		} catch (err) {
			setIsLoading(false);
			if (
				err.toString() === "AxiosError: Request failed with status code 400" &&
				mode === "register"
			) {
				setError(
					"An account with this email already exists.Please login instead"
				);
			}
			else if (
				err.toString() === "AxiosError: Request failed with status code 400" &&
				mode === "login"
			)
				setError(
					"Invalid email or password"
				);
			else setError(err.toString());
		}
	},[isValidInputData, authenticate]);
	const { handleDataChange, validateInput } = useContext(AuthFormContext);

	const [isKeyboardVisible, setKeyboardVisible] = useState(false);
	const [hidePassword, setHidePassword] = useState(false);
	return (
		<AccountBackground
			style={{ justifyContent: "center", alignItems: "center" }}
			source={require("../../../../../assets/bg-images/wallpaper7.jpg")}
		>
			<OuterWrapper>
				<AuthHeader />

				<LoginContainer mode={mode} showsVerticalScrollIndicator={false}>
					<KeyboardAwareScrollView
						style={{ flex: 1 }}
						showsVerticalScrollIndicator={false}
					>
						<Spacer size={"large"} postion={"top"} />
						<Spacer size={"large"} postion={"top"} />
						<Spacer size={"large"} postion={"top"} />
						<Spacer size={"large"} postion={"top"} />
						{!isLogin && <Spacer size={"large"} postion={"top"} />}
						{!isLogin && (
							<AuthInputComponent
								label="First Name"
								setKeyboardVisible={setKeyboardVisible}
								keyName="firstName"
								inputData={inputData}
								validateInput={validateInput}
								isValidInputData={isValidInputData}
								handleInputChange={handleDataChange}
								mode={mode}
							/>
						)}
						{!isLogin && <Spacer size={"large"} postion={"top"} />}
						{!isLogin && (
							<AuthInputComponent
								setKeyboardVisible={setKeyboardVisible}
								label="Last Name"
								keyName="lastName"
								inputData={inputData}
								validateInput={validateInput}
								isValidInputData={isValidInputData}
								handleInputChange={handleDataChange}
								mode={mode}
							/>
						)}
						<Spacer size={"large"} postion={"top"} />

						<AuthInputComponent
							setKeyboardVisible={setKeyboardVisible}
							label="Email"
							keyName="email"
							inputData={inputData}
							handleInputChange={handleDataChange}
							validateInput={validateInput}
							isValidInputData={isValidInputData}
							keyboardType="email-address"
							textContentType="emailAddress"
							mode={mode}
						/>

						<Spacer size={"large"} postion={"top"} />
						<AuthInputComponent
							setKeyboardVisible={setKeyboardVisible}
							label="Password"
							keyName="password"
							inputData={inputData}
							validateInput={validateInput}
							isValidInputData={isValidInputData}
							handleInputChange={handleDataChange}
							secureTextEntry={hidePassword}
							mode={mode}
							setHidePassword={setHidePassword}
							hidePassword={hidePassword}
						/>
						{!isLogin && <Spacer size={"large"} postion={"top"} />}
						{!isLogin && (
							<AuthInputComponent
								setKeyboardVisible={setKeyboardVisible}
								label="Confirm password"
								keyName="repeatedPassword"
								inputData={inputData}
								validateInput={validateInput}
								isValidInputData={isValidInputData}
								handleInputChange={handleDataChange}
								secureTextEntry={hidePassword}
								mode={mode}
								setHidePassword={setHidePassword}
								hidePassword={hidePassword}
							/>
						)}
						<Spacer size={"large"} postion={"top"} />
						{isLoading && <ActivityIndicator animating={true} />}
						{error && (
							<HelperText visible={true} type="error">
								{error}
							</HelperText>
						)}
						<Spacer size={"large"} postion={"top"} />
						<AuthButton
							title={isLogin ? "Login" : "Register"}
							iconName={"account-arrow-right-outline"}
							IconPackage={MaterialCommunityIcons}
							onPress={() => {
								setIsLoading(true);
								authHandler(
									inputData.email.value,
									inputData.password.value,
									mode
								);
							}
							}
						/>
						{mode === "login" && (
							<View
								style={{
									flexDirection: "row",
									justifyContent: "center",
									marginVertical: 10,
								}}
							>
								<Text
									style={{
										fontFamily: fonts.monospace,
										fontSize: 16,
										textAlign: "center",
										color: colors.ui.secondary,
									}}
								>
									Don't have an account?
								</Text>
								<Pressable onPress={() => handleNavigation("Register")} style={({pressed})=>[pressed&&{backgroundColor:colors.ui.accent, borderRadius:3}]}>
									<Text
										style={{
											fontFamily: fonts.monospace,
											fontSize: 16,
											textAlign: "center",
											color: colors.ui.primary,
											fontWeight: "bold",
											marginHorizontal: "5",
										}}
									>
										Register
									</Text>
								</Pressable>
							</View>
						)}
						{mode === "register" && (
							<View
								style={{
									flexDirection: "row",
									justifyContent: "center",
									marginVertical: 10,
								}}
							>
								<Text
									style={{
										fontFamily: fonts.monospace,
										fontSize: 16,
										textAlign: "center",
										color: colors.ui.secondary,
									}}
								>
									have an account?
								</Text>
								<Pressable onPress={() => handleNavigation("Login")}>
									<Text
										style={{
											fontFamily: fonts.monospace,
											fontSize: 16,
											textAlign: "center",
											color: colors.ui.primary,
											fontWeight: "bold",
											marginHorizontal: "5",
										}}
									>
										Login
									</Text>
								</Pressable>
							</View>
						)}
					</KeyboardAwareScrollView>
				</LoginContainer>
			</OuterWrapper>
		</AccountBackground>
	);
};
