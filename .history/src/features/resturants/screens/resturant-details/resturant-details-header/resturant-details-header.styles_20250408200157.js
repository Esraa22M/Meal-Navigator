import { StyleSheet, Dimensions } from "react-native";
import { fonts } from "../../../../../infastructure/theme/fonts";
import { colors } from "../../../../../infastructure/theme/colors";
const { width } = Dimensions.get("screen");
export const styles = StyleSheet.create({
	itemContainer: {
		width: width,
		height: "30%",
	},
	background: {
		position: "absolute",
		flex: 1,
		height: "100%",

		width: width,
		justifyContent: "space-between",
		alignItems: "center",
	},
	image: {
		flex: 1,
		height: "30%",
		width: width,
	},
	infoContainer: {
		justifyContent: "center",
		width: "100%",
		height: "100%",
	},

	title: {
		color: "#fff",
		fontSize: 21,
		fontWeight: 600,
		letterSpacing: 1.5,
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		fontFamily: fonts.heading,
	},
	description: {
		color: "#fff",
		fontSize: 14,
		letterSpacing: 1.2,
		alignItems: "center",
		textAlign: "center",

		fontFamily: fonts.body,
		textAlign: "center",
	},
	timeContainer: {
		backgroundColor: "white",
		padding: 20,
		borderRadius: 50,
		height: 60,
		width: width / 1.6,
		textAlign: "center",
		alignSelf: "flex-end",
		marginBottom: -30,
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
	deliveryTime: {
		textAlign: "center",
		color: colors.ui.accent,
		fontFamily: fonts.body,
	},

	icon: { backgroundColor: "rgba(0,0,0,0.3)", padding: 5, borderRadius: 1000 },
	favouriteContainer: {
		backgroundColor: "white",
		width: 50,
		height: 50,
		justifyContent: "center",
		borderRadius: 5000,
		textAlign: "center",
		alignItems: "center",
		alignSelf: "flex-end",
		marginBottom: -25,
	},
});
