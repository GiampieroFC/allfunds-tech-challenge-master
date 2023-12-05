import { ProductCardProps } from "../../components/ProductCard";

export enum TypeActionProduct {
    getProducts = 'ADD_PRODUCT',
    addToCart = 'ADD_TO_CART',
    quitFromCart = 'QUIT_FROM_CART',
}

export interface ActionProducts {
    type: TypeActionProduct
    payload: any
}


export const productReducer = (initialState: ProductCardProps[], action: ActionProducts) => {

    switch (action.type) {
        case TypeActionProduct.getProducts:
            return [...action.payload];

        case TypeActionProduct.addToCart:

            const toCart = initialState.map(c => {
                if (typeof c.inCart === 'undefined') {
                    c.inCart = 0
                }
                if (c.inCart >= c.stock) {
                    return c;
                }
                if (c.id === action.payload) {
                    c.inCart++
                }
                return c;
            })
            return [...toCart];

        case TypeActionProduct.quitFromCart:

            const fromCart = initialState.map(c => {
                if (typeof c.inCart === 'undefined') {
                    c.inCart = 0
                }
                if (c.id === action.payload) {
                    c.inCart--
                }
                return c;
            })
            return [...fromCart];

        default:
            return [...initialState];
    }

}