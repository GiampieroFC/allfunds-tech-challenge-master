import { ProductCardProps } from '../../components/ProductCard';

export enum TypeActionProduct {
    getProducts = 'ADD_PRODUCT',
    addToCart = 'ADD_TO_CART',
    addToFav = 'ADD_TO_FAV',
    quitFromFav = 'QUIT_FROM_FAV',
    quitFromCart = 'QUIT_FROM_CART',
}

export interface ActionProducts {
    type: TypeActionProduct
    payload: any
}


export const productReducer = (initialState: ProductCardProps[], action: ActionProducts) => {

    switch (action.type) {
        case TypeActionProduct.getProducts:
            const idInitialState = initialState.map(s => s.id)
            const newProducts = action.payload.filter((p: ProductCardProps) => !idInitialState.includes(p.id))

            return [...initialState, ...newProducts];

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

        case TypeActionProduct.addToFav:

            const withFavs = initialState.map(c => {

                if (c.id === action.payload) {
                    c.favorite = '1';
                }

                return c;
            })
            return [...withFavs];

        case TypeActionProduct.quitFromFav:

            const withoutFavs = initialState.map(c => {

                if (c.id === action.payload) {
                    c.favorite = 0;
                }

                return c;
            })
            return [...withoutFavs];

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