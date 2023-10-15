import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import VisualComponentForm from "./VisualComponentForm";

describe('Testing on <VisualComponentForm/>', () => {
  test('User should entered and submit only a natural number', async () => {
    const user = userEvent.setup()
    render(<VisualComponentForm/>)
    // Configuración del espía para la función console.log
    const consoleSpy = jest.spyOn(console, 'log');
    // Obtenemos el elemento y simulamos que se escribe un número natural
    const input = screen.getByTestId('numeroN');
    user.type(input, "123");
    //Simulamos hacer clic en el boton
    const submitButton = screen.getByTestId('Submit');
    await user.click(submitButton);
    
    const capturedValue = consoleSpy.mock.calls[0][0];
    const regExp = /^\d+$/;
    expect(regExp.test(input.value)).toBe(regExp.test(capturedValue));

  });
});