import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
	outerContainer: { flex: 1, backgroundColor: colors.bg.main },
	innerContainer:{ justifyContent: "center", alignItems: "center" }
	,imageContainer:{
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.bg.primary,
		borderRadius: 1000,
		marginTop: "10%",
		width: "70%",
		height: "55%",
	},
	image:{ width: "80%", height: "100%", borderRadius: 1000 }
	,message:{
		fontFamily: fonts.monospace,
		fontSize: 18,
		textAlign: "center",
		color: colors.ui.secondary,
	}
});