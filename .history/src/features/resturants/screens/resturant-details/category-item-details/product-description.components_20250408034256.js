import {View , Text, StyleSheet} from "react-native";
export const ProductDescription = ({ description }) => {
	return (
		<View>
			<Text style={styles.title}>Description</Text>
			<Text
				style={styles.description}
			>
				{description}
			</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	title: {
		fontFamily: fonts.body,
		marginHorizontal: 5,
		fontSize: 14,
		marginBottom: 10,
		justifyContent: "flex-start",

		fontWeight: "700",
		color: colors.ui.accent,
	},
    description:{
        fontSize: 15,
        fontFamily: fonts.body,
        color: colors.ui.accent,
    }
});
