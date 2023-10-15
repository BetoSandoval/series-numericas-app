import React, { useState } from "react";
import { 
  Box, 
  InputLabel, 
  Card, 
  Button, 
  FormControl,
  Input,
  FormHelperText
} from "@mui/material";

const VisualComponentForm = () => {
  const [numeroN, setNumeroN] = useState("");

  const handleChange = (event) => {
    setNumeroN(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(numeroN);
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
          <Box component="form" onSubmit={handleSubmit} sx={{ width: "25ch" }}>
            <FormControl>
                <InputLabel>Ingresa el número N</InputLabel>
                <Input  onChange={handleChange} data-testid="numeroN"/>
                <FormHelperText>
                  Los números naturales son aquellos enteros no negativos
                </FormHelperText>
                <Button type="submit" color="primary" data-testid="Submit">
                  Primary
                </Button>
            </FormControl>
          </Box>
        </div>
      </Card>
    </div>
  );
};

export default VisualComponentForm;