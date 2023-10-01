export const validateName = (name) => {
	const nameRegEx = /^(?!^\s+$)[A-Za-z\s]{2,30}$/;
	return !nameRegEx.test(name);
};

export const validateLastName = (lastName) => {
	const lastNameRegEx = /^(?!^\s+$)[A-Za-z\s]{2,50}$/;
	return !lastNameRegEx.test(lastName);
};

export const validatePhone = (phone) => {
	const phoneRegEx = /^\d{10}$/;
	return !phoneRegEx.test(phone);
};
