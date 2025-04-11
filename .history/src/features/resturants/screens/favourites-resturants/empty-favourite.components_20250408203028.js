import { View, StyleSheet, Text, Image } from "react-native";
import { fonts } from "../../../../infastructure/theme/fonts";
import { colors } from "../../../../infastructure/theme/colors";
export const EmptyFavourites = () => {
	return (
		<View style={styles.outerContainer}>
			<View style={styles.innerContainer}>
				<View
					style={styles.imageContainer}
				>
					<Image
						source={require("../../../../../assets/bg-images/collectLove.jpg")}
						resizeMode="contain"
						style={{ width: "80%", height: "100%", borderRadius: 1000 }}
					/>
				</View>
				<View>
					<Text
						style={{
							fontFamily: fonts.monospace,
							fontSize: 18,
							textAlign: "center",
							color: colors.ui.secondary,
						}}
					>
						Ohhh.. Your favourite list is empty. Start exploring delicious
						resturants now!
					</Text>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	outerContainer: { flex: 1, backgroundColor: colors.bg.main },
	innerContainer:{ justifyContent: "center", alignItems: "center" }
	,imageContainer:{
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.bg.primary,
		borderRadius: 1000,
		marginTop: "10%",
		width: "70%",
		height: "55%",
	}
});
