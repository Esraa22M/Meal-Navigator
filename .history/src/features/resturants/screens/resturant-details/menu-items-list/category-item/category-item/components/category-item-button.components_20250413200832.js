import { Pressable } from "react-native";
import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "../category-item.styles";
import { colors } from "../../../../../../../../infastructure/theme/colors";
export default const CategoryItemButton = ({ item }) => {
	const navigation = useNavigation();
	const handleNavigation = useCallback(
		(item) => navigation.navigate("categoryItemDetails", { item: item }),
		[item, navigation]
	);
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
