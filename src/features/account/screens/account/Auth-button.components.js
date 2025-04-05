import { Text } from "react-native";
import { RowView } from "../../../resturants/components/resturant-info/resturant-info.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { AuthButtonContainer } from "./account.styles";
import { fonts } from "../../../../infastructure/theme/fonts";
export const AuthButton = ({
	textColor='#ffff',
	iconName,
	title,
	IconPackage,
	onPress,
	outline
}) => {
	return (
		<AuthButtonContainer onPress={onPress} outline={outline}>
			<RowView style={{ justifyContent: "center", alignItems: "center" }}>
				<Text style={{ color: textColor , fontFamily:fonts.body}}>{title}</Text>
				<Spacer postion={"left"} size="small">
					<IconPackage name={iconName} color={textColor} size={20} />
				</Spacer>
			</RowView>
		</AuthButtonContainer>
	);
};
