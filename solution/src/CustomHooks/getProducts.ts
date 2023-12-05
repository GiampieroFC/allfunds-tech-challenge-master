import { useContext, useEffect } from "react"
import { fetchProducts } from "../utils/fetchProducts";
import { ProductContext } from "../context/ProductConext";
import { TypeActionProduct } from "../context/reducers/productReducer";


export const useGetProducts = () => {

    const { state, dispatch } = useContext(ProductContext)

    useEffect(() => {

        fetchProducts()
            .then(grocery => dispatch({
                type: TypeActionProduct.getProducts,
                payload: grocery
            }));

    }, []);

    return state;
}