import { Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { Callout, Marker } from "react-native-maps";
import { MapViewWrapper } from "./map-overview.styles";
import { Search } from "../../components/search/search.components";
import { LocationContext } from "../../../../services/location/location.context";
import { ResturantContext } from "../../../../services/resturants/resturants.context";

export const MapScreenOverview = ({ navigation }) => {
	const { location } = useContext(LocationContext);
	const { resturants = [] } = useContext(ResturantContext);
	const [latDelta, setLatDelta] = useState(0);
	const { lat, lng, viewport } = location;

	useEffect(() => {
		if (location && viewport) {
			const northeastLat = viewport.northeast.lat;
			const southwestLat = viewport.southwest.lat;
			setLatDelta(northeastLat - southwestLat);
		}
	}, [location, viewport]);

	if (!lat || !lng || resturants.length === 0) {
		return <Text>Loading...</Text>;
	}

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
				{resturants.map((resturant) => (
					<Marker
						key={resturant.id} 
						coordinate={{
							latitude: resturant.geometry.location.lat,
							longitude: resturant.geometry.location.lng,
						}}
						title={resturant.name}
						description={resturant.description}
						onPress={() => navigation.navigate("All", { screen: "ResturantDetails", params: { resturant } })}
					>
						<Callout>
							<Text>{resturant.name}</Text>
						</Callout>
					</Marker>
				))}
			</MapViewWrapper>
		</>
	);
};
