import { FlatList, View, ImageBackground, Text } from "react-native";
import { useContext } from "react";
import { colors } from "../../../../infastructure/theme/colors";
import { CartContext } from "../../../../services/cart/cart.context";
import { CartItem } from "./cart-item.components";
import { HeaderContent } from "../../../../components/header/header.styles";
import { CartHeader } from "./components/cart-header.components";
import { EmptyCart } from "./components/cart-empty.components";
import Toast from "react-native-toast-message";
import { useCallback } from "react";
export const Cart = () => {
	const { cartItems, cartTotal } = useContext(CartContext);
	const showToast = useCallback(() => {
			
		Toast.show({
			type: "success",
			text1: "Hi,",
			text2: "Item removed --kitchen's waiting for your next choice 👋",
			visibilityTime: 4000,
			onPress: () => Toast.hide(),

		});
	});
	return (
		<>
			{cartItems.length > 0 ? (
				<ImageBackground
					source={require("../../../../../assets/bg-images/wallpaperMeal.jpg")}
					resizeMode="cover"
					style={{ flex: 1 }}
				>
					<View
						style={{
							flex: 5,
							backgroundColor: "white",
							borderRadius: 50,
							marginBottom: 10,
							width: "100%",
						}}
					>
						<CartHeader/>
						<FlatList
							data={cartItems}
							showsVerticalScrollIndicator={false}
							keyExtractor={(item, index) => (item.id+ item.name) || index.toString()}
							renderItem={({ item }) => <CartItem item={item} showToast={showToast } />}
						/>
					</View>
					
						<View style={{ flex: 1 }}>
							<HeaderContent
								variant="body"
								style={{
									fontSize: 20,
									padding: 16,
									margin: 20,
									backgroundColor: colors.ui.primary,
									color: "white",
									textAlign: "center",
									borderRadius: 10,
								}}
							>
								<Text>Total: {cartTotal ? cartTotal.toFixed(2) : "0.00"}$</Text>
							</HeaderContent>
						</View>
					
				</ImageBackground>
			) : (
				<EmptyCart />
			)}
		</>
	);
};
