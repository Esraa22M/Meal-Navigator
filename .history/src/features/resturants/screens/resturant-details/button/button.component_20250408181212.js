import { Pressable, Text, StyleSheet, View } from "react-native";
import Angle from "react-native-vector-icons/FontAwesome";
import { styles } from "./button.styles";
import { colors } from "../../../../../infastructure/theme/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
export const Button = ({ addItemToCart }) => {
	return (
		<Pressable
			style={({ pressed }) => {
				return [styles.outerWrapper, pressed && { opacity: 0.7 }];
			}}
			onPress={addItemToCart}
		>
			<View
				style={styles.innerWrapper}
			>
				<View
					style={styles.iconWrapper}
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

