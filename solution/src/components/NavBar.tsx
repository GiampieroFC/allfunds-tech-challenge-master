import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <div className="w-full flex justify-evenly text-md text-blue-900 p-3">
            <NavLink
                to='/products'
                className={({ isActive }) => isActive ? "font-bold" : ""}
            >
                Products
            </NavLink>
            <NavLink
                to='/favorites'
                className={({ isActive }) => isActive ? "font-bold" : ""}
            >
                Favorites
            </NavLink>
            <NavLink
                to='/cart'
                className={({ isActive }) => isActive ? "md:hidden font-bold" : "md:hidden"}
            >
                Cart
            </NavLink>
        </div>
    )
}
