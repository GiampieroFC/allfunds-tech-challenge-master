import { Dispatch, createContext } from "react";
import { ProductCardProps } from '../components/ProductCard';
import { ActionProducts } from './reducers/productReducer';

const initialState: ProductCardProps[] = []

export const ProductContext = createContext<{
    state: ProductCardProps[];
    dispatch: Dispatch<ActionProducts>; //action type here
}>
    ({
        state: initialState,
        dispatch: () => null,
    });