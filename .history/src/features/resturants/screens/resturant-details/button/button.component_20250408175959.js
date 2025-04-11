import { Pressable, Text, StyleSheet, View } from "react-native";
import Angle from "react-native-vector-icons/FontAwesome";
import { colors } from "../../../../../infastructure/theme/colors";
import { fonts } from "../../../../../infastructure/theme/fonts";
import Ionicons from "react-native-vector-icons/Ionicons";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";
export const Button = ({ addItemToCart }) => {
	return (
		<Pressable
			style={({ pressed }) => {
				return [styles.outerWrapper, pressed && { opacity: 0.7 }];
			}}
			onPress={addItemToCart}
		>
			<View
				style={{
					flexDirection: "row",
					width: "100%",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<View
					style={{
						width: 50,
						height: 50,
						borderRadius: 1000,
						backgroundColor: colors.ui.primary,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Ionicons
						name="cart-outline"
						color={colors.brand.secondary}
						size={24}
					/>
				</View>
				<View>
					<Text style={styles.title}>Add to cart</Text>
				</View>
				<View style={{ flexDirection: "row" }}>
					<Angle name="angle-right" color={colors.brand.secondary} size={24} />
					<Angle
						name="angle-right"
						color={colors.brand.muted}
						size={24}
						style={{ marginLeft: 10 }}
					/>
				</View>
			</View>
		</Pressable>
	);
};
const styles = StyleSheet.create({
	outerWrapper: {
		backgroundColor: colors.brand.primary,
		width: "100%",
		borderRadius: 30,
		paddingRight: 20,
		backgroundColor: colors.brand.primary,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginVertical: 20,
	},
	title: { color: colors.brand.secondary, fontFamily: fonts.body },
});
