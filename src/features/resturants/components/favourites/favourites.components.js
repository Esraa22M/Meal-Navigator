import { FavouriteButton } from "../../../../components/favourites/favourite-button.components";
import { useContext } from "react";
import { useCallback } from "react";
import { Pressable } from "react-native";
import { colors } from "../../../../infastructure/theme/colors";
import { FavouritesContext } from "../../../../services/favourites/favourites.context";
export const FavouritesView = ({ navigation }) => {
	const { setIsToggled, isToggled } = useContext(FavouritesContext);
	const navigateHandler =useCallback( () => {
		navigation.navigate("wishList");
	},navigation);
	return (
		<FavouriteButton
			iconColor={colors.ui.primary}
			iconName={isToggled ? "heart" : "hearto"}
			size={50}
			navigation={navigation}
			style={{
				shadowColor: colors.ui.primary,
				shadowOffset: { width: 0, height: 0.5 },
				shadowOpacity: 0.3,
				shadowRadius: 2,
				elevation: 5,
				justifyContent: "center",
				alignItems: "center",
				borderRadius: 100000,
			}}
			pressHandler={navigateHandler}
		/>
	);
};
