import { useContext } from "react";
import { FavouritesContext } from "../../../../services/favourites/favourites.context";
import { FlatList } from "react-native";
import { HeaderContent } from "../../../../components/header/header.styles";
import { Item } from "../../components/favourites/item.component";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { View } from "react-native";
import { colors } from "../../../../infastructure/theme/colors";
import { BackButton } from "../../../../ui/back-button/back-button.components";
import { EmptyFavourites } from "./empty-favourites/empty-favourite.components";
export const FavouriresResturants = () => {
	const { favourites } = useContext(FavouritesContext);
	return (
		<>
			{favourites.length > 0 ? (
				<View style={{ backgroundColor: colors.bg.primary, flex: 1 }}>
					<Spacer postion="top" size={"large"} />
					<Spacer postion="top" size={"large"} />
					<BackButton style={{ top: 40 }} />
					<HeaderContent
						variant="body"
						style={{ fontSize: 28, padding: 16, margin: 50 }}
					>
						Foodie Picks!
					</HeaderContent>

					<FlatList
						data={favourites}
						renderItem={({ item }) => (
							<Item item={item} />
						)}
						contentContainerStyle={{
							justifyContent: "center",
							alignItems: "center",
							flexGrow: 0,
						}}
						horizontal
						keyExtractor={(item) => item.name+item.id}
						decelerationRate={"fast"}
						showsHorizontalScrollIndicator={false}
						pagingEnabled={true}
					/>
				</View>
			) : (
				<EmptyFavourites />
			)}
		</>
	);
};
