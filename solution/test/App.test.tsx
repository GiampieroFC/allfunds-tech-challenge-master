import { describe, expect, test } from 'vitest'
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import React from 'react';


describe('<App/>', () => {

    test('Should Render main parts', () => {

        render(<App />);

        expect(screen.getByText('Favorites:')).toBeDefined();
        expect(screen.getByText('Checkout: 0 €')).toBeDefined();

    });

    test('Should Render buttons to change pages', () => {

        render(<App />);

        expect(screen.getByRole('button', { hidden: true }).textContent).toBe('Show Cart →');

    });

})