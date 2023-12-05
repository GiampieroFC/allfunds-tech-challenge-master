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
        <div className='bg-gray-400 rounded p-3 w-full'>

            <div className="h-fit m-2 flex justify-between items-center rounded">

                <img className="w-24 h-24 rounded" src={image_url} alt={productName} loading="lazy" />
                <div className='flex flex-col justify-center items-center'>
                    <h3 className="font-bold p-3 break-words">{productName}</h3>
                    <div className='flex'>
                        <button disabled={inCart === stock} onClick={() => addToCart(id)} className="bg-green-500 hover:bg-green-400 py-1 px-2 rounded border border-green-600 active:scale-90 transition duration-150 disabled:opacity-25 disabled:cursor-not-allowed" type="button"> + </button>
                        <p className="py-1 px-2 rounded border border-gray-500 " >{inCart} </p>
                        <button onClick={() => quitFromCart(id)} className="bg-green-500 hover:bg-green-400 py-1 px-2 rounded border border-green-600 active:scale-90 transition duration-150" type="button"> - </button>
                    </div>
                </div>
                <div className="p-3 text-2xl text-left">{price}€</div>
            </div>

        </div>
    )
}
