import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useContext, useCallback } from "react";
import { CartContext } from "../../../../services/cart/cart.context";
import { colors } from "../../../../infastructure/theme/colors";
import { fonts } from "../../../../infastructure/theme/fonts";
import { useNavigation } from "@react-navigation/native";
export const CartItem = ({ item, showToast }) => {
	const { addItemToCart, removeItemToCart, clearItemFromCart } =
		useContext(CartContext);
	const navigation = useNavigation();

	const handleNavigation = useCallback(
		(item) => {
			navigation?.navigate("All", {
				screen: "categoryItemDetails",
				params: { item: item },
			});
		},
		[navigation]
	);

	return (
		<Pressable
			onPress={() => handleNavigation(item)}
			style={({ pressed }) => [
				pressed && { backgroundColor: "red" },
				{
					marginHorizontal: "4%",
					marginVertical: "5%",
					borderBottomWidth: 0.3,
				},
			]}
		>
			<View
				style={[
					{
						flex: 1,
						flexDirection: "row",

						padding: "2%",
						justifyContent: "space-around",
						alignItems: "center",
					},
				]}
			>
				<View>
					<Image
						source={{ uri: item?.photo }}
						style={{ width: 100, height: 100, borderRadius: 2000 }}
					/>
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							alignItems: "center",
							marginVertical: "2%",
						}}
					>
						<Pressable
							style={({ pressed }) => [
								{
									marginHorizontal: "2%",
									width: 25,
									height: 25,
									borderRadius: 1000,
									justifyContent: "center",
									alignItems: "center",
								},
								pressed && { opacity: 0.5 },
							]}
							onPress={() => removeItemToCart(item)}
						>
							<Icon name="angle-left" size={24} color={colors.ui.accent} />
						</Pressable>
						<View style={{ marginHorizontal: "2%", flexDirection: "row" }}>
							<Text style={styles.name}>x</Text>
							<Text style={styles.name}>{item?.quantity}</Text>
						</View>
						<Pressable
							style={({ pressed }) => [
								{
									marginHorizontal: "5%",
									width: 25,
									height: 25,
									borderRadius: 1000,
									justifyContent: "center",
									alignItems: "center",
								},
								pressed && { opacity: 0.5 },
							]}
							onPress={() => addItemToCart(item)}
						>
							<Icon name="angle-right" size={24} color={colors.ui.primary} />
						</Pressable>
					</View>
				</View>
				<View style={{ width: "40%" }}>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<Text style={styles.price}>$</Text>
						<Text style={styles.price}>{item?.price}</Text>
					</View>
					<Text style={styles.name}>{item?.name}</Text>
				</View>
				<Pressable
					style={({ pressed }) => [
						{
							marginHorizontal: "5%",
							width: 30,
							height: 30,
							borderRadius: 1000,
							justifyContent: "center",
							alignItems: "center",
						},
						pressed && { opacity: 0.5 },
					]}
					onPress={() => {
						clearItemFromCart(item);
						showToast();
					}}
				>
					<EvilIcons name="close" size={24} />
				</Pressable>
			</View>
		</Pressable>
	);
};
const styles = StyleSheet.create({
	price: {
		color: colors.ui.primary,
		fontFamily: fonts.body,
		fontSize: 15,
		fontWeight: "bold",
	},
	name: {
		color: colors.ui.secondary,
		fontFamily: fonts.body,
		fontSize: 15,

		textTransform: "capitalize",
	},
});
