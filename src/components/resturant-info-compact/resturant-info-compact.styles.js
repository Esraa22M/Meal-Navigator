import styled from "styled-components/native";
import { Image, View } from "react-native";

import WebView from "react-native-webview";
import { Card } from "react-native-paper";
export const ItemContainer = styled(Card)`
	padding: 20px;
	width: 200px;
	align-items: center;
	min-height:200px;
	background-color:white;
	justify-content:space-between;
`;
export const CompactWebviewWrapper = styled(View)`
    width: 200px;
	height: 200px;
	overflow: "hidden";

`;
export const CompactWebview = styled(WebView)`
	width: 200px;
	height: 200px;
	border-raduis:100000px;
	
`;
export const CompactInfoImage = styled(Image)`
	width: 200px;
	height: 200px;
	border-raduis:100000px;

`;
