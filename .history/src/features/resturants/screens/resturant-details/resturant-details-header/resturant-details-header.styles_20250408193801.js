import { StyleSheet, Dimensions } from "react-native";
const {width } = Dimensions.get('screen');
export const styles = StyleSheet.create({
    itemContainer: {
        width: width,
        height: "30%",
    },
    background: {
        position: "absolute",
        flex: 1,
        height: "100%",

        width: width,
        // padding: 20,
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        color: "#fff",
        fontSize: 21,
        fontWeight: 600,
        letterSpacing: 1.5,
        justifyContent:"center",
        alignItems:"center",
        textAlign: "center",
        fontFamily: fonts.heading,
    },
    description: {
        color: "#fff",
        fontSize: 14,
        letterSpacing: 1.2,
        alignItems:"center",
        textAlign: "center",

        fontFamily: fonts.body,
        textAlign: "center",
    },
    icon: { backgroundColor: "rgba(0,0,0,0.3)", padding: 5, borderRadius: 1000 },
});