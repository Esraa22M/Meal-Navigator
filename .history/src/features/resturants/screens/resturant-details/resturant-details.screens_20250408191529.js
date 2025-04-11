import { View } from "react-native";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Header } from "./resturant-details-header/resturant-details.header.components";
import { MenuLists } from "./menu-MenuLists/menu-lists/menu-lists.components";
import { LoadingDataIndicator } from "../../../../ui/loading-data-indicator/loading-data-indicator.components";
export const ResturantDetails = ({ route }) => {
	const { resturant } = route?.params;
	return (
		<View style={{ flex: 1 }}>
			{!resturant?<LoadingDataIndicator/>:<Spacer postion={"bottom"} size="large">
				<Header item={resturant} />
				<MenuLists item={resturant} />
			</Spacer>}
		</View>
	);
};
