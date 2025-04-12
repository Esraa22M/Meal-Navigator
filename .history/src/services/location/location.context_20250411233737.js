import React, { useState, createContext, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.services";
export const LocationContext = createContext();
export const LocationContextProvider = ({ children }) => {
	const [location, setLocation] = useState(null);
	const [searchkeywordTerm, setSearchKeywordTerm] = useState("san francisco");
	const [isLoadingL, setIsLoadingL] = useState(false);
	const [error, setError] = useState(null);
	const onSearch = (keyWord = "") => {
		setError(null);

		setSearchKeywordTerm(keyWord);
		if (keyWord.length === 0) return;
		setIsLoadingL(true);
		locationRequest(keyWord.toLowerCase().trim())
			.then(locationTransform)
			.then((result) => {
				setIsLoadingL(true);
				setLocation(result);
				setIsLoadingL(false);
			})
			.catch((err) => {
				console.log("oooo||");
				console.log(err)
				setError(err);
				setIsLoadingL(false);
			});
	};
	useEffect(() => {
		onSearch(searchkeywordTerm);
	}, [searchkeywordTerm]);
	return (
		<LocationContext.Provider
			value={{
				location,
				error,
				isLoadingL,
				search: onSearch,
			}}
		>
			{children}
		</LocationContext.Provider>
	);
};
