import React, { useState } from 'react';
import { Box, OutlinedInput, Card, Button } from "@mui/material";

const VisualComponentForm = () => {
  const [numeroN, setNumeroN] = useState('');

  const handleChange = (event) => {
    setNumeroN(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Número ingresado:', numeroN);
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
          <Box 
            component="form" 
            onSubmit={handleSubmit} 
            sx={{ width: "25ch" }}
          >
            <OutlinedInput 
              id="numeroN"
              value={numeroN}
              onChange={handleChange}
              label="Ingrese el número N" 
              variant="outlined"
            />
            <Button 
              type="submit" 
              variant="contained" 
              color="primary"
            >
              Primary
            </Button>
          </Box>
        </div>
      </Card>
    </div>
  );
};

export default VisualComponentForm;
