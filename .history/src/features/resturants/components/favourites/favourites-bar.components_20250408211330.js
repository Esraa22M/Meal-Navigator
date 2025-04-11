import { Pressable, ScrollView, TouchableOpacity } from "react-native";
import { ResturantInfoCompact } from "../../../../components/resturant-info-compact/restuant-info-compact.components";
import { FavouritesWrapper } from "./favourites-bar.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { TextComponent } from "../../../../components/typography/text.components";
import Animated, {
	useAnimatedScrollHandler,
	useSharedValue,
} from "react-native-reanimated";
import { FavouriteItem } from "./favourite-item.components";
import { View, FlatList, Text, Image } from "react-native";
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
