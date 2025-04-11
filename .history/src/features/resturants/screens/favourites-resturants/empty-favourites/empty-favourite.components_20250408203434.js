import { View, StyleSheet, Text, Image } from "react-native";
import { fonts } from "../../../../../infastructure/theme/fonts";
import { colors } from "../../../../../infastructure/theme/colors";
import { styles } from "./empty-favourites.styles";
export const EmptyFavourites = () => {
	return (
		<View style={styles.outerContainer}>
			<View style={styles.innerContainer}>
				<View
					style={styles.imageContainer}
				>
					<Image
						source={require("../../../../../assets/bg-images/collectLove.jpg")}
						resizeMode="contain"
						style={styles.image}
					/>
				</View>
				<View>
					<Text
						style={styles.message}
					>
						Ohhh.. Your favourite list is empty. Start exploring delicious
						resturants now!
					</Text>
				</View>
			</View>
		</View>
	);
};

