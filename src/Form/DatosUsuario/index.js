import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validateEmail, validatePassword } from "./validations";

const DatosUsuario = () => {
	const [email, setEmail] = useState({
		value: "",
		valid: false,
	});
	const [password, setPassword] = useState({
		value: "",
		valid: false,
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
				error={false}
				helperText={false && "Please enter a valid email"}
				value={email.value}
				onChange={(e) => {
					const inputEmail = e.target.value;
					const validEmail = validateEmail(inputEmail);
					setEmail({ value: inputEmail, valid: validEmail });
				}}
			/>
			<TextField
				label="Password"
				variant="outlined"
				fullWidth
				margin="dense"
				type="password"
				value={password.value}
				onChange={(e) => {
					const inputPassword = e.target.value;
					const validPassword = validatePassword(inputPassword);
					console.log();
					setPassword({ value: inputPassword, valid: validPassword });
				}}
			/>
			<Button variant="contained" type="submit">
				Next
			</Button>
		</Box>
	);
};

export default DatosUsuario;
