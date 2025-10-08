import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";
import { Container } from "../../components/utils/safe-area.components";
export const DataLoadingIndicatorContainer = styled(Container)`
	position: absolute;
	top: 50%;
	left: 50%;
`;
export const Loading = styled(ActivityIndicator)`
	margin-top: -50px;
`;
