import React from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";

const StepperComponent = (props) => {
	const steps = ["User Info", "Personal Info", "Delivery Info"];

	return (
		<Box sx={{ width: "100%" }}>
			<Stepper activeStep={props.currentStep}>
				{steps.map((step) => (
					<Step key={step}>
						<StepLabel>{step}</StepLabel>
					</Step>
				))}
			</Stepper>
		</Box>
	);
};

export default StepperComponent;
