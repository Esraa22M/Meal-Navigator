import { createStackNavigator } from "@react-navigation/stack";
import React, { lazy, Suspense } from "react";
import { LoadingDataIndicator } from "../../ui/loading-data-indicator/loading-data-indicator.components";
const ResturantsScreen = lazy(() =>
	import(
		"../../features/resturants/screens/resturants-view/resturants.screens"
	).then(
		(module) => ({ default: module.ResturantScreen }) // لازم تحددي الـ default
	)
);

const ResturantDetails = lazy(() =>
	import(
		"../../features/resturants/screens/resturant-details/resturant-details.screens"
	).then(
		(module) => ({ default: module.ResturantDetails }) // لازم تحددي الـ default
	)
);
const CategoryItemDetails = lazy(() =>
	import(
		"../../features/resturants/screens/resturant-details/category-item-details/category-item.components"
	).then(
		(module) => ({ default: module.CategoryItemDetails }) // لازم تحددي الـ default
	)
);
const ResturantMapView = lazy(() =>
	import(
		"../../features/map/screens/map-overview/resturant-map.components"
	).then(
		(module) => ({ default: module.ResturantMapView }) // لازم تحددي الـ default
	)
);
const ResturantsStack = createStackNavigator();
export const ResturantsNavigator = () => {
	return (
		<Suspense fallback={<LoadingDataIndicator />}>
			<ResturantsStack.Navigator
				screenOptions={{
					headerShown: false,
					presentation: "modal",
					gestureEnabled: true,
				}}
			>
				<ResturantsStack.Screen
					name="Resturants"
					component={ResturantsScreen}
				/>
				<ResturantsStack.Screen
					name="ResturantDetails"
					component={ResturantDetails}
				/>
				<ResturantsStack.Screen
					name="resturantMapView"
					component={ResturantMapView}
				/>
				<ResturantsStack.Screen
					name="categoryItemDetails"
					component={CategoryItemDetails}
				/>
			</ResturantsStack.Navigator>
		</Suspense>
	);
};
