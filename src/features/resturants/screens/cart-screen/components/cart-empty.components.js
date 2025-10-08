import {
	View,
	StyleSheet,
	ImageBackground,
	SafeAreaView,
	Text,
	Image,
} from "react-native";
import { fonts } from "../../../../../infastructure/theme/fonts";
import { colors } from "../../../../../infastructure/theme/colors";
import { CartHeader } from "./cart-header.components";
export const EmptyCart = () => {
	return (
		<ImageBackground
			source={require("../../../../../../assets/bg-images/wallpaperMeal.jpg")}
			resizeMode="cover"
			style={{ flex: 1 }}
		>
			<SafeAreaView style={{ flex: 1 }}>
				<CartHeader />
			</SafeAreaView>
			<View style={{ flex: 5, justifyContent: "center", alignItems: "center" }}>
				<View
					style={{
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: colors.bg.primary,
						borderRadius: 1000,
						width: "65%",
						height: "40%",
					}}
				>
					<Image
						source={require("../../../../../../assets/bg-images/girl.jpg")}
						resizeMode="contain"
						style={{ width: "70%", height: "70%" }}
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
						Ohhh.. Your cart is empty
					</Text>
					<Text
						style={{
							fontFamily: fonts.monospace,
							fontSize: 16,
							textAlign: "center",
							color: colors.ui.accent,
						}}
					>
						but it does'nt have to be!!
					</Text>
				</View>
			</View>
		</ImageBackground>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: colors.bg.main, marginTop: 40 },
});
