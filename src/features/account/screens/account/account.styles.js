import styled from "styled-components/native";
import { ImageBackground } from "react-native";
import { TextInput } from "react-native-paper";
import { View } from "react-native";
import AppButton from "../../../../ui/custom-button/custom-button.components";
export const AccountBackground = styled(ImageBackground)`
	flex: 1;
`;
export const Row = styled(View)`
	flex: 1;
	flex-direction: row;
`;
export const AccountCover = styled(View)`
	position: absolute;
	flex: 1;
	background-color: ${({theme})=>theme.colors.bg.main};
`;
export const HeaderWrapper = styled(View)`
	margin-top: 10%;
	margin-left: 2%;
	width: 60%;
`;

export const ContentWrapper = styled(View)`
	flex: 1;
	align-items: center;
	justify-content: flex-end;
	margin-bottom: 150px;
`;
export const AccountContainer = styled(View)`
	background-color: ${({theme})=>theme.colors.bg.sub};
	width: 95%;
	padding-vertical: ${(props) => props.theme.space[4]};
	padding-horizontal: ${(props) => props.theme.space[3]};

	margin-top: ${(props) => props.theme.space[2]};
	justify-content: center;
	align-items: center;
`;
export const AuthButtonContainer = styled(AppButton).attrs((props) => ({
	color: props.theme.colors.ui.primary,
}))``;
export const AuthInput = styled(TextInput).attrs((props) => ({
	textColor: props.theme.colors.ui.secondary,
	underlineColor: props.theme.colors.ui.primary,
	mode: "outlined",
	activeUnderlineColor: props.theme.colors.brand.primary,

	outlineStyle: {
		borderRadius: 20,
		borderColor: props.styleColor,
		paddingVertical: 20,
	},
}))`
	width: 100%;
	height: 55px;
	border-raduis: 100px;
	background-color: ${(props) => props.theme.colors.bg.primary};
`;
