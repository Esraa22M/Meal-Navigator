import { useEffect, createContext, useState, useContext } from "react";
import { LocationContext } from "../location/location.context";
import { resturantsRequest, resturantsTransform } from "./resturants.services";
export const ResturantContext = createContext();
export const ResturantContextProvider = ({ children }) => {
	const [resturants, setResturants] = useState([]);
	const [isLoadingResturants, setIsLoadingResturants] = useState(false);
	const [error, setError] = useState(null);
	const { location } = useContext(LocationContext);
	const reteriveResturants = (locationString) => {
		setIsLoadingResturants(true);
		setResturants([]);
		setError(null);
		setTimeout(() => {
			resturantsRequest(locationString)
				.then(resturantsTransform)
				.then((resturants) => {
					setIsLoadingResturants(false);
					setError(null);
					setResturants(resturants);
				})
				.catch((err) => {
					setIsLoadingResturants(false);
					setError(err.message);
				});
		}, 200);
	};
	useEffect(() => {
		if (location) {
			const locationString = `${location?.lat},${location?.lng}`;

			reteriveResturants(locationString);
		}
	}, [location]);
	return (
		<ResturantContext.Provider
			value={{ resturants, isLoadingResturants, error, setIsLoadingResturants }}
		>
			{children}
		</ResturantContext.Provider>
	);
};
