import camelize from "camelize";
import { resturantsLocations } from "./data";
export const resturantsRequest = (location) => {
	return new Promise((resolve, reject) => {
		const data = resturantsLocations[location];
		if (!data) {
			reject(new Error("Location not found!")); 

		}
		resolve(data);
	});
};
export const resturantsTransform = ({ results = [] }) => {
	if (results.length === 0) throw new Error("No resturants found");
	const mappedResults = results?.map((resturant) => {
		resturant.photos = [...resturant?.images];
		return {
			...resturant,
			address:resturant?.vicinity,
			isOpenNow:
				resturant?.opening_hours && resturant?.opening_hours?.open_now === true,
			isClosedTemporarily: resturant?.business_status === "CLOSED_TEMPORARILY",
		};
	});
	const transformedData = camelize(mappedResults);
	return transformedData;
};
