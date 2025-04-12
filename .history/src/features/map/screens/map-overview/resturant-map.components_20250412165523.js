import { Text } from "react-native";
import React,{ useContext, useMemo } from "react";
import { Marker } from "react-native-maps";
import { MapViewWrapper } from "./map-overview.styles";
import { Search } from "../../components/search/search.components";
import { LocationContext } from "../../../../services/location/location.context";
import { ResturantContext } from "../../../../services/resturants/resturants.context";

const RestaurantMarker = React.memo(({ resturant, navigation }) => (
  <Marker
    key={resturant?.id}
    coordinate={{
      latitude: resturant?.geometry?.location?.lat,
      longitude: resturant?.geometry?.location?.lng,
    }}
    title={resturant.name}
    description={resturant.description}
    onPress={() => navigation?.navigate("All", { screen: "ResturantDetails", params: { resturant } })}
  />
));

export const MapScreenOverview = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { resturants = [] } = useContext(ResturantContext);

  const latDelta = useMemo(() => {
    if (location && location.viewport) {
      const northeastLat = location.viewport?.northeast?.lat;
      const southwestLat = location.viewport?.southwest?.lat;
      return northeastLat - southwestLat;
    }
    return 0;
  }, [location]);

  if (!location || !resturants.length) {
    return <Text>Loading...</Text>; // أو عنصر تحميل
  }

  return (
    <>
      <Search />
      <MapViewWrapper
        style={{ height: "100%" , width:"100%"}}
        region={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {resturants.map((resturant) => (
          <RestaurantMarker key={resturant?.id} resturant={resturant} navigation={navigation} />
        ))}
      </MapViewWrapper>
    </>
  );
};
