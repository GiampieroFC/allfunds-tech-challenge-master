
import { useState } from 'react';
import { CartContainer } from './containers/CartContainer';
import { ProductCardContainer } from './containers/ProductCardContainer';
import { FavContainer } from './containers/FavContainer';

function App() {

  const [showCart, setshowCart] = useState(false)

  const [limit, setLimit] = useState(10);


  const handleMore = () => {

    if (limit === 1000) {
      return;
    }

    setLimit(prev => prev + 10)
  }

  return (
    <>
      <div className='flex justify-evenly p-5'>

        <div className={showCart ? 'sm:w-2/3 hidden' : 'myStyleContainer w-2/3'}>
          <ProductCardContainer limit={limit} />
          <div className='m-2 flex flex-col justify-center bg-slate-400 hover:cursor-pointer active:scale-95 rounded' onClick={handleMore}>
            <p className='text-center text-4xl p-2'>Click to load more products...</p>
          </div>
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

          <div className={showCart ? 'py-2 flex flex-col w-full' : ' py-2 sm:flex sm:flex-col hidden w-full'}>
            <CartContainer />
            <FavContainer />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
