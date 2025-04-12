import { Text } from "react-native";
import React,{ useContext, useEffect, useState } from "react";
import {  Marker } from "react-native-maps";
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
			const northeastLat = viewport?.northeast?.lat;
			const southwestLat = viewport?.southwest?.lat;
			setLatDelta(northeastLat - southwestLat);
		}
	}, [location, viewport]);

	

	return (
		<>
			<Search />
			<MapViewWrapper
				style={{ height: "100%" , width:"100%"}}
				region={{
					latitude: lat,
					longitude: lng,
					latitudeDelta: latDelta,
					longitudeDelta: 0.02,
				}}
			>
				{resturants.map((resturant) => (
					<Marker
						key={resturant?.id+resturant?.name} 
						coordinate={{
							latitude: resturant?.geometry?.location?.lat,
							longitude: resturant?.geometry?.location?.lng,
						}}
						title={resturant.name}
						description={resturant.description}
						onPress={() => navigation?.navigate("All", { screen: "ResturantDetails", params: { resturant } })}
					>
					</Marker>
				))}
			</MapViewWrapper>
		</>
	);
};
