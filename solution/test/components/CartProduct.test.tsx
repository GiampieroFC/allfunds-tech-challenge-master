import { describe, expect, test } from 'vitest'
import { render } from "@testing-library/react";
import React from 'react';
import { CartProduct } from '../../src/components/CartProduct';


describe('<CartProduct/>', () => {

    test('Should show product name, price and image', () => {

        const mockProduct = {
            "id": "41fd4fd9-95c7-4809-96db-a147d352fdbb",
            "image_url": "https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair",
            "stock": 8,
            "productName": "Unbranded Metal Chair",
            "price": 43,
            "productDescription": "Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.",
            "favorite": 1
        }

        const product = render(<CartProduct {...mockProduct} />);



        expect(product.getByText(mockProduct.productName)).toBeDefined();
        expect(product.getByText(`${mockProduct.price}€`)).toBeDefined();
        expect(product.getByRole('img')).toBeDefined();


    });

    test('Should show buttons to add and quit product', () => {

        const mockProduct = {
            "id": "41fd4fd9-95c7-4809-96db-a147d352fdbb",
            "image_url": "https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair",
            "stock": 8,
            "productName": "Unbranded Metal Chair",
            "price": 43,
            "productDescription": "Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.",
            "favorite": 1
        }

        const { getAllByRole } = render(<CartProduct {...mockProduct} />);

        expect(getAllByRole('button')[0].textContent).toBe(' + ')
        expect(getAllByRole('button')[1].textContent).toBe(' - ')

    });
});