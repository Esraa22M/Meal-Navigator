import { AuthContent } from "../../components/auth/auth-content.components";
import { AuthFormContext } from "../../../../services/authentication/auth-form.context";
import { useContext } from "react";
export const LoginScreen = () => {
	const { isValidLoginData, loginData } = useContext(AuthFormContext);
	return (
		<AuthContent
			isLogin={true}
			isValidInputData={isValidLoginData}
			inputData={loginData}
		/>
	);
};
