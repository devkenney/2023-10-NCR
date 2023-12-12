// we import Product here so we can use it as a Component below
import Product from "./Product"

export default function Category({ cart, setCart, products, category }) {
  return (
    <>
      <h3>{category}</h3>
      <ul>
        {
        // maps over the products array we got from App.js and returns individual Product components from the Product Component file, using the data provided.
        products?.map(item => {
          return (
            <Product item={item} setCart={setCart} cart={cart} />
          )
        }
        )}
      </ul>
    </>
  )
}