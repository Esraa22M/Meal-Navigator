import { useFonts } from "expo-font";
import React, { Suspense, lazy } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { ResturantContextProvider } from "./src/services/resturants/resturants.context";
import { theme } from "./src/infastructure/theme";
import { Raleway_400Regular } from "@expo-google-fonts/raleway";
import { Quicksand_400Regular } from "@expo-google-fonts/quicksand";
import { LoadingOverLay } from "./src/ui/loading-overlay.components";
import { Bokor_400Regular } from "@expo-google-fonts/bokor";
import { LocationContextProvider } from "./src/services/location/location.context";
import { ResturantDetailsContextProvider } from "./src/services/resturan-details/resturant-details.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { AuthFormContextProvider } from "./src/services/authentication/auth-form.context";
import { CartProvider } from "./src/services/cart/cart.context";
import Toast from "react-native-toast-message";
import { LoadingDataIndicator } from "./src/ui/loading-data-indicator/loading-data-indicator.components";
const Navigation = React.lazy(() => import("./src/infastructure/navigation"));

export default function App() {
	const [fontsLoaded] = useFonts({
		Raleway_400Regular,
		Quicksand_400Regular,
		Bokor_400Regular,
	});
	if (!fontsLoaded) {
		return <LoadingOverLay />;
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<AuthFormContextProvider>
					<AuthenticationContextProvider>
						<FavouritesContextProvider>
							<ResturantDetailsContextProvider>
								<LocationContextProvider>
									<ResturantContextProvider>
										<CartProvider>
											<Suspense fallback={<LoadingDataIndicator />}>
												<Navigation />
											</Suspense>
										</CartProvider>
									</ResturantContextProvider>
								</LocationContextProvider>
							</ResturantDetailsContextProvider>
						</FavouritesContextProvider>
					</AuthenticationContextProvider>
				</AuthFormContextProvider>
				<ExpoStatusBar style="auto" />
			</ThemeProvider>
			<Toast />
		</>
	);
}
