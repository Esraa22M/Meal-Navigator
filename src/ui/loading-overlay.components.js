import { View, ActivityIndicator, StyleSheet } from "react-native";
import { theme } from "../infastructure/theme";

export const LoadingOverLay = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" color="white" />
		</View>
	);
};
 const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:theme.colors.bg.secondary },
});
