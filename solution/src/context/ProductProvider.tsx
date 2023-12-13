import { ReactNode, useReducer } from "react"
import { productReducer } from "./reducers/productReducer"
import { ProductCardProps } from "../components/ProductCard"
import { ProductContext } from "./ProductConext"

interface Props {
    children: ReactNode,
}

const initialState: ProductCardProps[] = []

export const ProductProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(productReducer, initialState)

    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    );
}