import { View, StyleSheet, Text, Image } from "react-native";
import { BackButton } from "../../../../ui/back-button/back-button.components";
import { HeaderContent } from "../../../../components/header/header.styles";
import { fonts } from "../../../../infastructure/theme/fonts";
import { colors } from "../../../../infastructure/theme/colors";
export const EmptyFavourites = () => {
	return (
		<View style={styles.container}>
			{/* <BackButton style={{ top: 40 }} /> */}
			{/* <HeaderContent
				variant="body"
				style={{ fontSize: 28, padding: 16, margin: 50 }}
			>
				Foodie Picks!
			</HeaderContent> */}
			<View style={{ justifyContent: "center", alignItems: "center" }}>
				<View
					style={{
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: colors.bg.primary,
						borderRadius: 1000,
						marginTop: "10%",
						width: "70%",
						height: "55%",
					}}
				>
					<Image
						source={require("../../../../../assets/bg-images/collectLove.jpg") }
						resizeMode="contain"

						style={{width:"80%", height:"100%", borderRadius:1000}}
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
						Ohhh.. Your favourite list is empty. Start exploring delicious resturants now!
					</Text>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: colors.bg.main, },
});
