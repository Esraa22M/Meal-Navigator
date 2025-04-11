import { SearchContainer } from "./search.styles";
import { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../../services/location/location.context";
export const Search = () => {
	const {  search,  } = useContext(LocationContext);
		const [searchTerm, setSearchTerm] = useState("");
		return (
		<SearchContainer>
			<Searchbar
				onIconPress={() => {
					search(searchTerm);
				}}
                icon="map"
				placeholder="Search for location"
				// value={searchTerm}
				// onChangeText={(text)=>setSearchTerm(text)}
				// onSubmitEditing={()=>search(searchTerm)}

			/>
		</SearchContainer>
	);
};
