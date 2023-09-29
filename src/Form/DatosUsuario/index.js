import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validateEmail, validatePassword } from "./validations";

const DatosUsuario = () => {
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
				console.log(email, password);
			}}
		>
			<TextField
				label="Email"
				variant="outlined"
				fullWidth
				margin="dense"
				type="email"
				error={email.error}
				helperText={email.error ? "Please enter a valid email" : ""}
				value={email.value}
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
				error={password.error}
				helperText={password.error && "Please a between 8 and 20 characters"}
				value={password.value}
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
