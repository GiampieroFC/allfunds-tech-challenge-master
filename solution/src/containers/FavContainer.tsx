
import { useContext, useEffect, useState } from "react";
import { Fav } from "../components/Favs";
import { fetchProducts } from "../utils/fetchProducts";
import { ProductCardProps } from "../components/ProductCard";
import { ProductContext } from "../context/ProductConext";

export const FavContainer = () => {

    const { state } = useContext(ProductContext)
    const [favs, setFavs] = useState<ProductCardProps[]>([])

    useEffect(() => {

        (async () => {

            const favorites = await fetchProducts('?favorite=1');
            localStorage.setItem('favorites', JSON.stringify([...favorites]))

            const fromLS = localStorage.getItem('favorites')
            const favoritesLS = await JSON.parse(fromLS!);

            setFavs(favoritesLS)

        })();


    }, [state])

    return (

        <div className="flex flex-col items-center m-auto">

            <p className="text-center m-3 text-xl font-bold w-96">Favorites:</p>
            <div className="flex flex-wrap justify-center">
                {
                    favs.map(g => <Fav key={g.id} {...g} />)
                }
            </div>
        </div>
    )
}