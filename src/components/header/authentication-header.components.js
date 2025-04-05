import { SubHeadingContent } from "./header.styles";
import { HeaderContent } from "./header.styles";
import Logo from "../../../assets/bg-images/dish-dinner-svgrepo-com-form.svg";

import { View } from "react-native";
import { Spacer } from "../spacer/spacer.component";
export const AuthHeader = () => {
	return (
		<View>
			<Spacer postion={"top"} size="medium" />
			<View style={{flexDirection:"row" , alignItems:"center", marginHorizontal:"2%"}}>
				<Logo/>
				<HeaderContent variant="body" account style={{ fontSize: 35 }}>
					Meal Navigator
				</HeaderContent>
			</View>
			<Spacer postion={"top"} size="large" />

			<SubHeadingContent variant="body" account>
				One cannot think well, love well, sleep well, if one has not dined well.
			</SubHeadingContent>
		</View>
	);
};
