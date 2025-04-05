import { TextInput, HelperText } from "react-native-paper";
import { AuthInput } from "../../screens/account/account.styles";
export const AuthInputComponent = ({
	label,
	keyName,
	secureTextEntry = false,
	handleInputChange,
	validateInput,
	keyboardType = "",
	isValidInputData,
	inputData,
	setHidePassword = () => {},
	hidePassword,
	textContentType = "",
	setKeyboardVisible,
	mode,
}) => {
	const pressHandler = (keyName) => {
		if (keyName === "password" || keyName === "repeatedPassword") {
			setHidePassword(!hidePassword);
		}
	};
	return (
		<>
			<AuthInput
				styleColor={isValidInputData[keyName].iconColor}
				value={inputData[keyName].value}
				autoCapitalize="none"
				textContentType={textContentType}
				textColor="black"
				onFocus={() => {
					setKeyboardVisible(true);
					handleInputChange(mode, keyName, "isFocused", true);
				}}
				right={
					<TextInput.Icon
						icon={isValidInputData[keyName].icon}
						onPress={pressHandler.bind(this, keyName)}
						color={isValidInputData[keyName].iconColor}
					/>
				}
				keyboardType={keyboardType}
				onBlur={() => {
					setKeyboardVisible(false);
					if (keyName === "password" || "repeatedPassword")
						setHidePassword(true);

					handleInputChange(mode, keyName, "isFocused", false);
					validateInput(
						mode,
						keyName,
						inputData[keyName].value,
						inputData["password"].value
					);
				}}
				onChangeText={handleInputChange.bind(this, mode, keyName, "value")}
				label={
					inputData[keyName].isFocused ||
					isValidInputData[keyName].isValid ||
					inputData[keyName].value
						? ""
						: label
				}
				placeholder={`Enter your ${label}`}
				secureTextEntry={secureTextEntry}
			/>
			{!isValidInputData[keyName].isValid &&
				isValidInputData[keyName].isValid !== null && (
					<HelperText visible={true} type="error">
						{isValidInputData[keyName].errorMessage}
					</HelperText>
				)}
		</>
	);
};
