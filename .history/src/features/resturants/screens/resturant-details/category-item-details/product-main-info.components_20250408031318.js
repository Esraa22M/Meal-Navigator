import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../../../../../infastructure/theme/colors";
export const ProductMainInfo = ({ name, time, rating }) => {
	return (
		<View style={styles.container}>
			<View>
				<Text
					style={[{ ...styles.productName, width: "250", marginVertical: 10 }]}
				>
					{name}
				</Text>
				<View style={styles.timeContainer}>
					<Text style={styles.time}>{time}</Text>
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

				<Text style={styles.rating}>{rating}</Text>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: "5%",
	},
	timeContainer: { flexDirection: "row", alignItems: "center" },
	time: {
		fontSize: 16,
		fontFamily: fonts.body,
		color: colors.ui.accent,
		marginVertical: 10,
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
});
