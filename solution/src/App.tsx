
import { useState } from 'react';
import { CartContainer } from './containers/CartContainer';
import { ProductCardContainer } from './containers/ProductCardContainer';

function App() {

  const [showCart, setshowCart] = useState(false)

  return (
    <>
      <div className='flex justify-evenly p-5'>

        <div className={showCart ? 'sm:w-2/3 hidden' : 'myStyleContainer w-2/3'}>
          <ProductCardContainer />
        </div>

        <div className='flex flex-col content-center'>

          {
            showCart
            &&
            <button onClick={() => setshowCart(false)} className='my-12 block  bg-pink-300 px-4 py-2 rounded-md hover:bg-pink-700 transition-colors duration-150'>
              &larr; Show Products
            </button>
          }

          {
            !showCart
            &&
            <button onClick={() => setshowCart(true)} className='my-12 block sm:hidden bg-pink-300 px-4 py-2 rounded-md hover:bg-pink-700 transition-colors duration-150'>
              Show Cart
            </button>
          }

          <div className={showCart ? 'py-2 flex min-w-fit' : ' py-2 sm:flex hidden min-w-fit'}>
            <CartContainer />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
