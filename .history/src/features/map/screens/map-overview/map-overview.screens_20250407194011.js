import { MapViewWrapper } from "./map-overview.styles";
import { Search } from "../../components/search/search.components";
import { LocationContext } from "../../../../services/location/location.context";
import { ResturantContext } from "../../../../services/resturants/resturants.context";
import { useContext, useEffect, useState } from "react";
import { LoadingDataIndicator } from "../../../../ui/loading-data-indicator/loading-data-indicator.components";
import { Callout, Marker } from "react-native-maps";
import { Text,View } from "react-native";

import { MapCallout } from "../../components/map-callout/callout-view.components";
export const MapScreenOverview = ({ navigation }) => {
	const { location } = useContext(LocationContext);
	const { resturants = [] } = useContext(ResturantContext);
	const [latDelta, setLatDelta] = useState(0);
	const { lat, lng, viewport } = location;

	useEffect(() => {
		const northeastLat = viewport.northeast.lat;
		const southwestLat = viewport.southwest.lat;
		setLatDelta(northeastLat - southwestLat);
	}, [location, viewport]);
	return (
		<>
			<Search />
			<MapViewWrapper
				style={{ height: "100%" }}
				region={{
					latitude: lat,
					longitude: lng,
					latitudeDelta: latDelta,
					longitudeDelta: 0.02,
				}}
			>
				{   resturants.map((resturant) => {
					return (
						<Marker
						onPress={()=>navigation.navigate("All", {screen:'ResturantDetails',params:{resturant:resturant}})}
						key={resturant.geometry.location.lat + resturant.geometry.location.lng}

							coordinate={{
								latitude: resturant.geometry.location.lat,
								longitude: resturant.geometry.location.lng,
							}}
							title={resturant.name}
							description={resturant.description}
>
						</Marker>
					);
				})}
			</MapViewWrapper>
		</>
	);
};
