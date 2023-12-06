import { useContext } from "react"

import { ProductContext } from "../context/ProductConext";
import { TypeActionProduct } from "../context/reducers/productReducer";

import heartOutline from "../assets/heart-outline.png";
import heartfilled from "../assets/heart-filled.png";

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

export const ProductCard = ({ id, image_url, price, productDescription, productName, stock, inCart, favorite }: ProductCardProps) => {

    const { dispatch } = useContext(ProductContext);

    const addToCart = (id: string) => {
        dispatch({
            type: TypeActionProduct.addToCart,
            payload: id
        })
    }

    const addFav = async (id: string) => {
        const res = await fetch(`http://127.0.0.1:3000/grocery/${id}`)
        const original = await res.json()

        original.favorite = 1;

        await fetch(`http://127.0.0.1:3000/grocery/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(original)
        },)

        dispatch({
            type: TypeActionProduct.addToFav,
            payload: id
        })
    }

    const quitFav = async (id: string) => {
        const res = await fetch(`http://127.0.0.1:3000/grocery/${id}`)
        const original = await res.json()

        original.favorite = 0;

        await fetch(`http://127.0.0.1:3000/grocery/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(original)
        },)
        dispatch({
            type: TypeActionProduct.quitFromFav,
            payload: id
        })
    }

    return (

        <div className="w-64 bg-slate-100 p-2 border-black border-2 border-opacity-5 m-2 rounded-md">

            <img className="rounded-sm" src={image_url} alt={productName} loading="lazy" />

            <div className="my-3 flex items-center">

                <h3 className="text-xl font-bold">{productName}</h3>
                <p className="p-3 text-2xl font-extrabold">{price}€</p>

            </div>

            <span className="text-left break-words font-sans line-clamp-3">{productDescription}</span>

            <div className="flex justify-between items-center mt-6">

                <span><span className="font-semibold">Left</span>{`: ${stock} ${stock === 1 ? 'product' : 'products'}`}</span>

                {
                    !!favorite ?
                        <button type="submit" onClick={() => quitFav(id)}>
                            <img width={24} src={heartfilled} alt="This product is your favorite" />
                        </button>
                        :
                        <button type="submit" onClick={() => addFav(id)}>
                            <img width={24} src={heartOutline} alt="This product isn't favorite" />
                        </button>
                }

                <button disabled={inCart === stock} onClick={() => addToCart(id)} className="bg-green-500 hover:bg-green-400 py-1 px-2 rounded border border-green-600 active:scale-90 transition duration-150 disabled:opacity-25 disabled:cursor-not-allowed" type="button">add + </button>

            </div>
        </div>
    )
}
