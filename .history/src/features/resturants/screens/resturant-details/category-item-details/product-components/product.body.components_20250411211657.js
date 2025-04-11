import { View, Text, StyleSheet } from "react-native";
import { styles } from "../category-item.styles";
import { colors } from "../../../../../../infastructure/theme/colors";
import { ProductCount } from "./product-count.components";
import { ProductMainInfo } from "./product-main-info.components";
import { ProductDescription } from "./product-description.components";

export const ProductBody = ({ item, quantity, setQuantity }) => {
	return (
		<View style={stylesSheet.outerContainer}>
			<ProductMainInfo
				name={item?.name}
				time={item?.time}
				rating={item?.rating}
			/>
			<View style={styles.subContainer}>
				<View style={stylesSheet.countContainer}>
					<ProductCount
						iconName={"minus"}
						onPress={() => {
							if (quantity > 0) {
								setQuantity(quantity - 1);
							}
						}}
						bgColor={colors.ui.disabled}
						color={colors.ui.secondary}
					/>

					<Text style={styles.productCounter}>{quantity}</Text>

					<ProductCount
						iconName={"plus"}
						onPress={() => setQuantity(quantity + 1)}
						bgColor={colors.ui.primary}
						color={colors.bg.primary}
					/>
				</View>
				<Text style={[styles.price]}>${item.price}</Text>
			</View>
			<ProductDescription description={item?.description} />
		</View>
	);
};

const stylesSheet = StyleSheet.create({
	outerContainer: { justifyContent: "flex-start", margin: "5%" },
	countContainer: { flexDirection: "row", marginVertical: 5 },
});
