// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  Box,
  InputLabel,
  Card,
  Button,
  FormControl,
  Input,
  FormHelperText,
} from "@mui/material";
import useDataCalculation from "../../hooks/useDataCalculation";
import ResultComponent from "../ResultComponent/ResultComponent";

const VisualComponentForm = () => {
  const [numeroN, setNumeroN] = useState(null);
  const [isvalidData, setIsValidData] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { handleSubmit, sumResult } = useDataCalculation();

  const handleChange = (event) => {
    setNumeroN(event.target.value);
    setIsValidData(!/^\d+$/.test(event.target.value));
  };

  const formSubmit = (event) => {
    event.preventDefault();
    handleSubmit(numeroN);
    setShowModal(true);
  };

  const handleClick = () => {
    setShowModal(false);
  };
  

  return (
    <div>
      <h1>¡Bienvenido!</h1>
      <Card>
        <p>
          En esta aplicación podras calcular el <b>n+1ésimo</b> elemento nueva
          serie numérica, que combina elementos de las siguientes tres series
          numéricas.
        </p>
        <ul>
          <li>Número primo</li>
          <li>Número triangular</li>
          <li>Sucesión de Fibonacci</li>
        </ul>
        <div>
          <Box component="form" onSubmit={formSubmit} sx={{ width: "25ch" }}>
            <FormControl>
              <InputLabel>Ingresa el número N</InputLabel>
              <Input onChange={handleChange} data-testid="numeroN" />
              <FormHelperText>
                Los números naturales son aquellos enteros no negativos
              </FormHelperText>
              <Button
                type="submit"
                color="primary"
                data-testid="Submit"
                disabled={isvalidData}
              >
                Primary
              </Button>
            </FormControl>
          </Box>
        </div>
      </Card>
      <ResultComponent
        result={sumResult}
        showModal={showModal}
        handleClick={handleClick}
      />
    </div>
  );
};

export default VisualComponentForm;
