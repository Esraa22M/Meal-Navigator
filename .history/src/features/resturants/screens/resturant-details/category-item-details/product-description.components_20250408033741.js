import {} from "react-native";
export const ProductDescription = () => {
	return (
		<View>
			<Text
				style={[
					styles.rating,
					{
						marginBottom: 10,

						justifyContent: "flex-start",
					},
				]}
			>
				Description
			</Text>
			<Text
				style={{
					fontSize: 15,
					fontFamily: fonts.body,
					color: colors.ui.accent,
				}}
			>
				{item?.description}
			</Text>
			
		</View>
	);
};
