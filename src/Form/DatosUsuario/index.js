import React from "react";
import { TextField, Button, Box } from "@mui/material";

class DatosUsuario extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: {
				value: "",
				valid: true,
			},
			password: {
				value: "",
				valid: true,
			},
		};
	}

	render() {
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
					console.log(this.state);
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
					value={this.state.email.value}
					onChange={(e) => this.setState({ email: { value: e.target.value } })}
				/>
				<TextField
					label="Password"
					variant="outlined"
					fullWidth
					margin="dense"
					type="password"
					value={this.state.password.value}
					onChange={(e) =>
						this.setState({ password: { value: e.target.value } })
					}
				/>
				<Button variant="contained" type="submit">
					Siguiente
				</Button>
			</Box>
		);
	}
}

export default DatosUsuario;
