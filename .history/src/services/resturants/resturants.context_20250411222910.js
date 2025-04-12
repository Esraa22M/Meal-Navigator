import { useEffect, createContext, useState, useContext } from "react";
import { LocationContext } from "../location/location.context";
import { resturantsRequest, resturantsTransform } from "./resturants.services";
export const ResturantContext = createContext();
export const ResturantContextProvider = ({ children }) => {
	const [resturants, setResturants] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const { location } = useContext(LocationContext);
	const reteriveResturants = (locationString) => {
		setResturants([]);
		setIsLoading(true);
		setTimeout(() => {
			resturantsRequest(locationString)
				.then(resturantsTransform)
				.then((resturants) => {
					setIsLoading(false);
					console.log(resturants);
					setResturants(resturants);
				})
				.catch((err) => {
					setError(err);
					console.log(resturants);
				});
		}, 1500);
	};
	useEffect(() => {
		if (location) {
			const locationString = `${location.lat},${location.lng}`;

			reteriveResturants(locationString);
		}
	}, [location]);
	return (
		<ResturantContext.Provider
			value={{ resturants, isLoading, error, setIsLoading }}
		>
			{children}
		</ResturantContext.Provider>
	);
};
