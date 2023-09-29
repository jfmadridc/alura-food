import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";

const Form = () => {
	const [step, setStep] = useState(1);

	//step = 0 -> <DatosUsuario />
	//step = 1 -> <DatosPersonales />
	//step = 2 -> <DatosEntrega />
	//step = 3 -> <complete />

	const showStep = (currentStep) => {
		switch (currentStep) {
			case 0:
				return <DatosUsuario />;
			case 1:
				return <DatosPersonales />;
			case 2:
				return <DatosEntrega />;
			case 3:
				return <Complete />;
		}
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
			<FormSpace>{showStep(step)}</FormSpace>
		</Box>
	);
};

export default Form;
