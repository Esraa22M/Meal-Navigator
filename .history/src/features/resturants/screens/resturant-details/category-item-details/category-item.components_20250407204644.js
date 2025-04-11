import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { AccountBackground } from "../../../../account/screens/account/account.styles";
import { colors } from "../../../../../infastructure/theme/colors";
import { fonts } from "../../../../../infastructure/theme/fonts";
import Icon from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button } from "../button/button.component";
import { useContext, useState } from "react";
import { Dimensions } from "react-native";
import { BackButton } from "../../../../../ui/back-button/back-button.components";
import { CartContext } from "../../../../../services/cart/cart.context";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ImageView } from "./image-view.components";
import { CloseButton } from "../../../../../ui/close-model/close-model.components";
import Toast from "react-native-toast-message";
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'
const { width } = Dimensions.get("screen");

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
				{showImage&&<CloseButton closeHandler={() => setShowImage(!showImage)} />}
				{showImage ? (
					<ImageView imageUrl={item.photo} />
				) : (
					<ScrollView contentContainerStyle={styles.mainContentWrapper}>
						<View
							style={{
								width: "80%",
								height: "40%",
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "center",
								marginTop: "-35%",
								marginHorizontal: "10%",
							}}
						>
							<Pressable onPress={() => setShowImage(!showImage)}>
								<Image
									source={{ uri: item?.photo }}
								resizeMode={ImageResizeMode.contain}
									style={{
										width: width * 0.7,
										height: width * 0.7,
										borderRadius: 3000,
										borderColor: colors.ui.primary,
										borderWidth: 0.5,
									}}
								/>
							</Pressable>
						</View>
						<View style={{ justifyContent: "flex-start", margin: "5%" }}>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginTop: "5%",
								}}
							>
								<View>
									<Text
										style={[
											styles.productName,
											{ width: "250", marginVertical: 10 },
										]}
									>
										{item?.name}
									</Text>
									<View style={{ flexDirection: "row", alignItems: "center" }}>
										<Text
											style={{
												fontSize: 16,
												fontFamily: fonts.body,
												color: colors.ui.accent,
												marginVertical: 10,
											}}
										>
											{item.time}
										</Text>
										<View style={{ marginHorizontal: 5 }}>
											<Ionicons
												name="alarm-outline"
												size={20}
												color={colors.ui.primary}
											/>
										</View>
									</View>
								</View>
								<View style={{ flexDirection: "row" }}>
									<Icon name="star" size={20} color={"#FDDA0D"} />

									<Text style={styles.rating}>{item?.rating}</Text>
								</View>
							</View>
							<View style={styles.subContainer}>
								<View style={{ flexDirection: "row", marginVertical: 5 }}>
									<Pressable
										onPress={() => {
											setQuantity(Math.max(quantity - 1, 1));
										}}
										style={({pressed})=>[{
											backgroundColor: colors.ui.disabled,
											borderRadius: 100,
											width: 40,
											height: 40,
											marginRight: 5,
											justifyContent: "center",
											alignItems: "center",
										},pressed&&styles.activeButton]}
									>
										<Icon name="minus" size={15} color={colors.ui.secondary} />
									</Pressable>
									<Text
										style={{
											lineHeight: 20,
											fontSize: 16,
											fontFamily: fonts.body,
											marginHorizontal: 5,
										}}
									>
										{quantity}
									</Text>
									<Pressable
										onPress={() => {
											setQuantity(quantity + 1);
											// addItemToCart(item);
										}}
										style={({pressed})=>[{
											backgroundColor: colors.ui.primary,
											borderRadius: 100,
											width: 40,
											height: 40,
											justifyContent: "center",
											marginLeft: 5,
											alignItems: "center",
										},pressed&&styles.activeButton]}
									>
										<Icon name="plus" size={15} color={colors.bg.primary} />
									</Pressable>
								</View>
								<Text style={[styles.productName]}>${item.price}</Text>
							</View>
							<View>
								<Text
									style={[
										styles.rating,
										{
											marginBottom: 10,

											justifyContent: "flex-start",
										},
									]}
								>
									Description
								</Text>
								<Text
									style={{
										fontSize: 15,
										fontFamily: fonts.body,
										color: colors.ui.accent,
									}}
								>
									{item?.description}
								</Text>
								<Button
									addItemToCart={addToCartHandler}
									showToast={showToast}
									handleNavigation={handleNavigation}
								/>
							</View>
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
	counterContainer: {},
	activeButton: {
		shadowColor: colors.ui.accent,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
		transform: [{ scale: 1.05 }]
	  },
	
});
