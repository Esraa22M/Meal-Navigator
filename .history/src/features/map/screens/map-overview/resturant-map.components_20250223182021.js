import { MapViewWrapper } from "./map-overview.styles";
import { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { Callout } from "react-native-maps";
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { LoadingDataIndicator } from "../../../../ui/loading-data-indicator/loading-data-indicator.components";
export const ResturantMapView = () => {
	// const navigation = useNavigation();
	// const route = useRoute();
	// const { resturant } = route.params;
	// console.log("hi", resturant)
	// return (
	// 	<>
	// 		<MapViewWrapper
	// 			style={{ height: "100%" }}
	// 			region={{
	// 				latitude: resturant?.viewport?.northeast?.lat,
	// 				longitude: resturant?.viewport?.northeast?.lng,
	// 				latitudeDelta: (resturant?.viewport?.northeast?.lat-resturant?.viewport?.southwest?.lat),
	// 				longitudeDelta:(resturant?.viewport?.northeast?.lng-resturant?.viewport?.southwest?.lng),

	// 			}}
	// 		>
	// 					<Marker
	// 					onPress={()=>navigation.navigate("All", {screen:'ResturantDetails',params:{resturant:resturant}})}
	// 						key={resturant.name}
	// 						coordinate={{
	// 							latitude: resturant.geometry.location.lat,
	// 							longitude: resturant.geometry.location.lng,
	// 						}}
	// 					>
	// 					</Marker>
	// 		</MapViewWrapper>
	// 	</>
	// );
	const navigation = useNavigation();
	const route = useRoute();
	const { resturant } = route.params;

	if (!resturant?.geometry?.location) {
		return <LoadingDataIndicator />;
	}

	return (
		<MapViewWrapper
			style={{ height: "100%" }}
			region={{
				latitude: resturant.geometry.location.lat,
				longitude: resturant.geometry.location.lng,
				latitudeDelta:
					Math.abs(
						(resturant?.viewport?.northeast?.lat || 0) -
							(resturant?.viewport?.southwest?.lat || 0)
					) || 0.02,
				longitudeDelta:
					Math.abs(
						(resturant?.viewport?.northeast?.lng || 0) -
							(resturant?.viewport?.southwest?.lng || 0)
					) || 0.02,
			}}
		>
			<Marker
				onPress={() =>
					navigation.navigate("All", {
						screen: "ResturantDetails",
						params: { resturant },
					})
				}
				animation={true}
				key={resturant.geometry.location.lat + resturant.geometry.location.lng}
				title={resturant.name}
				description={resturant.description}
				coordinate={{
					latitude: resturant.geometry.location.lat,
					longitude: resturant.geometry.location.lng,
				}}
			>
				<Callout style={{ width: 100, height: 50 }}>
					<View>
						<Text>{resturant?.name}</Text>
					</View>
				</Callout>
			</Marker>
		</MapViewWrapper>
	);
};
