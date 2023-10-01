import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validateName, validateLastName, validatePhone } from "./validations";

const DatosPersonales = ({ updateStep }) => {
	const [name, setName] = useState({ value: "", error: false });
	const [lastName, setLastName] = useState({ value: "", error: false });
	const [phone, setPhone] = useState({ value: "", error: false });

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
					name.value &&
					lastName.value &&
					phone.value &&
					!name.error &&
					!lastName.error &&
					!phone.error
				) {
					updateStep(2);
				}
			}}
		>
			<TextField
				label="Name"
				variant="outlined"
				fullWidth
				margin="dense"
				type="text"
				required
				value={name.value}
				error={name.error}
				helperText={name.error && "Please enter a valid name 2-30 letters"}
				onChange={(e) => {
					const inputName = e.target.value;
					setName({ value: inputName, error: validateName(inputName) });
				}}
			/>
			<TextField
				label="Last Name"
				variant="outlined"
				fullWidth
				margin="dense"
				type="text"
				required
				value={lastName.value}
				error={lastName.error}
				helperText={
					lastName.error && "Please enter a valid last name 2-50 letters"
				}
				onChange={(e) => {
					const inputLastName = e.target.value;
					setLastName({
						value: inputLastName,
						error: validateLastName(inputLastName),
					});
				}}
			/>
			<TextField
				label="Phone Number"
				variant="outlined"
				fullWidth
				margin="dense"
				type="number"
				required
				inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
				value={phone.value}
				error={phone.error}
				helperText={phone.error && "10 digits no + , country code , or spaces"}
				onChange={(e) => {
					const inputPhone = e.target.value;
					setPhone({ value: inputPhone, error: validatePhone(inputPhone) });
				}}
			/>
			<Button variant="contained" type="submit">
				Next
			</Button>
		</Box>
	);
};

export default DatosPersonales;
