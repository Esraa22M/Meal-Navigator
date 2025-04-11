import { useContext } from "react";
import { colors } from "../../infastructure/theme/colors";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { FavouriteButton } from "./favourite-button.components";
export const Favourite = ({ resturant }) => {
	const { addToFavourites, removeFromFavourite, isFavourite } =
		useContext(FavouritesContext);
	const isFavouriteFlag = isFavourite(resturant);
	const FavouriteIcon = isFavouriteFlag
		? { name: "heart", color: "red" }
		: { name: "hearto", color: colors.ui.primary };
	const pressHandler = (event) => {
		event.stopPropagation();
		if (isFavouriteFlag) {
			removeFromFavourite.bind(this, resturant);
		} else {
			addToFavourites.bind(this, resturant);
		}
	};
	return (
		<>
			<FavouriteButton
				pressHandler={pressHandler}
				iconColor={FavouriteIcon.color}
				iconName={FavouriteIcon.name}
			/>
		</>
	);
};
