import {
	View,
	Text,
	Image,
	StyleSheet,
	Dimensions,
} from "react-native";
import { Favourite } from "../../../../components/favourites/favourite.components";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("screen");

export const FavouriteItem = ({ item }) => {
	return (
		<View style={[styles.itemContainer, { backgroundColor: "red" }]}>
			<Image
				source={{ uri: item.photos[0] }}
				resizeMode="contain"
				style={{ width: 300, height: 500, borderRadius: 20 }}
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
		height: height,
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
