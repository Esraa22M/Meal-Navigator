import { Callout } from "react-native-maps";
import { ResturantInfoCompact } from "../../../../components/resturant-info-compact/restuant-info-compact.components";
export const MapCallout = ({ resturant,navigation }) => {
	return (
		<Callout onPress={()=>{navigation.navigate('ResturantDetails',{resturant})}}>
			<ResturantInfoCompact resturant={resturant}  />
		</Callout>
	);
};
