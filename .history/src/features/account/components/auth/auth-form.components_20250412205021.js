import React, { useState, useCallback, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";
import { KeyboardAwareScrollView } from "@pietile-native-kit/keyboard-aware-scrollview";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AuthButton } from "../../screens/account/Auth-button.components";
import { AuthHeader } from "../../../../components/header/authentication-header.components";
import { AuthFormContext } from "../../../../services/authentication/auth-form.context";
import { AuthenticationContext } from "../../../../services/authentication/authentication.context";
import { login, createUser } from "../../../../services/authentication/authentication.service";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { AccountBackground } from "../../screens/account/account.styles";
import { OuterWrapper, LoginContainer } from "./auth.styles";
import { View, Text, Pressable } from "react-native";


export const AuthFields = ({
	isLogin,
	inputData,
	isValidInputData,
	handleDataChange,
	validateInput,
	setKeyboardVisible,
	setHidePassword,
	hidePassword,
	mode,
}) => {
	return (
		<>
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
					label="Last Name"
					setKeyboardVisible={setKeyboardVisible}
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
				label="Email"
				setKeyboardVisible={setKeyboardVisible}
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
				label="Password"
				setKeyboardVisible={setKeyboardVisible}
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
					label="Confirm password"
					setKeyboardVisible={setKeyboardVisible}
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
		</>
	);
};

export const AuthErrorIndicator = ({ error }) => {
	if (!error) return null;
	return <HelperText type="error" visible={true}>{error}</HelperText>;
};
import { fonts } from "../../../../infastructure/theme/fonts";
import { colors } from "../../../../infastructure/theme/colors";

export const AuthFooter = ({ mode, onNavigate }) => {
	const isLogin = mode === "login";
	return (
		<View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 10 }}>
			<Text style={{ fontFamily: fonts.monospace, fontSize: 16, color: colors.ui.secondary }}>
				{isLogin ? "Don't have an account?" : "Have an account?"}
			</Text>
			<Pressable
				onPress={() => onNavigate(isLogin ? "Register" : "Login")}
				style={({ pressed }) => [pressed && { backgroundColor: colors.ui.accent, borderRadius: 5 }]}
			>
				<Text
					style={{
						fontFamily: fonts.monospace,
						fontSize: 16,
						textAlign: "center",
						color: colors.ui.primary,
						fontWeight: "bold",
						marginHorizontal: 5,
					}}
				>
					{isLogin ? "Register" : "Login"}
				</Text>
			</Pressable>
		</View>
	);
};

export const AuthForm = ({ isLogin, isValidInputData, inputData }) => {
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isKeyboardVisible, setKeyboardVisible] = useState(false);
	const [hidePassword, setHidePassword] = useState(false);
	const { authenticate } = useContext(AuthenticationContext);
	const { handleDataChange, validateInput } = useContext(AuthFormContext);
	const mode = isLogin ? "login" : "register";
	const navigation = useNavigation();

	const handleNavigation = (name) => navigation?.navigate(name);

	const authHandler = useCallback(async (email, password, mode) => {
		try {
			if (
				mode === "register" &&
				(!isValidInputData?.firstName?.isValid ||
					!isValidInputData?.lastName?.isValid ||
					!isValidInputData?.password?.isValid ||
					!inputData?.firstName?.value ||
					!inputData?.lastName?.value ||
					!inputData?.password?.value ||
					!inputData?.repeatedPassword?.value ||
					!isValidInputData?.repeatedPassword?.isValid)
			) {
				setIsLoading(false);
				throw new Error("Invalid input , please try again.");
			}

			setIsLoading(true);
			setError("");

			const token =
				mode === "login"
					? await login(email.trim(), password.trim())
					: await createUser(email.trim(), password.trim());

			authenticate(token);
			setIsLoading(false);
		} catch (err) {
			setIsLoading(false);
			if (
				err.toString() === "AxiosError: Request failed with status code 400" &&
				mode === "register"
			) {
				setError("An account with this email already exists. Please login instead");
			} else if (
				err.toString() === "AxiosError: Request failed with status code 400" &&
				mode === "login"
			) {
				setError("Invalid email or password");
			} else {
				setError(err.toString());
			}
		}
	}, [isValidInputData, authenticate]);

	return (
		<AccountBackground
			style={{ justifyContent: "center", alignItems: "center" }}
			source={require("../../../../../assets/bg-images/wallpaper7.jpg")}
		>
			<OuterWrapper>
				<AuthHeader />
				<LoginContainer mode={mode}>
					<KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
						<Spacer size={"large"} postion={"top"} />
						<AuthFields
							isLogin={isLogin}
							inputData={inputData}
							isValidInputData={isValidInputData}
							handleDataChange={handleDataChange}
							validateInput={validateInput}
							setKeyboardVisible={setKeyboardVisible}
							setHidePassword={setHidePassword}
							hidePassword={hidePassword}
							mode={mode}
						/>
						{isLoading && <ActivityIndicator animating={true} />}
						<AuthErrorIndicator error={error} />
						<Spacer size={"large"} postion={"top"} />
						<AuthButton
							title={isLogin ? "Login" : "Register"}
							iconName={"account-arrow-right-outline"}
							IconPackage={MaterialCommunityIcons}
							disabled={isLoading}
							onPress={() => {
								if (!isLoading) {
									authHandler(inputData.email.value, inputData.password.value, mode);
								}
							}}
						/>
						<AuthFooter mode={mode} onNavigate={handleNavigation} />
					</KeyboardAwareScrollView>
				</LoginContainer>
			</OuterWrapper>
		</AccountBackground>
	);
};
