import { createStackNavigator } from "@react-navigation/stack";
import { LoadingDataIndicator } from "../../ui/loading-data-indicator/loading-data-indicator.components";
import React, { lazy, Suspense } from "react";
const MainScreen = lazy(() =>
	import("../../features/account/screens/account/account.screens").then((module) => ({
	  default: module.MainScreen,
	}))
  );
  const LoginScreen = lazy(() =>
	import("../../features/account/screens/login/login.screen").then((module) => ({
	  default: module.LoginScreen,
	}))
  );
  const RegisterScreen = lazy(() =>
	import("../../features/account/screens/register/register.screen").then((module) => ({
	  default: module.RegisterScreen,
	}))
  );
  
const AccountStack = createStackNavigator();

export const AccountNavigator = () => {
	return (
		<Suspense fallback={<LoadingDataIndicator />}>
			<AccountStack.Navigator screenOptions={{ headerShown: false }}>
				<AccountStack.Screen name="Main" component={MainScreen} />
				<AccountStack.Screen name="Login" component={LoginScreen} />
				<AccountStack.Screen name="Register" component={RegisterScreen} />
			</AccountStack.Navigator>
		</Suspense>
	);
};
