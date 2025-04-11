import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
export const ProductCount = ({ setQuantity, quantity, bgColor, color }) => {
	return (
		<Pressable
			onPress={() => {
				setQuantity(quantity + 1);
			}}
			style={({ pressed }) => [
				styles.button,
				pressed && styles.activeButton,
				{ backgroundColor: bgColor },
			]}
		>
			<Icon name="plus" size={15} color={color} />
		</Pressable>
	);
};
const styles = StyleSheet.create({
	button: {
		borderRadius: 100,
		width: 40,
		height: 40,
		justifyContent: "center",
		marginLeft: 5,
		alignItems: "center",
	},
	activeButton: {
		shadowColor: colors.ui.accent,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
		transform: [{ scale: 1.05 }],
	},
});
