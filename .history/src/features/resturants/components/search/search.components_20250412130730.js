import { SearchContainer, SearchBar } from "./search.styles";
import { useContext, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { colors } from "../../../../infastructure/theme/colors";
import { LocationContext } from "../../../../services/location/location.context";
import { usePrevious } from "../../../../../hooks/previousState";
export const Search = () => {
	const { search, error, setError } = useContext(LocationContext);

	const [searchTerm, setSearchTerm] = useState("");
	const prevSearchTerm = usePrevious(searchTerm);

	return (
		<SearchContainer>
			<View
				style={{
					backgroundColor: colors.ui.disabled,
					borderRadius: 10000,
					padding: 5,
					marginHorizontal: 5,
				}}
			>
				<Ionicons
					name="chevron-back"
					size={24}
					onPress={() => {
						if (error) {
							setError(null);
							search(prevSearchTerm);
						}
					}}
				/>
			</View>

			<SearchBar
				style={{ width: "90%" }}
				placeholder="Search for location"
				value={searchTerm}
				onChangeText={(text) => setSearchTerm(text)}
				onSubmitEditing={() => search(searchTerm)}
			/>
		</SearchContainer>
	);
};
