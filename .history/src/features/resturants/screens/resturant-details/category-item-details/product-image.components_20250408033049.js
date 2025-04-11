import { Pressable, Image, StyleSheet, View, ImageResizeMode } from "react-native";
import { Dimensions } from "react-native";
import { colors } from "../../../../../infastructure/theme/colors";

const {width } = Dimensions.get('screen');

export const ProductImage = ({ showImage, setShowImage, photo }) => {
	return (
		<View style={styles.ImageContainer}>
			<Pressable onPress={() => setShowImage(!showImage)}>
				<Image
					source={{ uri: photo }}
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
