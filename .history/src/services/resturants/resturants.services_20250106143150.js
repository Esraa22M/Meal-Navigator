import camelize from "camelize";
import { resturantsLocations, resturantsImages } from "./data";
export const resturantsRequest = (location) => {
	return new Promise((resolve, reject) => {
		const data = resturantsLocations[location];
		if (!data) {
			reject("Not found !");
		}
		resolve(data);
	});
};
export const resturantsTransform = ({ results = [] }) => {
	const mappedResults = results.map((resturant) => {
		resturant.photos = [...resturant.images];
		return {
			...resturant,
			address:resturant.vicinity,
			isOpenNow:
				resturant?.opening_hours && resturant?.opening_hours?.open_now === true,
			isClosedTemporarily: resturant.business_status === "CLOSED_TEMPORARILY",
		};
	});
	const transformedData = camelize(mappedResults);
	return transformedData;
};
