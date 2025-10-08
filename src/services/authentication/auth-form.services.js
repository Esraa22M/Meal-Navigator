export const emailValidation = (email) => {
	let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	let isValid = email.match(emailRegex);
	if (isValid) return true;
	return false;
};
export const checkpassword = (password) => {
	const passwordValidatinData = { isValid: false, strengthbar: "" };
	let regex = /^(?=.*\d)(?=.*[a-z])(?!.*\s).+$/;

	let isValid = password.match(regex)&&password.length>=8;
	if (!isValid) return passwordValidatinData;
	if (isValid) passwordValidatinData.isValid = true;

	if (password.length === 4) passwordValidatinData.strengthbar = "weak";
	else if (password.length > 4 && password.length <= 8) {
		passwordValidatinData.strengthbar = "medium";
	} else passwordValidatinData.strengthbar = "strong";

	return passwordValidatinData;
};
export const nameValidation = (name) => {
	const nameRegex = /^[A-Za-z]+(?:[-' ][A-Za-z]+)*\s*$/;
	let isValid = name.match(nameRegex);
	if (isValid) return true;
	return false;
};

export const matchedPassword = (password, repeatedPassword) => {
	return password.length>0&&password === repeatedPassword;
};