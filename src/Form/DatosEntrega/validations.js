export const validateAddress = (address) => {
	const regExAddress = /^(?!^\s*$)[a-zA-Z0-9\s\-,.#]{5,70}$/;
	return !regExAddress.test(address);
};

export const validateCity = (city) => {
	const regExCity = /^(?!\s*$)[a-zA-Z\s]{3,30}$/;
	return !regExCity.test(city);
};

export const validateState = (state) => {
	const regExState = /^(?!\s*$)[a-zA-Z\s]{3,30}$/;
	return !regExState.test(state);
};
