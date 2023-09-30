import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";

const Form = () => {
	const [step, setStep] = useState(0);

	//step = 0 -> <DatosUsuario />
	//step = 1 -> <DatosPersonales />
	//step = 2 -> <DatosEntrega />
	//step = 3 -> <Complete />

	const updateStep = (step) => {
		setStep(step);
	};

	const steps = {
		0: [
			<Typography variant="h4" align="center" gutterBottom={true}>
				User Information
			</Typography>,
			<DatosUsuario updateStep={updateStep} />,
		],
		1: [
			<Typography variant="h4" align="center" gutterBottom={true}>
				Personal Information
			</Typography>,
			<DatosPersonales updateStep={updateStep} />,
		],
		2: [
			<Typography variant="h4" align="center" gutterBottom={true}>
				Delivery Information
			</Typography>,
			<DatosEntrega updateStep={updateStep} />,
		],
		3: [<></>, <Complete />],
	};

	return (
		<Box
			sx={{
				padding: "30px",
				display: "flexbox",
				flexDirection: "column",
			}}
		>
			<LogoSpace>
				<Img src={"/favicon.png"} />
				<Typography variant="h3">AluraFood</Typography>
			</LogoSpace>
			<FormSpace>
				{steps[step][0]}
				{step !== 3 && <Stepper currentStep={step} />}
				{steps[step][1]}
			</FormSpace>
		</Box>
	);
};

export default Form;
