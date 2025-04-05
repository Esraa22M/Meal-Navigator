import { Pressable, View } from "react-native";
import { colors } from "../../infastructure/theme/colors";
import Close from "react-native-vector-icons/AntDesign";
export const JumpUpButton = ({pressHandler}) => {
    return (
        <Pressable
            onPress={pressHandler}
            style={{
                borderColor: colors.ui.primary,
                borderWidth: 1,
                zIndex: 1000,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 1000,
                position: "absolute",
                backgroundColor:colors.ui.primary,
                bottom: 20,
                right:10,
                width: 30,
                height: 30,
            }}
        >
            <View>
                <Close
                    name="arrowup"
                    color={colors.ui.quaternary}
                    size={20}
                />
            </View>
        </Pressable>
    );
};
