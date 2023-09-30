import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validateEmail, validatePassword } from "./validations";

const DatosUsuario = ({ updateStep }) => {
	const [email, setEmail] = useState({
		value: "",
		error: false,
	});
	const [password, setPassword] = useState({
		value: "",
		error: false,
	});

	return (
		<Box
			component="form"
			autocomplete="on"
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
			onSubmit={(e) => {
				e.preventDefault();
				if (email.value && password.value && !email.error && !password.error) {
					//console.log(email, password);
					updateStep(1);
				}
			}}
		>
			<TextField
				label="Email"
				variant="outlined"
				fullWidth
				margin="dense"
				value={email.value}
				error={email.error}
				helperText={email.error ? "Please enter a valid email" : ""}
				onChange={(e) => {
					const inputEmail = e.target.value;
					setEmail({ value: inputEmail, error: validateEmail(inputEmail) });
				}}
			/>
			<TextField
				label="Password"
				variant="outlined"
				fullWidth
				margin="dense"
				type="password"
				value={password.value}
				error={password.error}
				helperText={password.error && "Please between 8 and 20 characters"}
				onChange={(e) => {
					const inputPassword = e.target.value;
					setPassword({
						value: inputPassword,
						error: validatePassword(inputPassword),
					});
				}}
			/>
			<Button variant="contained" type="submit">
				Next
			</Button>
		</Box>
	);
};

export default DatosUsuario;
