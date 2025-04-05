import { AuthForm } from "./auth-form.components";

export const AuthContent = ({ isLogin, isValidInputData, inputData }) => {
	return (
		<AuthForm
			isLogin={isLogin}
			isValidInputData={isValidInputData}
			inputData={inputData}
		/>
	);
};
