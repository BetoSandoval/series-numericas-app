import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import VisualComponentForm from "./VisualComponentForm";
import { describe, test , expect, jest} from '@jest/globals';

describe('Testing on <VisualComponentForm/>', () => {
  test('should disable the button when input is not a natural number', async () => { 
    const user = userEvent.setup()
    render(<VisualComponentForm/>)

    const input = screen.getByTestId('numeroN');
    user.type(input, "123");
    const submitButton = screen.getByTestId('Submit');

    expect(submitButton.hasAttribute('disabled')).toBeTruthy();
   })
});