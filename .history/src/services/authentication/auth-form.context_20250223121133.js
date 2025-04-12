import { createContext, useState } from "react";
export const AuthFormContext = createContext();
import { colors } from "../../infastructure/theme/colors";
import {
	emailValidation,
	checkpassword,
	nameValidation,
	matchedPassword,
} from "./auth-form.services";
export const AuthFormContextProvider = ({ children }) => {
	const [loginData, setLoginData] = useState({
		email: { value: "", isFocused: false },
		password: { value: "", isFocused: false },
	});
	const [registerData, setRegisterData] = useState({
		firstName: { value: "", isFocused: false },
		lastName: { value: "", isFocused: false },
		email: { value: "", isFocused: false },
		password: { value: "", isFocused: false },
		repeatedPassword: { value: "", isFocused: false },
	});
	const iconColor = colors.ui.accent;
	const [isValidLoginData, setIsValidLoginData] = useState({
		email: {
			isValid: null,
			icon: "eye",
			iconColor: iconColor,
			errorMessage: "Invalid email address, make sure it contains @",
		},
		password: {
			isValid: null,
			strengthbar: "",
			icon: "eye",
			iconColor: iconColor,
			errorMessage:
				"Password must be at least 8 characters long, contain at least one lowercase letter, one number, and no spaces",
		},
	});
	const [isValidRegisterData, setIsValidRegisterData] = useState({
		firstName: {
			isValid: null,
			icon: "eye",
			iconColor: iconColor,
			errorMessage:
				"Name must only contain letters, spaces, hyphens, or apostrophes.",
		},
		lastName: {
			isValid: null,
			icon: "eye",
			iconColor: iconColor,
			errorMessage:
				"Name must only contain letters, spaces, hyphens, or apostrophes.",
		},

		email: {
			isValid: null,
			icon: "eye",
			iconColor: iconColor,
			errorMessage: "Invalid email address, make sure it contains @",
		},
		password: {
			isValid: null,
			strengthbar: "",
			icon: "eye",
			showIcon: "eye-with-line",

			iconColor: iconColor,
			errorMessage:
				"Password must be at least 8 characters long, contain at least one lowercase letter, one number, and no spaces",
		},
		repeatedPassword: {
			isValid: null,
			strengthbar: "",
			showIcon: "eye-with-line",

			icon: "eye",
			iconColor: iconColor,
			errorMessage:
				"Passwords do not match. Please make sure both fields are identical.",
		},
	});
	const validateInput = (mode, key, value, password = "") => {
		let validationObj = {};
		let isValid = false;
		if (key === "firstName" || key === "lastName") {
			isValid = nameValidation(value.trim());
			validationObj = { isValid: isValid };
		} else if (key === "email") {
			isValid = emailValidation(value.trim());

			validationObj = { isValid: isValid };
		} else if (key === "repeatedPassword") {
			isValid = matchedPassword(password, value.trim());
			validationObj = { isValid: isValid };
		} else {
			isValid = checkpassword(value.trim());
			validationObj = {
				isValid: isValid.isValid,
				strengthbar: isValid.strengthbar,
			};
		}
		const iconColor = validationObj.isValid
			? colors.text.success
			: colors.text.error;
		const iconName = validationObj.isValid
			? "check-circle-outline"
			: "close-circle-outline";
		mode === "register" &&
			setIsValidRegisterData((prevState) => ({
				...prevState,
				[key]: {
					...prevState[key],
					...validationObj,
					icon: iconName,
					iconColor: iconColor,
				},
			}));
	};
	const handleDataChange = (mode, key, field, value) => {
		mode === "login"
			? setLoginData((prevState) => {
					return {
						...prevState,
						[key]: { ...prevState[key], [field]: value },
					};
				})
			: setRegisterData((prevState) => {
					return {
						...prevState,
						[key]: { ...prevState[key], [field]: value },
					};
				});
	};
	const resetLogin = ()=>setLoginData({
		email: { value: "", isFocused: false },
		password: { value: "", isFocused: false },
	  });
	const resetRegister = () => {
		setRegisterData({
			firstName: { value: "", isFocused: false },
			lastName: { value: "", isFocused: false },
			email: { value: "", isFocused: false },
			password: { value: "", isFocused: false },
			repeatedPassword: { value: "", isFocused: false },
		});
		setIsValidRegisterData({
			firstName: {
				isValid: null,
				icon: "eye",
				iconColor: iconColor,
				errorMessage:
					"Name must only contain letters, spaces, hyphens, or apostrophes.",
			},
			lastName: {
				isValid: null,
				icon: "eye",
				iconColor: iconColor,
				errorMessage:
					"Name must only contain letters, spaces, hyphens, or apostrophes.",
			},
	
			email: {
				isValid: null,
				icon: "eye",
				iconColor: iconColor,
				errorMessage: "Invalid email address, make sure it contains @",
			},
			password: {
				isValid: null,
				strengthbar: "",
				icon: "eye",
				showIcon: "eye-with-line",
	
				iconColor: iconColor,
				errorMessage:
					"Password must be at least 8 characters long, contain at least one lowercase letter, one number, and no spaces",
			},
			repeatedPassword: {
				isValid: null,
				strengthbar: "",
				showIcon: "eye-with-line",
	
				icon: "eye",
				iconColor: iconColor,
				errorMessage:
					"Passwords do not match. Please make sure both fields are identical.",
			},
		});
	}
	   
	const value = {
		handleDataChange,
		loginData,
		validateInput,
		isValidLoginData,
		registerData,
		resetLogin,
		resetRegister,
		isValidRegisterData,
	};
	return (
		<AuthFormContext.Provider value={value}>
			{children}
		</AuthFormContext.Provider>
	);
};
