import {Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../../../../infastructure/theme/colors";
import { styles } from "./map-button.styles";
export const MapButton = ({ item }) => {
    const navigation = useNavigation();
        const handleMapNavigation = useCallback(
            (event) => {
                event.stopPropagation();
                navigation.navigate("resturantMapView", { resturant: item });
            },
            [navigation, item]
        );
    return (
        <Pressable
            style={({ pressed }) => [
                pressed && { backgroundColor: colors.ui.accent },
                , styles.buttonContainer
            ]}
            onPress={handleMapNavigation}
        >
            <FontAwesome name="map-marker" color="red" size={24} />
        </Pressable>
    );
}
