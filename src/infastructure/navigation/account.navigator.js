import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "../../features/account/screens/account/account.screens";
import { LoginScreen } from "../../features/account/screens/login/login.screen";
import { RegisterScreen } from "../../features/account/screens/register/register.screen";

  
const AccountStack = createStackNavigator();

export const AccountNavigator = () => {
	return (
		
			<AccountStack.Navigator screenOptions={{ headerShown: false }}>
				<AccountStack.Screen name="Main" component={MainScreen} />
				<AccountStack.Screen name="Login" component={LoginScreen} />
				<AccountStack.Screen name="Register" component={RegisterScreen} />
			</AccountStack.Navigator>
		
	);
};
