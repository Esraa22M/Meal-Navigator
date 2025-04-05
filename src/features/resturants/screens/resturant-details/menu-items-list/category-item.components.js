import {
	View,
	Image,
	StyleSheet,
	Dimensions,
	Text,
	Pressable,
} from "react-native";
import { colors } from "../../../../../infastructure/theme/colors";
import { fonts } from "../../../../../infastructure/theme/fonts";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'

const { width, height } = Dimensions.get("screen");
import { Rating } from "react-native-ratings";
export const CategoryItem = ({ item, navigation }) => {
	const handleNavigation = (item) =>
		navigation.navigate("categoryItemDetails", { item: item });
	return (
		<View style={styles.container}>
			<View style={styles.itemContainer}>
				<Pressable
					onPress={handleNavigation.bind(this, item)}
					style={({ pressed }) => [
						styles.iconContainer,
						pressed && { opacity: 0.6 },
					]}
				>
					<Icon
						name="arrow-top-right"
						size={24}
						color={colors.brand.secondary}
					/>
				</Pressable>
				<View style={styles.cardContainer}>
					<Image
						source={{ uri: item.photo }}
						style={styles.itemImage}
						resizeMode={ImageResizeMode.contain}
					/>
					<View style={styles.mainInfo}>
						<Text style={styles.productName}>{item?.name}</Text>
						<View style={styles.subInfo}>
							<View style={styles.ratingContainer}>
								<Text style={styles.rating}>{+item.rating}</Text>
								<Rating
									ratingColor="#3498db"
									ratingBackgroundColor="#c8c7c8"
									ratingCount={5}
									startingValue={+item.rating}
									readonly
									imageSize={20}
									style={{ paddingVertical: 10 }}
								/>
							</View>
							<View style={styles.priceContainer}>
								<Text style={styles.price}>{item.price} $</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: width,
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "lightgray",
		height: "70%",
	},
	itemContainer: {
		width: "100%",
		height: "100%",
		paddingVertical: "5%",
		alignItems: "center",
		backgroundColor: colors.bg.main,
		position: "relative",
	},
	itemImage: {
		width: "100%",
		height: "100%",
		flex:1,

		alignSelf:"stretch",
		borderRadius: 15,
	},

	cardContainer: {
		width: "80%",
		height: "68%",
		alignItems: "center",
		justifyContent:"center",
		backgroundColor: colors.ui.accent,
		marginTop: 20,
		borderRadius: 15,
	},
	mainInfo: {
		position: "absolute",
		bottom: "-30%",
		backgroundColor: colors.bg.primary,
		width: "80%",
		borderRadius: 18,
		padding: 20,
		minHeight: "50%",
		justifyContent: "center",
		alignItems: "center",
	},
	subInfo: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		width: "100%",
	},
	productName: {
		flex: 1,
		textAlign: "center",
		fontFamily: fonts.heading,
		fontWeight: 600,
		justifyContent: "center",
		textTransform: "capitalize",
		alignItems: "center",
		fontSize: 15,
		letterSpacing: 1.5,
	},
	ratingContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 10,
	},
	priceContainer: {
		alignItems: "center",
		justifyContent: "center",
		minWidth: 50,
		minHeight: 50,
	},
	price: {
		color: colors.ui.primary,
		fontFamily: fonts.body,
		fontWeight: "800",
	},
	rating: {
		color: colors.brand.muted,
		fontFamily: fonts.body,
		marginHorizontal: 5,
		fontWeight: "800",
	},
	iconContainer: {
		top: "20",
		left: "20",
		zIndex: 1000,
		padding: 7,
		backgroundColor: colors.ui.primary,
		borderRadius: 1000,
		position: "absolute",
	},
});
