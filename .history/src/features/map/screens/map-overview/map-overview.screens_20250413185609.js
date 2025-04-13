import React, { useContext, useEffect, useState } from "react";
import { Marker } from "react-native-maps";
import { MapViewWrapper } from "./map-overview.styles";
import { Search } from "../../components/search/search.components";
import { LocationContext } from "../../../../services/location/location.context";
import { ResturantContext } from "../../../../services/resturants/resturants.context";
import { View } from "react-native";
import { LoadingDataIndicator } from "../../../../ui/loading-data-indicator/loading-data-indicator.components";

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

	const handleNavigation = (resturant) => {
		if (
			resturant?.name &&
			resturant?.geometry?.location?.lat &&
			resturant?.geometry?.location?.lng
		) {
			console.log("Navigating to:", resturant?.name);
			navigation?.navigate("All", {
				screen: "ResturantDetails",
				params: { resturant },
				initial:false
			});
		} else {
			console.warn("missing data");
		}
	};

	if (!location || !lat || !lng || !viewport) {
		return <LoadingDataIndicator />;
	}

	return (
		<View style={{ width: "100%", height: "100%" }}>
			{/* <Search /> */}
			<MapViewWrapper
				style={{ height: "100%", width: "100%" }}
				region={{
					latitude: lat,
					longitude: lng,
					latitudeDelta: latDelta,
					longitudeDelta: 0.02,
				}}
			>
				{resturants
					.filter(
						(resturant) =>
							resturant?.geometry?.location?.lat &&
							resturant?.geometry?.location?.lng
					)
					.map((resturant) => (
						<Marker
							key={resturant?.id + resturant?.name}
							coordinate={{
								latitude: resturant?.geometry?.location?.lat,
								longitude: resturant?.geometry?.location?.lng,
							}}
							title={resturant?.name}
							description={resturant?.description}
							onPress={() => handleNavigation(resturant)}
						/>
					))}
			</MapViewWrapper>
		</View>
	);
};
