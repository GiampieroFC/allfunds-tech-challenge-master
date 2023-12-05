
import { useGetProducts } from "../CustomHooks/useGetProducts"
import { ProductCard } from '../components/ProductCard';

interface Props {
    limit: number
}

export const ProductCardContainer = ({ limit }: Props) => {

    const state = useGetProducts(`?_limit=${limit}`);


    return (
        <>
            {
                state.map(g => <ProductCard key={g.id} {...g} />)
            }

        </>

    )
}
