import { View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback } from "react";
import { Favourite } from "../../../../components/favourites/favourite.components";
import { styles } from "./item.styles";
import { colors } from "../../../../infastructure/theme/colors";
export const Item = ({ item }) => {
	const navigation = useNavigation();
	const handleNavigation = useCallback(
		(item) => {
			navigation?.navigate("All", {
				screen: "ResturantDetails",
				params: { resturant: item },
			});
		},
		[navigation]
	);
	return (
		<View style={styles.outerContainer}>
			<Pressable
				onPress={handleNavigation.bind(this, item)}
				style={styles.buttonContainer}
			>
				<Image
					source={{ uri: item.photos[0] }}
					style={{ width: _imageWidth, height: _imageHight }}
				/>

				<LinearGradient
					colors={["transparent", colors.bg.gradient]}
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
