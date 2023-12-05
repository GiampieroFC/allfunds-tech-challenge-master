
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

            // const ls = localStorage.getItem('favorites')
            // const inLS = await JSON.parse(ls!);

            const favorites = await fetchProducts('?favorite=1');
            localStorage.setItem('favorites', JSON.stringify([...favorites]))

            const fromLS = localStorage.getItem('favorites')
            const favoritesLS = await JSON.parse(fromLS!);

            setFavs(favoritesLS)
        })();


    }, [state])


    console.log(favs)
    return (

        <div className="min-w-full flex-col justify-start rounded-md p-2">

            <div className="text-center">
                <h1 className="text-2xl font-extrabold mb-5">Favorites:</h1>
            </div>
            <div>
                {
                    favs.map(g => <Fav key={g.id} {...g} />)
                }
            </div>
        </div>
    )
}