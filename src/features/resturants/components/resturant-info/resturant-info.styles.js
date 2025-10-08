import { View } from "react-native";
import { Card } from "react-native-paper";
import { Image } from "react-native";
import styled from "styled-components/native";
import { TextComponent } from "../../../../components/typography/text.components";
export const ResturantCard = styled(Card)`
	background-color: ${(props) => props.theme.colors.bg.main};
	border-color: ${(props) => props.theme.colors.ui.primary};
	border-width: 0.5px;
	padding: ${(props) => props.theme.space[2]};
`;
export const ResturantCardCover = styled(Card.Cover)`
	background-color: ${(props) => props.theme.colors.bg.primary};
	width: ${(props) => props.theme.sizes[5]};
	height: ${(props) => props.theme.sizes[5]};
	border-radius: 1000px;
	border-width: ${(props) => props.theme.sizes[0]};
	border-color: white;
`;
export const CardBody = styled(View)`
	width: 100%;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.colors.bg.primary};
	padding: ${(props) => props.theme.space[2]};
	margin: ${(props) => props.theme.space[2]};
	border-bottom-right-radius: 25px;
	border-bottom-left-radius: 10px;
	border-top-left-radius: 15px;
	border-top-right-radius: 5px;
	
`;
export const RatingContainer = styled(View)`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding-top: ${(props) => props.theme.space[2]};
	padding-bottom: ${(props) => props.theme.space[2]};
`;
export const Title = styled(TextComponent)`
	text-align: center;
	text-transform: capitalize;
	padding: 0px ${(props) => props.theme.space[2]};
`;
export const Address = styled(TextComponent)`
	font-family: ${(props) => props.theme.fonts.body};
	text-align: center;
	font-size: ${(props) => props.theme.fontSizes.caption};

`;
export const RowView = styled(View)`
	flex-direction: row;
	justify-content:center;
	align-items:center;
`;
export const IconsContainerView = styled(View)`
	flex-direction: row;
	width:100%;
	justify-content: space-between;
`;
export const Icon = styled(Image)`
	width: 25px;
	height: 25px;
`;
