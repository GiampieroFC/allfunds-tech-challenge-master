
import { useContext } from "react"
import { CartProduct } from '../components/CartProduct';
import { ProductContext } from "../context/ProductConext";



export const CartContainer = () => {

    const { state } = useContext(ProductContext);

    const inCart = state.filter(s => s.inCart! > 0);

    return (
        <div className="flex flex-col items-center max-w-xl m-auto pr-6">

            <p className="text-center m-3 text-xl font-bold w-96">
                {`Checkout: ${inCart.map(c => c.price * (c.inCart ?? 0)).reduce((prev, curr) => prev + curr, 0)} €`}
            </p>
            <div className="flex flex-wrap justify-evenly">
                {
                    inCart.map(g => <CartProduct key={g.id} {...g} />)
                }
            </div>
        </div>
    )
}
