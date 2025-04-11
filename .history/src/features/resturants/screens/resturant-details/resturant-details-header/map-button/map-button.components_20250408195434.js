import {Pressable , StyleSheet} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
export const MapButton =()=> (
	<Pressable
		style={({ pressed }) => [
			pressed && { backgroundColor: colors.ui.accent },
			,styles.buttonContainer
		]}
		onPress={handleMapNavigation}
	>
		<FontAwesome name="map-marker" color="red" size={24} />
	</Pressable>
);
const styles = StyleSheet.create({buttonContainer:{
    backgroundColor: "white",
    width: 30,
    height: 30,
    justifyContent: "center",
    borderRadius: 5000,
    textAlign: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginBottom: -15,
}})