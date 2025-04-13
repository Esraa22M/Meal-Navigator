import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextComponent } from "../../../../components/typography/text.components";
import { View, ScrollView } from "react-native";
export const LoginOuterContainer = styled(SafeAreaView)`
	flex-direction: row;
	flex: 1;
`;
export const LoginContainer = styled(ScrollView)`
	postion: absolute;
	top: ${({ mode }) => (mode === "register" ? `5%` : `25%`)};
	z-index: 100;
	flex: 1;
	margin: ${(props) => props.theme.space[3]};
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
	border-width: 0.5px;
	border-color: ${(props) => props.theme.colors.ui.secondary};
	background-color: ${({ theme }) => theme.colors.bg.main};
	padding-horzintal: ${(props) => props.theme.space[4]};

	padding-vertical: ${(props) => props.theme.space[4]};
`;
export const ImageContainer = styled(View)`
	position: absolute;
	top: ${({ mode }) => (mode === "register" ? `24%` : `35%`)};
	left: 33%;
	z-index: 1000;
	height: 150px;
	justify-content: center;
	align-items: center;
`;
export const OuterWrapper = styled(SafeAreaView)`
	flex: 1;
`;
export const ErrorMessage = styled(TextComponent)`
	font-family: ${(props) => props.theme.fonts.body};
	font-size: ${(props) => props.theme.fontSizes.body};
`;
