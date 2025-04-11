import { useContext } from "react";
import { colors } from "../../infastructure/theme/colors";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { FavouriteButton } from "./favourite-button.components";

export const Favourite = ({ restaurant }) => {
  const { addToFavourites, removeFromFavourite, isFavourite } = useContext(FavouritesContext);

  const isFavouriteFlag = isFavourite(restaurant);
  const FavouriteIcon = isFavouriteFlag
    ? { name: "heart", color: "red" }
    : { name: "hearto", color: colors.ui.primary };

  const pressHandler = (event) => {
    event.stopPropagation(); 

    if (isFavouriteFlag) {
      removeFromFavourite(restaurant);
    } else {
      addToFavourites(restaurant);
    }
  };

  return (
    <FavouriteButton
      pressHandler={pressHandler}
      iconColor={FavouriteIcon.color}
      iconName={FavouriteIcon.name}
    />
  );
};
