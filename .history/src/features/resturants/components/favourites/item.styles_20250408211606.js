import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
	background: {
		position: "absolute",
		height: _imageHight,
		width: _imageWidth,
		padding: 20,
		borderRadius: 20,
		justifyContent: "space-between",
	},
	title: { color: "#fff", fontSize: 18, fontWeight: 600, letterSpacing: 1.5 },
	description: { color: "#fff", fontSize: 12, letterSpacing: 1.2 },
	icon: { backgroundColor: "rgba(0,0,0,0.3)", padding: 5, borderRadius: 1000 },
});