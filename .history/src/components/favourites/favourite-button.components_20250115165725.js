import { AddFavouriteButton } from "./favourites.styles";
import AntDesign from "@expo/vector-icons/AntDesign";

export const FavouriteButton = ({
	pressHandler,
	iconName,
	iconColor,
	
}) => {
	
	return (
		<AddFavouriteButton
			onPress={() => {
				pressHandler();
			}}
		>
			<AntDesign name={iconName} size={24} color={iconColor} />
		</AddFavouriteButton>
	);
};
