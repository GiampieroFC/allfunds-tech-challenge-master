import { useContext } from "react"

import { ProductContext } from "../context/ProductConext";
import { TypeActionProduct } from "../context/reducers/productReducer";

export interface ProductCardProps {
    id: string,
    image_url: string,
    stock: number,
    productName: string,
    price: number,
    productDescription: string,
    favorite: number | string
    inCart?: number
}

export const ProductCard = ({ id, image_url, price, productDescription, productName, stock, inCart }: ProductCardProps) => {


    const { dispatch } = useContext(ProductContext);

    const addToCart = (id: string) => {
        dispatch({
            type: TypeActionProduct.addToCart,
            payload: id
        })
    }

    return (

        <div className="m-2 flex flex-col justify-between bg-slate-400 rounded">

            <img className="rounded" src={image_url} alt={productName} loading="lazy" />

            <div className="h-full flex flex-col justify-between bg-slate-400 p-3 rounded">

                <div className="my-3 flex">

                    <h3 className="text-xl font-bold">{productName}</h3>
                    <p className="p-3 text-2xl font-extrabold">{price}€</p>

                </div>

                <span className="text-left break-words font-sans ">{productDescription}</span>

                <div className="flex justify-between items-end">
                    <span><span className="font-semibold">Left</span>: {stock} {stock === 1 ? 'product' : 'products'} </span>

                    <button disabled={inCart === stock} onClick={() => addToCart(id)} className="bg-green-500 hover:bg-green-400 py-1 px-2 rounded border border-green-600 active:scale-90 transition duration-150 disabled:opacity-25 disabled:cursor-not-allowed" type="button">add + </button>

                </div>

            </div>

        </div>
    )
}
