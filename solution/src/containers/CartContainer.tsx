
import { useContext } from "react"
import { CartProduct } from '../components/CartProduct';
import { ProductContext } from "../context/ProductConext";



export const CartContainer = () => {

    const { state } = useContext(ProductContext);

    const inCart = state.filter(s => s.inCart! > 0);

    return (
        <>
            <div className="min-w-full flex-col justify-start rounded-md border-2 border-black p-2">

                <div className="text-center">
                    <h1 className="text-2xl font-extrabold mb-5">{`Checkout: ${inCart.map(c => c.price * (c.inCart ?? 0)).reduce((prev, curr) => prev + curr, 0)} €`}</h1>
                </div>

                <div >
                    {
                        inCart.map(g => <CartProduct key={g.id} {...g} />)
                    }
                </div>

            </div>

        </>
    )
}
