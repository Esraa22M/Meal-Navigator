import {
	View,
	Text,
	Image,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import { Favourite } from "../../../../components/favourites/favourite.components";
import { ImageSliderType } from "../data/data";
import { LoadingDataIndicator } from "../../../../ui/loading-data-indicator/loading-data-indicator.components";
import { LinearGradient } from "expo-linear-gradient";
import Animated,{
	Extrapolation,
	interpolate,
	useAnimatedStyle,
} from "react-native-reanimated";
const { width, height } = Dimensions.get("screen");

export const FavouriteItem = ({ item}) => {
	// const reanimatedStyle = useAnimatedStyle(() => {
	// 	return {
	// 		transform: [
	// 			{
	// 				translateX: interpolate(
	// 					scrollX.value,
	// 					[(index - 1) * width, index * width, (index + 1) * width],
	// 					[-width * 0.25, 0, width * 0.25],
	// 					Extrapolation.CLAMP
	// 				),
	// 			},
	// 			{
	// 				scale: interpolate(
	// 					scrollX.value,
	// 					[(index - 1) * width, index * width, (index + 1) * width],
	// 					[0.8, 1, 0.8],
	// 					Extrapolation.CLAMP
	// 				),
	// 			},
	// 		],
	// 	};
	// });
	return (
		<View style={[styles.itemContainer, {backgroundColor:'red'}]}>
			<Image
				source={{ uri: item.photos[0] }}
				resizeMode="contain"

				style={{ width: 300, height:500 , borderRadius: 20 }}
			/>
			<LinearGradient
				colors={["transparent", "rgba(0,0,0,0.8)"]}
				style={styles.background}
			>
				<View style={{ alignItems: "flex-end" }}>
						<Favourite resturant={item} />
				</View>
				<View style={{ gap: 10 }}>
					<Text style={styles.title}>{item.name}</Text>
					<Text style={styles.description}> {item.address}</Text>
				</View>
			</LinearGradient>
		</View>
	);
};
const styles = StyleSheet.create({
	itemContainer: {
		justifyContent: "center",
		alignItems: "center",
		 gap: 10,
		width: width,
		height:height
	},
	background: {
		position: "absolute",
		height: 500,
		width: 300,
		padding: 20,
		borderRadius: 20,
		justifyContent: "space-between",
	},
	title: { color: "#fff", fontSize: 18, fontWeight: 600, letterSpacing: 1.5 },
	description: { color: "#fff", fontSize: 12, letterSpacing: 1.2 },
	icon: { backgroundColor: "rgba(0,0,0,0.3)", padding: 5, borderRadius: 1000 },
});
