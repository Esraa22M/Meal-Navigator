import {
	AccountBackground,
	AccountContainer,
	Row,
	AccountCover,
	HeaderWrapper,
	ContentWrapper,
} from "./account.styles";
import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { AuthButton } from "./Auth-button.components";
import { Header } from "../../../../components/header/header.components";
import Logo from "../../../../../assets/bg-images/dish-dinner-svgrepo-com-form.svg";

export const MainScreen = ({ navigation }) => {
	return (
		<AccountBackground
			source={require("../../../../../assets/bg-images/wallpaper7.jpg")}
		>
			<Row>
				<AccountCover />
				<HeaderWrapper>
					<Header />
				</HeaderWrapper>
				<ContentWrapper>
					<AccountContainer>
						<AuthButton
							title="Login"
							iconName={"login"}
							IconPackage={SimpleLineIcons}
							onPress={() => navigation.navigate("Login")}
						/>
						<Spacer postion={"top"} size="large" />

						<AuthButton
							outline={true}
							title="Register"
							onPress={() => navigation.navigate("Register")}
							iconName={"account-arrow-right-outline"}
							IconPackage={MaterialCommunityIcons}
						/>
					</AccountContainer>
				</ContentWrapper>
			</Row>
		</AccountBackground>
	);
};
