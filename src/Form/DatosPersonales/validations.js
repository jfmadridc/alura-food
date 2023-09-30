export const validateName = (name) => {
	const nameRegEx = /^[A-Za-z]{2,30}$/;
	return !nameRegEx.test(name);
};

export const validateLastName = (lastName) => {
	const lastNameRegEx = /^[A-Za-z]{2,50}$/;
	return !lastNameRegEx.test(lastName);
};

export const validatePhone = (phone) => {
	const phoneRegEx = /^\d{10}$/;
	return !phoneRegEx.test(phone);
};
