import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const CategoryItemButton = ({item}) => {
        const handleNavigation = (item) =>
            navigation.navigate("categoryItemDetails", { item: item });
	return (
		<Pressable
			onPress={handleNavigation.bind(this, item)}
			style={({ pressed }) => [
				styles.iconContainer,
				pressed && { opacity: 0.6 },
			]}
		>
			<Icon name="arrow-top-right" size={24} color={colors.brand.secondary} />
		</Pressable>
	);
};
