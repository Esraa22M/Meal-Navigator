import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
export default function useCachedResources() {
	const [isLoadingComplete, setLoadingComplete] = useState(false);

	useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				SplashScreen.preventAutoHideAsync();

				// Load fonts
				const [fontsLoaded] = [require("../assets/fonts/OpenSans-Bold.ttf")];
				if (!fontsLoaded) {
                    console.log('hi there')
					await SplashScreen.hideAsync();
				}
			} catch (e) {
				console.warn(e);
			} finally {
				setLoadingComplete(true);
				SplashScreen.hideAsync();
			}
		}

		loadResourcesAndDataAsync();
	}, []);

	return isLoadingComplete;
}
