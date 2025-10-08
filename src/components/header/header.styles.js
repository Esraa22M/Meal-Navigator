import styled from "styled-components/native";
import { View, Text } from "react-native";
import { TextComponent } from "../typography/text.components";
export const HeaderContainer = styled(View)`
	padding: 10px;
	flex: 1;
	background-color:${({theme})=>theme.colors.bg.main};
	justify-content: space-between;
`;
export const HeaderContent = styled(TextComponent)`
	margin-horizontal: ${(props) => props.account && props.theme.space[3]};

	color: ${(props) =>
		props.account
			? props.theme.colors.ui.primary
			: props.theme.colors.brand.primary};

	font-family: ${(props) => props.theme.fonts.heading};
`;
export const SubHeadingContent = styled(TextComponent)`
	color: ${(props) => props.theme.colors.brand.primary};
	margin-horizontal: ${(props) => props.account && props.theme.space[3]};

	font-size: 20px;
	font-family: ${(props) => props.theme.fonts.subHeading};
`;
