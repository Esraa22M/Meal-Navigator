import { View, Text, ScrollView } from "react-native";
import { useContext, useState, useCallback } from "react";
import { ImageView } from "./image-view.components";
import { useNavigation } from "@react-navigation/native";
import { AccountBackground } from "../../../../account/screens/account/account.styles";
import { colors } from "../../../../../infastructure/theme/colors";
import { styles } from "./category-item.styles";
import { Button } from "../button/button.component";
import { BackButton } from "../../../../../ui/back-button/back-button.components";
import { CartContext } from "../../../../../services/cart/cart.context";
import { CloseButton } from "../../../../../ui/close-model/close-model.components";
import { ProductCount } from "./product-components/product-count.components";
import { ProductImage } from "./product-components/product-image.components";
import { ProductMainInfo } from "./product-components/product-main-info.components";
import { ProductDescription } from "./product-components/product-description.components";
import { showToast } from "../../../../../utils/toast.components";
export const CategoryItemDetails = ({ route }) => {
	const [quantity, setQuantity] = useState(1);
	const [showImage, setShowImage] = useState(false);
	const navigation = useNavigation();
	const { addItemToCart } = useContext(CartContext);
	const { item } = route.params;
	const handleNavigation = useCallback(() => {
		setQuantity(1);
		navigation.navigate("cart");
	},[navigation,setQuantity ]);
	const addToCartHandler = useCallback(() => {
		addItemToCart({ ...item }, quantity);
		showToast("success", "Hi", "Dish added to your cart--ready to feast 👋");
		handleNavigation();
	}, [item , quantity]);

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
						<View style={{ justifyContent: "flex-start", margin: "5%" }}>
							<ProductMainInfo
								name={item?.name}
								time={item?.time}
								rating={item?.rating}
							/>
							<View style={styles.subContainer}>
								<View style={{ flexDirection: "row", marginVertical: 5 }}>
									<ProductCount
										iconName={"minus"}
										quantity={quantity}
										setQuantity={setQuantity}
										bgColor={colors.ui.disabled}
										color={colors.ui.secondary}
									/>

									<Text style={styles.productCounter}>{quantity}</Text>
									<ProductCount
										iconName={"plus"}
										quantity={quantity}
										setQuantity={setQuantity}
										bgColor={colors.ui.primary}
										color={colors.bg.primary}
									/>
								</View>
								<Text style={[styles.price]}>${item.price}</Text>
							</View>
							<ProductDescription description={item?.description} />
							<Button
								addItemToCart={addToCartHandler}
								showToast={showToast}
								handleNavigation={handleNavigation}
							/>
						</View>
					</ScrollView>
				)}
			</AccountBackground>
		</View>
	);
};
