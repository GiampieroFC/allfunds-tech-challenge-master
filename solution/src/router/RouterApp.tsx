import { Routes, Route } from 'react-router-dom';
import { CartContainer } from '../containers/CartContainer';
import { FavContainer } from '../containers/FavContainer';
import { ProductCardContainer } from '../containers/ProductCardContainer';
import { NavBar } from '../components/NavBar';


export const RouterApp = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<ProductCardContainer />} />
                <Route path='/products' element={<ProductCardContainer />} />
                <Route path='/cart' element={<CartContainer />} />
                <Route path='/favorites' element={<FavContainer />} />
            </Routes>
        </>
    )
}
