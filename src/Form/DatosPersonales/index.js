import React from "react";
import { TextField, Button, Box } from "@mui/material";

const DatosPersonales = ({ updateStep }) => {
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
				updateStep(2);
			}}
		>
			<TextField
				label="Name"
				variant="outlined"
				fullWidth
				margin="dense"
				type="text"
			/>
			<TextField
				label="Last Name"
				variant="outlined"
				fullWidth
				margin="dense"
				type="text"
			/>
			<TextField
				label="Phone Number"
				variant="outlined"
				fullWidth
				margin="dense"
				type="number"
				inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
			/>
			<Button variant="contained" type="submit">
				Next
			</Button>
		</Box>
	);
};

export default DatosPersonales;
