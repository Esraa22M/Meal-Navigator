import { View, Image, Dimensions, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Favourite } from "../../../../components/favourites/favourite.components";
const { width } = Dimensions.get("screen");
import { LinearGradient } from "expo-linear-gradient";
import { useCallback } from "react";
import { StyleSheet } from "react-native";
const _imageWidth = width * 0.8;
const _imageHight = _imageWidth * 1.76;
export const Item = ({ item,  }) => {
	const navigation = useNavigation();
	const handleNavigation = useCallback((item) => {
		navigation?.navigate("All", { screen: "ResturantDetails", params: { resturant: item } });

	},[navigation]);
	return (
		<View
			style={{
				width: width,
				height: _imageHight,

				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Pressable
			onPress={handleNavigation.bind(this, item)}
				style={{
					width: width * 0.8,
					height: _imageHight,
					overflow: "hidden",
					justifyContent: "center",
					alignItems: "center",
					borderRadius: 20,

				}}
			>
				<Image
					source={{ uri: item.photos[0] }}
					style={{ width: _imageWidth, height: _imageHight }}
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
			</Pressable>
		</View>
	);
};
const styles = StyleSheet.create({
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
