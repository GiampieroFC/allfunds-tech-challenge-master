import { useContext } from "react";
import heartfilled from "../assets/heart-filled.png";
import { ProductContext } from "../context/ProductConext";
import { TypeActionProduct } from "../context/reducers/productReducer";

export interface ProductInCartProps {
    id: string,
    image_url: string,
    stock: number,
    productName: string,
    price: number,
    productDescription: string,
    favorite: number | string
    inCart?: number
}

export const Fav = ({ id, image_url, price, productName }: ProductInCartProps) => {

    const { dispatch } = useContext(ProductContext);

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
        <div className='w-96 flex justify-between bg-slate-100 rounded-md m-2 p-1'>

            <img className="w-24 h-24 rounded-md" src={image_url} alt={productName} loading="lazy" />

            <div className="flex flex-col items-center">

                <div className="flex justify-between items-center">
                    <h3 className="font-bold p-3 line-clamp-1 break-words">{productName}</h3>
                    <div className="p-3 text-xl text-left">{price}€</div>
                </div>

                <button type="submit" onClick={() => quitFav(id)}>
                    <img width={24} src={heartfilled} alt="This product is your favorite" />
                </button>

            </div>

        </div>
    )
}
