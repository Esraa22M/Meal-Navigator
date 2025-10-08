import { View } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "styled-components/native";
import React from "react";
const size_varient = { small: 1, medium: 2, large: 3 };
const postion_varient = {
	top: "marginTop",
	left: "marginLeft",
	right: "marginRight",
	bottom: "marginBottom",
};
const getProperSpace = (postion, size, theme) => {
	const sizeIndex = size_varient[size];
	const property = postion_varient[postion];
	const value = theme.space[sizeIndex];
	return `${property}:${value}`;
};
const SpacerView = styled(View)`
	${({ properSpace }) => properSpace}
`;
const SpacerDefaultProps = { postion: "top", size: "small" };

export const Spacer = ({ children, postion, size }) => {
	const theme = useTheme();
	const properSpace = getProperSpace(postion, size, theme);
	return <SpacerView properSpace={properSpace} {...SpacerDefaultProps}>{children}</SpacerView>;
};
