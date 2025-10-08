import { createContext, useState } from "react";
import { showToast } from "../../utils/toast.components";
import AsyncStorage from '@react-native-async-storage/async-storage';
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
		showToast("success", "Hi", "You are in!Let's explore together");

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
