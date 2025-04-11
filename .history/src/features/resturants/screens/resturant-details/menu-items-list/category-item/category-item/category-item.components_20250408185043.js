import { View, Image, Pressable } from "react-native";
import ImageResizeMode from "react-native/Libraries/Image/ImageResizeMode";
import { colors } from "../../../../../../../infastructure/theme/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./category-item.styles";
import { ItemMainInfo } from "./components/item-main-info.components";
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
					<ItemMainInfo item={item} />
				</View>
			</View>
		</View>
	);
};
