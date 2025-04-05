import {
	View,
	StyleSheet,
	ImageBackground,
	SafeAreaView,
	Text,
	Image,
} from "react-native";
import { useContext } from "react";
import Toast from "react-native-toast-message";
import { AuthHeader } from "../../../../components/header/authentication-header.components";
import { fonts } from "../../../../infastructure/theme/fonts";
import { colors } from "../../../../infastructure/theme/colors";
import { AuthButton } from "../account/Auth-button.components";
import Logout from "react-native-vector-icons/MaterialIcons";
import { AuthenticationContext } from "../../../../services/authentication/authentication.context";
import { AuthFormContext } from "../../../../services/authentication/auth-form.context";
export const Settings = () => {
	const { logout } = useContext(AuthenticationContext);
	const showToast = () => {
		Toast.show({
			type: "success",
			text1: "Goodbye,",
			text2: "Hope to see you again soon! 👋",
			onPress: () => Toast.hide(),  
			visibilityTime: 2000, 


		});
	};
	const { resetLogin, resetRegister } = useContext(AuthFormContext);
	const logoutHandler = () => {
		resetLogin();
		resetRegister();
		logout();
		showToast();
	};
	return (
		<View style={{ flex: 1, backgroundColor: colors.bg.main }}>
			<SafeAreaView style={{ marginHorizontal: "3%", marginBlockStart: "10%" }}>
				<AuthHeader />
			</SafeAreaView>
			<View style={{ justifyContent: "flex-start", alignItems: "center" }}>
				<View
					style={{
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: colors.bg.primary,
						borderRadius: 1000,
						marginTop: "10%",
						width: "50%",
						height: "40%",
					}}
				>
					<Image
						source={require("../../../../../assets/bg-images/icons8-logout-100.png")}
					/>
				</View>
				<View>
					<Text
						style={{
							fontFamily: fonts.monospace,
							fontSize: 18,
							textAlign: "center",
							color: colors.ui.secondary,
						}}
					>
						Ohhh.. no! You're leaving ..Are you sure?
					</Text>
				</View>
				<View style={{ margin: "10%" }}>
					<AuthButton
						title={"Logout"}
						IconPackage={Logout}
						iconName="logout"
						onPress={logoutHandler}
					/>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: colors.bg.main, marginTop: 40 },
});
