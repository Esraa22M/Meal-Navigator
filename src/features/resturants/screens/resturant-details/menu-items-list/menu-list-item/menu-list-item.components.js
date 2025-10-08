import { Text, View, Pressable } from "react-native";
import { styles } from "./menu-list-item.styles";
export const MenuListItem = ({ item, toggleActive }) => {
	return (
		<Pressable onPress={() => toggleActive(item.name)}>
			<View style={styles.itemContainer}>
				<Text
					style={[
						item?.isActive && styles.activeCategoryName,
						styles.categoryName,
					]}
				>
					{item?.name}
				</Text>
				<View
					style={[
						styles.counterContainer,
						item?.isActive && styles.activeContainer,
					]}
				>
					<Text style={[styles.counter, item?.isActive && styles.activeCounter]}>
						{item?.items?.length}
					</Text>
				</View>
			</View>
		</Pressable>
	);
};

