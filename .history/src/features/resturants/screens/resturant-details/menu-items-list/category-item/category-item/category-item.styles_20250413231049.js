import { StyleSheet ,Dimensions} from "react-native";
import { colors } from "../../../../../../../infastructure/theme/colors";
import { fonts } from "../../../../../../../infastructure/theme/fonts";
const { width, height } = Dimensions.get("screen");
export  const styles = StyleSheet.create({
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