import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState, useEffect } from "react";
export const FavouritesContext = createContext();
export const FavouritesContextProvider = ({ children }) => {
	const [favourites, setFavourites] = useState([]);
	const [isToggled, setIsToggled] = useState(false);
	const storeFavourites = async (value) => {
		try {
			const jsonValue = JSON.stringify(value);
			await AsyncStorage.setItem("favourites", jsonValue);
		} catch (error) {
			console.log(error);
		}
	};
	const getFavourites = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem("favourites");
			jsonValue&&setFavourites(JSON.parse(jsonValue));
		} catch (error) {
			console.log(error);
		}

	};
	const addFavourite = (resturant) => {
		const isFound = !!currentFavorites.find(res => res.id === resturant.id);
		if (isFound) return;
		setFavourites((currentFavorites) => [...currentFavorites, resturant]);
	};
	const removeFavourite = (resturant) => {
		const newFavourites = favourites.filter(
			(favResturant) => favResturant.placeId !== resturant.placeId
		);
		setFavourites([...newFavourites]);
	};
	const isFavourite = (resturant) => {
		const isFavouriteResturant = favourites?.find(
			(res) => res.placeId === resturant.placeId
		);
		return isFavouriteResturant;
	};
	useEffect(() => {getFavourites() },[])

	useEffect(() => {storeFavourites(favourites) },[favourites])
	value = {
		favourites,
		addToFavourites: addFavourite,
		removeFromFavourite: removeFavourite,
		isFavourite,
		isToggled,
		setIsToggled,
		favouritesCount:favourites?.length
	};
	return (
		<FavouritesContext.Provider value={value}>
			{children}
		</FavouritesContext.Provider>
	);
};
