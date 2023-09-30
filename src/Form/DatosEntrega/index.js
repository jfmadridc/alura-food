import React from "react";
import { TextField, Button, Box } from "@mui/material";

const DatosEntrega = ({ updateStep }) => {
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
				updateStep(3);
			}}
		>
			<TextField
				label="Address"
				variant="outlined"
				fullWidth
				margin="dense"
				type="text"
			/>
			<TextField
				label="City"
				variant="outlined"
				fullWidth
				margin="dense"
				type="text"
			/>
			<TextField
				label="State"
				variant="outlined"
				fullWidth
				margin="dense"
				type="text"
			/>
			<Button variant="contained" type="submit">
				Create Account
			</Button>
		</Box>
	);
};

export default DatosEntrega;
