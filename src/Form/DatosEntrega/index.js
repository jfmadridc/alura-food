import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validateAddress, validateCity, validateState } from "./validations";

const DatosEntrega = ({ updateStep }) => {
	const [address, setAddress] = useState({ value: "", error: false });
	const [city, setCity] = useState({ value: "", error: false });
	const [state, setState] = useState({ value: "", error: false });

	return (
		<Box
			component="form"
			autocomplete="off"
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
			onSubmit={(e) => {
				e.preventDefault();
				if (
					address.value &&
					city.value &&
					state.value &&
					!address.error &&
					!city.error &&
					!state.error
				) {
					updateStep(3);
				}
			}}
		>
			<TextField
				label="Address"
				variant="outlined"
				fullWidth
				margin="dense"
				type="text"
				value={address.value}
				error={address.error}
				helperText={
					address.error &&
					"Please enter a valid address 5 to 70 characters (a-z)(0-9)(# - , .)(_)"
				}
				onChange={(e) => {
					const inputAddress = e.target.value;
					setAddress({
						value: inputAddress,
						error: validateAddress(inputAddress),
					});
				}}
			/>
			<TextField
				label="City"
				variant="outlined"
				fullWidth
				margin="dense"
				type="text"
				value={city.value}
				error={city.error}
				helperText={
					city.error && "Please enter a valid city 3 to 30 characters (a-z)(_)"
				}
				onChange={(e) => {
					const inputCity = e.target.value;
					setCity({ value: inputCity, error: validateCity(inputCity) });
				}}
			/>
			<TextField
				label="State"
				variant="outlined"
				fullWidth
				margin="dense"
				type="text"
				value={state.value}
				error={state.error}
				helperText={
					state.error &&
					"Please enter a valid state 3 to 30 characters (a-z)(_)"
				}
				onChange={(e) => {
					const inputState = e.target.value;
					setState({ value: inputState, error: validateState(inputState) });
				}}
			/>
			<Button variant="contained" type="submit">
				Create Account
			</Button>
		</Box>
	);
};

export default DatosEntrega;
