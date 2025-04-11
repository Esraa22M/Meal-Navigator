import { View, Text, StyleSheet, ScrollView } from "react-native";
import { AccountBackground } from "../../../../account/screens/account/account.styles";
import { colors } from "../../../../../infastructure/theme/colors";
import { fonts } from "../../../../../infastructure/theme/fonts";
import { Button } from "../button/button.component";
import { useContext, useState } from "react";
import { BackButton } from "../../../../../ui/back-button/back-button.components";
import { CartContext } from "../../../../../services/cart/cart.context";
import { useNavigation } from "@react-navigation/native";
import { ImageView } from "./image-view.components";
import { CloseButton } from "../../../../../ui/close-model/close-model.components";
import Toast from "react-native-toast-message";
import { ProductCount } from "./product-count.components";
import { ProductImage } from "./product-image.components";
import { ProductMainInfo } from "./product-main-info.components";
import { ProductDescription } from "./product-description.components";

export const CategoryItemDetails = ({ route }) => {
	const { addItemToCart } = useContext(CartContext);
	const { item } = route.params;
	let [quantity, setQuantity] = useState(1);
	const navigation = useNavigation();
	const handleNavigation = () => {
		setQuantity(1);
		navigation.navigate("cart");
	};
	const addToCartHandler = () => {
		addItemToCart({ ...item }, quantity);
		showToast();
		handleNavigation();
	};
	const showToast = () => {
		Toast.show({
			type: "success",
			text1: "Hi,",
			text2: "Dish added to your cart--ready to feast 👋",
		});
	};
	const [showImage, setShowImage] = useState(false);
	return (
		<View style={{ flex: 1, width: "100%", height: "100%" }}>
			<AccountBackground
				source={require("../../../../../../assets/bg-images/wallpaperMeal.jpg")}
				style={{ position: "relative", width: "100%", flex: 1 }}
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
								<Text style={[styles.productName]}>${item.price}</Text>
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
export const styles = StyleSheet.create({
	mainContentWrapper: {
		backgroundColor: colors.bg.primary,
		position: "absolute",
		width: "100%",
		bottom: 0,
		flex: 1,
		height: "75%",
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		width: "100%",
	},
	productName: {
		fontFamily: fonts.heading,
		fontSize: 15,
		fontWeight: "700",
		lineHeight: 30,
		color: colors.ui.secondary,
		letterSpacing: 0.8,
	},
	rating: {
		fontFamily: fonts.body,
		marginHorizontal: 5,
		fontSize: 14,
		fontWeight: "700",
		color: colors.ui.accent,
	},
	subContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		margin: 10,
	},
	productCounter: {
		lineHeight: 20,
		fontSize: 16,
		fontFamily: fonts.body,
		marginHorizontal: 5,
	},
});
