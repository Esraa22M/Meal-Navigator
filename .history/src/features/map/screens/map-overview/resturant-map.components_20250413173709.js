import { MapViewWrapper } from "./map-overview.styles";
import { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { LoadingDataIndicator } from "../../../../ui/loading-data-indicator/loading-data-indicator.components";

export const ResturantMapView = () => {
	const navigation = useNavigation();
	const route = useRoute();
	const { resturant } = route?.params;

	if (!resturant?.geometry?.location) {
		return <LoadingDataIndicator />;
	}

	const { northeast = {}, southwest = {} } = resturant?.viewport || {};
	const { lat = 0, lng = 0 } = resturant?.geometry?.location;

	const latitudeDelta = Math.abs(northeast?.lat - southwest?.lat) || 0.02;
	const longitudeDelta = Math.abs(northeast?.lng - southwest?.lng) || 0.02;
	const handleNavigation = () => {
		if(resturant)
		navigation.navigate("All", {
			screen: "ResturantDetails",
			params: { resturant },
		});
	}
	return (
		<MapViewWrapper
			style={{ height: "100%" }}
			key={resturant.id}
			region={{
				latitude: lat,
				longitude: lng,
				latitudeDelta,
				longitudeDelta,
			}}
		>
			<Marker
				onPress={
					handleNavigation
				}
				animation={true}
				key={resturant?.id}
				title={resturant?.name}
				description={resturant?.description}
				coordinate={{
					latitude: lat,
					longitude: lng,
				}}
			/>
		</MapViewWrapper>
	);
};
