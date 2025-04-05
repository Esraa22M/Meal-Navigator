import { View, StyleSheet } from "react-native";
import { colors } from "../../../../../infastructure/theme/colors";
import { BackButton } from "../../../../../ui/back-button/back-button.components";
import { HeaderContent } from "../../../../../components/header/header.styles";
export const CartHeader = () => {
    return (
            <View
                style={styles.headerContainer}
            >
                <BackButton color={colors.brand.secondary} style={{top:40}}/>
                <HeaderContent
                variant="body"
                style={ styles.headerContent}
                >
                    Foodie Cart
                </HeaderContent>
            </View>
    );
};
const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor: colors.ui.primary,
        flexDirection: "row",
        padding:10,
        alignItems: "center",
    },
    headerContent:{
        fontSize: 25,        padding:10,

        color: colors.brand.secondary,
        margin:40,
        marginTop:20,
        padding: 16,
    }}

);
