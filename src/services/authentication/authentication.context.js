import { createContext, useState } from "react";
import Toast from "react-native-toast-message";
import AsyncStorage from '@react-native-async-storage/async-storage';
function showToast () {
	Toast.show({
		type: "success",
		text1: "Hi,",
		text2: "You're in!Let's explore together.",
		onPress: () => Toast.hide(), 
		visibilityTime: 4000, 


	});
}
export const AuthenticationContext = createContext({
	token: "",
	isAuthenticated: false,
	showToast: () => { },
	authenticate: () => {},
	logout: () => {},
});
export const AuthenticationContextProvider = ({ children }) => {
	const [authToken, setAuthToken] = useState();
	

	function authenticate(token) {
		setAuthToken(token);
		showToast();
		AsyncStorage.setItem("token", token);
	}

	function logout() {
		setAuthToken(null);
		
		AsyncStorage.removeItem("token");

	}
	const value = {
		authenticate,
		logout,
		token: authToken,
		isAuthenticated: !!authToken,
	};
	return <AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>;
};
