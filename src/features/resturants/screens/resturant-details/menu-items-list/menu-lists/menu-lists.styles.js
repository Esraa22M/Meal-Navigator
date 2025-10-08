import { StyleSheet } from "react-native";
import { colors } from "../../../../../../infastructure/theme/colors";
export const styles = StyleSheet.create({
	outerContainer: { marginTop: 60, height: "70%" },
	categoryItemsContainer: {
		marginVertical: 20,
		borderTopWidth: 0.5,
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		borderTopColor: colors.brand.muted,
	},
});
