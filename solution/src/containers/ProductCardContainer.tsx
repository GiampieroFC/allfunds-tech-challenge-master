
import { useState } from "react";
import { useGetProducts } from "../CustomHooks/useGetProducts"
import { ProductCard } from '../components/ProductCard';
import { CartContainer } from "./CartContainer";
import InfiniteScroll from "react-infinite-scroll-component";

export const ProductCardContainer = () => {

    const [limit, setLimit] = useState(10);
    const state = useGetProducts(`?_limit=${limit}`);

    const handleMore = () => {
        if (limit > 1000) {
            return;
        }
        setLimit(prev => prev + 10)
    }

    return (
        <div className="flex m-auto">
            <div className="flex flex-col items-center">
                <p className="text-center m-3 text-xl font-bold w-96">Products:</p>
                <InfiniteScroll
                    dataLength={state.length}
                    next={handleMore}
                    hasMore={true}
                    loader={<h4>Loading more products...</h4>}
                >
                    <div className="flex flex-wrap gap-1 justify-center items-center">
                        {
                            state.map(g => <ProductCard key={g.id} {...g} />)
                        }
                    </div>
                </InfiniteScroll>
            </div>
            <span className="hidden md:block"><CartContainer /></span>
        </div>
    )
}
