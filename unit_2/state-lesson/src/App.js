import './App.css';
import { useState } from 'react';
import Product from './components/Product';
import CartItem from './components/CartItem';
import products from './productData';
import Category from './components/Category';

const categories = ['tool', 'food', 'clothing']

function App() {

  const [cart, setCart] = useState([])
  let test = 0

  const displayCategories = () => {

    // creates a new, blank array to store the Category elements that we are creating
    let categoryEls = []

    // loops over the categories array to grab the values of all the registered categories
    for (let category of categories) {

      // filters out all of the products from the products array that match the category that we are currently looping over and saves them to a variable named categoryProducts. this saves the OBJECT, not the JSX!
      let categoryProducts = products.filter((product) => {
        return product.category === category
      })

      // pushes each Category component into the categoryEls array, created with all the products that we just filtered out.
      categoryEls.push(<Category products={categoryProducts} cart={cart} setCart={setCart} category={category} />)
    }

    // returns the categoryEls array so it is displayed on the page!
    return categoryEls;
  }

  return (
    <div>
      <h1> Hi There! </h1>
      {
        displayCategories()
      }
      <Category cart={cart} setCart={setCart} />
      <h2>CART:</h2>
      <ul>
        {cart.map(item => {
          return (
            <CartItem item={item} />
          )
        })}
      </ul>

      <h3>{test}</h3>
      <button onClick={() => {
        test += 1
        console.log(test)
        }}>+</button>
    </div>
  );
}

export default App;
