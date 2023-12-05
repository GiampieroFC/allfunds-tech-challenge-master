import { describe, expect, test } from 'vitest'
import { render } from "@testing-library/react";
import React from 'react';
import { Fav } from '../../src/components/Favs';


describe('<Fav/>', () => {

    test('Should show product name and price', () => {

        const mockProduct = {
            "id": "41fd4fd9-95c7-4809-96db-a147d352fdbb",
            "image_url": "https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair",
            "stock": 8,
            "productName": "Unbranded Metal Chair",
            "price": 43,
            "productDescription": "Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.",
            "favorite": 1
        }

        const { getByText } = render(<Fav {...mockProduct} />);
        expect(getByText(mockProduct.productName)).toBeDefined();
        expect(getByText(`${mockProduct.price}€`)).toBeDefined();
    });

    test('Should show filled heart in favorites', () => {

        const mockProduct = {
            "id": "41fd4fd9-95c7-4809-96db-a147d352fdbb",
            "image_url": "https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair",
            "stock": 8,
            "productName": "Unbranded Metal Chair",
            "price": 43,
            "productDescription": "Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.",
            "favorite": 1
        }

        const { getByRole } = render(<Fav {...mockProduct} />);

        expect(getByRole('button').innerHTML).toBe('<img width="34" src="/src/assets/heart-filled.png" alt="This product is your favorite">')

    });


})