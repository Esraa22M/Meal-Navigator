
import {  FlatList,  } from "react-native";
import { FavouritesMessage } from "./favourites-messages.components";
import { Item } from "./item.component";
export const FavouritesBar = ({ favourites }) => {
	if (!favourites.length)
		return <FavouritesMessage message="Favourites List is Empty!!" />;
	return (
		<>
			<FlatList
				data={favourites}
				keyExtractor={(item) => item.name}
				renderItem={({ item, index }) => (
					<>
						<Item item={item} index={index} />
					</>
				)}
				horizontal
				showsHorizontalScrollIndicator={false}
				pagingEnabled
			/>
		</>
	);
};
