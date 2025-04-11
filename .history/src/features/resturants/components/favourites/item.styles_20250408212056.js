import { StyleSheet, Dimensions } from "react-native";
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
	title: { color: "#fff", fontSize: 18, fontWeight: 600, letterSpacing: 1.5 },
	description: { color: "#fff", fontSize: 12, letterSpacing: 1.2 },
	icon: { backgroundColor: "rgba(0,0,0,0.3)", padding: 5, borderRadius: 1000 },
});
