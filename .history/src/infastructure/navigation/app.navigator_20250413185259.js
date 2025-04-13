import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity } from "react-native";
import React, { lazy, Suspense } from "react";

import { colors } from "../theme/colors";
import { FontAwesome } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { ResturantsNavigator } from "./resturant.navigator";
import CustomTabIcon from "./customIcon.component";
import { useContext } from "react";
import { CartContext } from "../../services/cart/cart.context";
import { FavouriresResturants } from "../../features/resturants/screens/favourites-resturants/favourites-resturants.screens";
import { Cart } from "../../features/resturants/screens/cart-screen/cart.components";
import { Settings } from "../../features/account/screens/settings/settings.components";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { LoadingDataIndicator } from "../../ui/loading-data-indicator/loading-data-indicator.components";

const MapScreenOverview = lazy(() =>
	import("../../features/map/screens/map-overview/map-overview.screens").then(
		(module) => ({ default: module.MapScreenOverview }) // أو اسم الـ export اللي عندك
	)
);

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	All: { icon: "restaurant", iconPackage: MaterialIcons },
	settings: { icon: "app-settings-alt", iconPackage: MaterialIcons },
	map: { icon: "map-marker", iconPackage: FontAwesome },
	cart: { icon: "cart-shopping", iconPackage: FontAwesome6 },
	wishList: { icon: "heart", iconPackage: FontAwesome },
};
const createScreenOptions = ({ route }) => {
	const { cartCount } = useContext(CartContext);
	const { favouritesCount } = useContext(FavouritesContext);

	return {
		headerShown: false,
		tabBarIcon: ({ color, size }) => {
			const iconName = TAB_ICON[route.name].icon;
			const PackageName = TAB_ICON[route.name].iconPackage;
			if (route.name === "cart")
				return (
					<CustomTabIcon
						name={"cart-shopping"}
						color={color}
						size={size}
						badgeCount={cartCount}
					/>
				);
			if (route.name === "wishList")
				return (
					<CustomTabIcon
						name={"heart"}
						color={color}
						size={size}
						badgeCount={favouritesCount}
					/>
				);
			return <PackageName name={iconName} size={size} color={color} />;
		},
		tabBarActiveTintColor: colors.ui.primary,
		tabBarInactiveTintColor: "gray",
	};
};
export const AppNavigator = () => {
	return (
		<Suspense fallback={<LoadingDataIndicator />}>
			<Tab.Navigator screenOptions={createScreenOptions}>
				<Tab.Screen
					component={ResturantsNavigator}
					name="All"
					options={{
						tabBarLabel: "Home",
						popToTopOnBlur: true,
						freezeOnBlur: true,
					}}
					listeners={({ navigation }) => ({
						tabPress: (e) => {
							const state = navigation.getState();
							const allTab = state.routes.find((r) => r.name === "All");

							const nestedRoutes = allTab?.state?.routes;
							const currentScreen =
								nestedRoutes?.[nestedRoutes.length - 1]?.name ?? null;

							if (currentScreen !== "ResturantsScreen") {
								e.preventDefault();
								navigation.reset({
									index: 0,
									routes: [
										{
											name: "All",
											state: {
												index: 0,
												routes: [{ name: "ResturantsScreen" }],
											},
										},
									],
								});
							}
						},
					})}
				/>
				<Tab.Screen component={MapScreenOverview} name="map" />
				<Tab.Screen
					component={FavouriresResturants}
					name="wishList"
					options={{ tabBarLabel: "Foodie Picks" }}
				/>
				<Tab.Screen component={Cart} name="cart" />
				<Tab.Screen component={Settings} name="settings" />
			</Tab.Navigator>
		</Suspense>
	);
};
