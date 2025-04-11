import { View, ScrollView } from "react-native";
import { useContext, useState, useCallback } from "react";
import { ImageView } from "./image-view.components";
import { useNavigation } from "@react-navigation/native";
import { AccountBackground } from "../../../../account/screens/account/account.styles";
import { styles } from "./category-item.styles";
import { Button } from "../button/button.component";
import { BackButton } from "../../../../../ui/back-button/back-button.components";
import { CartContext } from "../../../../../services/cart/cart.context";
import { CloseButton } from "../../../../../ui/close-model/close-model.components";
import { ProductImage } from "./product-components/product-image.components";
import { ProductBody } from "./product-components/product.body.components";
import { showToast } from "../../../../../utils/toast.components";
export const CategoryItemDetails = ({ route }) => {
	const [quantity, setQuantity] = useState(1);
	const [showImage, setShowImage] = useState(false);
	const navigation = useNavigation();
	const { addItemToCart } = useContext(CartContext);
	const { item } = route.params;
	const handleNavigation = useCallback(() => {
		navigation.navigate("cart");
	}, [navigation, setQuantity]);
	const addToCartHandler = useCallback(() => {
		addItemToCart({ ...item }, quantity);
		setQuantity(1);
		showToast("success", "Hi", "Dish added to your cart--ready to feast 👋");
		handleNavigation();
	}, [item, quantity]);

	return (
		<View style={styles.wrapper}>
			<AccountBackground
				source={require("../../../../../../assets/bg-images/wallpaperMeal.jpg")}
				style={styles.background}
			>
				<BackButton />
				{showImage && (
					<CloseButton closeHandler={() => setShowImage(!showImage)} />
				)}
				{showImage ? (
					<ImageView imageUrl={item.photo} />
				) : (
					<ScrollView contentContainerStyle={styles.mainContentWrapper}>
						<ProductImage
							setShowImage={setShowImage}
							showImage={showImage}
							photo={item?.photo}
						/>
						<ProductBody quantity={quantity} setQuantity={setQuantity} item={item}/>
						<View style={{ justifyContent: "flex-start", marginHorizontal: "5%" }}>
							<Button
								addItemToCart={addToCartHandler}
							/>
						</View>
					</ScrollView>
				)}
			</AccountBackground>
		</View>
	);
};
