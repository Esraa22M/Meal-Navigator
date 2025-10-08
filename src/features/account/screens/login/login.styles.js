import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextComponent } from "../../../../components/typography/text.components";
import { View } from "react-native";
export const LoginOuterContainer = styled(SafeAreaView)`
	flex-direction: row;
	flex: 1;
`;
export const LoginContainer = styled(View)`
	postion: absolute;
	top: 30%;
	z-index: 100;
	flex: 1;
	margin-horizontal: ${(props) => props.theme.space[3]};
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
	border-width: 3px;
	border-color: ${(props) => props.theme.colors.bg.main};
	background-color: rgba(90, 90, 90, 0.6);
	padding-vertical: ${(props) => props.theme.space[4]};
	padding-horizontal: ${(props) => props.theme.space[3]};
`;
export const ImageContainer = styled(View)`
	position: absolute;
	top: 45%;
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
