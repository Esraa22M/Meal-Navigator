import { StyleSheet } from "react-native";
import { colors } from "../../../../../infastructure/theme/colors";
import { fonts } from "../../../../../infastructure/theme/fonts";
export const styles = StyleSheet.create({
	wrapper: { flex: 1, width: "100%", height: "100%" },
	mainContentWrapper: {
		backgroundColor: colors.bg.primary,
		position: "absolute",
		width: "100%",
		bottom: 0,
		flex: 1,
		height: "75%",
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		width: "100%",
	},
	background: { position: "relative", width: "100%", flex: 1 },
	price: {
		fontFamily: fonts.heading,
		fontSize: 15,
		fontWeight: "700",
		lineHeight: 30,
		color: colors.ui.secondary,
		letterSpacing: 0.8,
	},

	subContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		margin: 10,
	},
	productCounter: {
		lineHeight: 20,
		fontSize: 16,
		fontFamily: fonts.body,
		marginHorizontal: 5,
	},
});