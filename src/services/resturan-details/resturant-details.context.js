import { createContext, useState } from "react";

export const ResturantDetailsContext = createContext({
	breakfastExpand: false,
	setBreakfastExpand: () => null,
	lunchExpand: false,
	setLunchExpand: () => null,
	dinnerExpand: false,
	setDinnerExpand: () => null,
	drinksExpand: false,
	setDrinksExpand: () => null,
});

export const ResturantDetailsContextProvider = ({ children }) => {
	const [ breakfastExpand, setBreakfastExpand ] = useState(false);
	const [ lunchExpand, setLunchExpand ] = useState(false);
	const [dinnerExpand, setDinnerExpand ] = useState(false);
	const [drinksExpand, setDrinksExpand ] = useState(false);
	value = {
		breakfastExpand,
		setBreakfastExpand,
		lunchExpand,
		setLunchExpand,
		dinnerExpand,
		setDinnerExpand,
		drinksExpand,
		setDrinksExpand,
	};

	return (
		<ResturantDetailsContext.Provider value={value}>
			{children}
		</ResturantDetailsContext.Provider>
	);
}; 