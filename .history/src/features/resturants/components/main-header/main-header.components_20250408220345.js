import { MainHeaderContainer } from "./main-header.styles";
import Logo from "../../../../../assets/bg-images/dish-dinner-svgrepo-com.svg";
import { useState } from "react";
import { HeaderContent } from "../../../../components/header/header.styles";
import { Search } from "../search/search.components";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import { styles } from "./main-header.styles";
import { colors } from "../../../../infastructure/theme/colors";
export const MainHeader = () => {
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
						style={{
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "row",
						}}
					>
						<View
							style={{
								backgroundColor: colors.ui.disabled,
								borderRadius: 10000,
								padding: 5,
								marginLeft: 5,
							}}
						>
							<AntDesign
								name="search1"
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
