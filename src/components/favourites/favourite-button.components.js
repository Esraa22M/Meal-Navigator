import { AddFavouriteButton } from "./favourites.styles";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const FavouriteButton = ({ pressHandler, iconName, iconColor }) => {
	return (
		<AddFavouriteButton
			onPress={(event) => {
				event.stopPropagation();
				pressHandler();
			}}
		>
			<FontAwesome name={iconName} size={24} color={iconColor} />
		</AddFavouriteButton>
	);
};
