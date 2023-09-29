import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

// class ClassComponent extends React.Component {
// 	render(){
// 		return <>Content</>
// 	}
// }

// function FunctionComponent(params) {
// 	return <>Content</>
// }

// const FunctionComponentArrow = () => {
// 	return <>Content</>
// }

const DatosUsuario = () => {
	const [email, setEmail] = useState({
		value: "",
		valid: true,
	});
	const [password, setPassword] = useState({
		value: "",
		valid: true,
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
				onChange={(e) => setEmail({ value: e.target.value, valid: true })}
			/>
			<TextField
				label="Password"
				variant="outlined"
				fullWidth
				margin="dense"
				type="password"
				value={password.value}
				onChange={(e) => setPassword({ value: e.target.value, valid: true })}
			/>
			<Button variant="contained" type="submit">
				Next
			</Button>
		</Box>
	);
};

export default DatosUsuario;
