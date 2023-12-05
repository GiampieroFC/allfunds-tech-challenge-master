
import { useGetProducts } from "../CustomHooks/getProducts"
import { ProductCard } from '../components/ProductCard';




export const ProductCardContainer = () => {

    const state = useGetProducts();

    return (
        <>

            {
                state.map(g => <ProductCard key={g.id} {...g} />)
            }
        </>

    )
}
