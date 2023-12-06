import { describe, expect, test } from 'vitest'
import { render } from "@testing-library/react";
import React from 'react';
import { ProductCard } from '../../src/components/ProductCard';


describe('<ProductCard/>', () => {

    test('Should show product name, description, stock, price and image', () => {

        const mockProduct = {
            "id": "41fd4fd9-95c7-4809-96db-a147d352fdbb",
            "image_url": "https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair",
            "stock": 8,
            "productName": "Unbranded Metal Chair",
            "price": 43,
            "productDescription": "Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.",
            "favorite": 1
        }

        const product = render(<ProductCard {...mockProduct} />);



        expect(product.getByAltText(mockProduct.productName)).toBeDefined();
        expect(product.getByText(mockProduct.productName)).toBeDefined();
        expect(product.getByText(`${mockProduct.price}€`)).toBeDefined();
        expect(product.getByText(mockProduct.productDescription)).toBeDefined();
        expect(product.getByText(`: ${mockProduct.stock} products`)).toBeDefined();


    });

    test('Should show buttons to add to cart and to add favorites', () => {

        const mockProduct = {
            "id": "41fd4fd9-95c7-4809-96db-a147d352fdbb",
            "image_url": "https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair",
            "stock": 8,
            "productName": "Unbranded Metal Chair",
            "price": 43,
            "productDescription": "Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.",
            "favorite": 0
        }

        const product = render(<ProductCard {...mockProduct} />);

        expect(product.getAllByRole('button')[0].innerHTML).toBe('<img width="24" src="/src/assets/heart-outline.png" alt="This product isn\'t favorite">');
        expect(product.getAllByRole('button')[1].innerHTML).toBe('add + ');


    });
});