import {
	View,
	Image,
	StyleSheet,
	Dimensions,
	Text,
	Pressable,
} from "react-native";
import { colors } from "../../../../../../../infastructure/theme/colors";
import { fonts } from "../../../../../../../infastructure/theme/fonts";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'
import { styles } from "./category-item.styles";
export const CategoryItem = ({ item, navigation }) => {
	const handleNavigation = (item) =>
		navigation.navigate("categoryItemDetails", { item: item });
	return (
		<View style={styles.container}>
			<View style={styles.itemContainer}>
				<Pressable
					onPress={handleNavigation.bind(this, item)}
					style={({ pressed }) => [
						styles.iconContainer,
						pressed && { opacity: 0.6 },
					]}
				>
					<Icon
						name="arrow-top-right"
						size={24}
						color={colors.brand.secondary}
					/>
				</Pressable>
				<View style={styles.cardContainer}>
					<Image
						source={{ uri: item.photo }}
						style={styles.itemImage}
						resizeMode={ImageResizeMode.contain}
					/>
					
				</View>
			</View>
		</View>
	);
};


