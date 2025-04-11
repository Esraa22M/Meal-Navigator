import { Pressable, Image, StyleSheet } from "react-native";
import { colors } from "../../../../../infastructure/theme/colors";
export const ProductImage = ({ showImage, setShowImage }) => {
	return (
		<View style={styles.ImageContainer}>
			<Pressable onPress={() => setShowImage(!showImage)}>
				<Image
					source={{ uri: item?.photo }}
					resizeMode={ImageResizeMode.contain}
					style={styles.image}
				/>
			</Pressable>
		</View>
	);
};
const styles = StyleSheet.create({
	ImageContainer: {
		width: "80%",
		height: "40%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: "-35%",
		marginHorizontal: "10%",
	},
    image:{
        width: width * 0.7,
        height: width * 0.7,
        borderRadius: 3000,
        borderColor: colors.ui.primary,
        borderWidth: 0.5,
    }
});
