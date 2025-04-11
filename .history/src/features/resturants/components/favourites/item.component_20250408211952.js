import { View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback } from "react";
import { Favourite } from "../../../../components/favourites/favourite.components";
import { styles } from "./item.styles";
export const Item = ({ item,  }) => {
	const navigation = useNavigation();
	const handleNavigation = useCallback((item) => {
		navigation?.navigate("All", { screen: "ResturantDetails", params: { resturant: item } });

	},[navigation]);
	return (
		<View
			style={styles.outerContainer}
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

