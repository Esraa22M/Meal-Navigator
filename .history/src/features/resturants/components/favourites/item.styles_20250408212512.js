import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../../infastructure/theme/colors";
const { width } = Dimensions.get("screen");
const _imageWidth = width * 0.8;
const _imageHight = _imageWidth * 1.76;
export const styles = StyleSheet.create({
	outerContainer: {
		width: width,
		height: _imageHight,
		justifyContent: "center",
		alignItems: "center",
	},
	background: {
		position: "absolute",
		height: _imageHight,
		width: _imageWidth,
		padding: 20,
		borderRadius: 20,
		justifyContent: "space-between",
	},
	buttonContainer: {
		width: width * 0.8,
		height: _imageHight,
		overflow: "hidden",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 20,
	},
	image: { width: _imageWidth, height: _imageHight },
	title: {
		color: colors.ui.secondary,
		fontSize: 18,
		fontWeight: 600,
		letterSpacing: 1.5,
	},
	description: { color: colors.ui.secondary, fontSize: 12, letterSpacing: 1.2 },
	icon: {
		backgroundColor: colors.bg.lightBackground,
		padding: 5,
		borderRadius: 1000,
	},
});
