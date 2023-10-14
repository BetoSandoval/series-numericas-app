import React from 'react'; 
import VisualComponentForm from './VisualComponentForm';
import { render, fireEvent } from '@testing-library/react';

describe('Testing on <VisualComponentForm/>', () => { 

  test('Check if the data entered is a natural number', () => { 
    const { getByLabelText } = render(<VisualComponentForm />);
    // const input = getByLabelText('Ingrese el número N');
  
    // // Simula el evento de cambio para ingresar un número no natural
    // fireEvent.change(input, { target: { value: '-123' } });
    // expect(input.value).toBe('');
  })
})