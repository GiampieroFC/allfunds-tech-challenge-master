import { useContext } from 'react'
import { ProductContext } from '../context/ProductConext'
import { TypeActionProduct } from '../context/reducers/productReducer'

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

export const CartProduct = ({ id, image_url, price, productName, stock, inCart }: ProductInCartProps) => {

    const { dispatch } = useContext(ProductContext)

    const addToCart = (id: string) => {
        dispatch({
            type: TypeActionProduct.addToCart,
            payload: id
        })
    }

    const quitFromCart = (id: string) => {
        dispatch({
            type: TypeActionProduct.quitFromCart,
            payload: id
        })
    }

    return (
        <div className='w-96 flex justify-between bg-slate-100 rounded-md m-2 p-1'>

            <img className="w-24 h-24 rounded-md" src={image_url} alt={productName} loading="lazy" />

            <div>
                <div className='flex justify-between items-center'>

                    <h3 className="font-bold p-3 line-clamp-1 break-words">{productName}</h3>

                    <div className="p-3 text-xl text-left">{`${price}€`}</div>

                </div>

                <div className='flex justify-end items-end'>

                    <button disabled={inCart === stock} onClick={() => addToCart(id)} className="bg-green-500 hover:bg-green-400 py-1 px-2 rounded border border-green-600 active:scale-90 transition duration-150 disabled:opacity-25 disabled:cursor-not-allowed" type="button"> + </button>

                    <p className="py-1 px-2 rounded text-lg font-semibold" >{inCart} </p>

                    <button onClick={() => quitFromCart(id)} className="bg-red-400 hover:bg-red-300 py-1 px-2 rounded border border-red-500 active:scale-90 transition duration-150 mr-2" type="button"> - </button>

                </div>

            </div>
        </div>
    )
}
