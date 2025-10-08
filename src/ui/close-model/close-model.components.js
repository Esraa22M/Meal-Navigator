import { Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../infastructure/theme/colors";
import Close from "react-native-vector-icons/AntDesign";
export const CloseButton = ({closeHandler}) => {
	return (
		<Pressable
			onPress={closeHandler}
			style={{
				borderColor: colors.ui.secondary,
				borderWidth: 1,
				zIndex: 1000,
				justifyContent: "center",
				alignItems: "center",
				borderRadius: 1000,
				position: "absolute",
				top: 50,
                right:50,
				width: 30,
				height: 30,
			}}
		>
			<View>
				<Close
					name="close"
					color={colors.brand.muted}
					size={24}
				/>
			</View>
		</Pressable>
	);
};
