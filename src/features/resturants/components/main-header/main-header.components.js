import { MainHeaderContainer } from "./main-header.styles";
import Logo from "../../../../../assets/bg-images/dish-dinner-svgrepo-com.svg";
import { useState } from "react";
import { HeaderContent } from "../../../../components/header/header.styles";
import { Search } from "../search/search.components";
import Feather from '@expo/vector-icons/Feather';
import { View } from "react-native";
import { styles } from "./main-header.styles";
import { colors } from "../../../../infastructure/theme/colors";
 const MainHeader = () => {
	const [showSearch, setShowSearch] = useState(false);
	return (
		<>
			{!showSearch && (
				<MainHeaderContainer>
					<View
						style={styles.wrapper}
					>
						<View
							style={styles.logoContainer}
						>
							<Logo />
						</View>
						<HeaderContent
							variant="body"
							style={styles.mainHeader}
						>
							Meal Navigator
						</HeaderContent>
					</View>

					<View
						style={styles.searchOuterContainer}
					>
						<View
							style={styles.searchContainer}
						>
							<Feather
								name="search"
								color={colors.brand.muted}
								size={24}
								onPress={() => setShowSearch(true)}
							/>
						</View>
					</View>
				</MainHeaderContainer>
			)}
			<View>{showSearch && <Search setShowSearch={setShowSearch} />}</View>
		</>
	);
};
export default MainHeader;