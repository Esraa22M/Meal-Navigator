import { View, Image } from "react-native";
import ImageResizeMode from "react-native/Libraries/Image/ImageResizeMode";
import { styles } from "./category-item.styles";
import { ItemMainInfo } from "./components/item-main-info.components";
import { CategoryItemButton } from "./components/category-item-button.components";
export const CategoryItem = ({ item }) => {
	return (
		<View style={styles.container}>
			<View style={styles.itemContainer}>
				<CategoryItemButton item={item } />
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
