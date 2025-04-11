import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
	outerWrapper: {
		backgroundColor: colors.brand.primary,
		width: "100%",
		borderRadius: 30,
		paddingRight: 20,
		backgroundColor: colors.brand.primary,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginVertical: 20,
	},
	innerWrapper: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
		alignItems: "center",
	},
	iconWrapper: {
		width: 50,
		height: 50,
		borderRadius: 1000,
		backgroundColor: colors.ui.primary,
		justifyContent: "center",
		alignItems: "center",
	},
	title: { color: colors.brand.secondary, fontFamily: fonts.body },
});
