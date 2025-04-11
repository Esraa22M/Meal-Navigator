import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../../../infastructure/theme/colors";
export const MainHeaderOuterContainer = styled(SafeAreaView)``;
export const MainHeaderContainer = styled(View)`
	flex-direction: row;
	justify-content: space-between;
	padding-top: 10px;
	alignitems: center;
`;
export const FavouritesWrapper = styled(View)``;
export const IconWrapper = styled(View)``;
export const styles = StyleSheet.create({
	wrapper: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	logoContainer: {
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 5,
		backgroundColor: "white",
		borderRadius: 10000,
	},
	mainHeader: {
		fontSize: 25,
		color: colors.ui.primary,
		fontWeight: "700",
		lineHeight: 50,
		marginLeft: 10,
	},
	searchContainer: {
		backgroundColor: colors.ui.disabled,
		borderRadius: 10000,
		padding: 5,
		marginLeft: 5,
	},
	searchOuterContainer: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
});
