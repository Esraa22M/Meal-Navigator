import { StyleSheet} from "react-native";
import { colors } from "../../../../../../infastructure/theme/colors";
export const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: colors.brand.secondary,
        width: 30,
        height: 30,
        justifyContent: "center",
        borderRadius: 5000,
        textAlign: "center",
        alignItems: "center",
        alignSelf: "flex-end",
        marginBottom: -15,
    }
});