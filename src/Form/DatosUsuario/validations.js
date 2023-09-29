export const validateEmail = (email) => {
	const emailRegEx = /\S+@\S+\.\S+/; //email regex
	return !emailRegEx.test(email); //returns true or false
};

export function validatePassword(password) {
	const passwordRegEx = /^(?=\S{8,20}$).+$/; // >8 && <20 no whiteSpaces
	return !passwordRegEx.test(password); //returns true or false
}
