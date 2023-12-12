// we do not need to import anything here because it is the bottom level component (grandchild of App.js)

export default function Product ({ item, cart, setCart }) {

  // returns a list item with the item's name (gotten from the Category Component). the category component is the direct parent of this component (it is only used inside of a category), therefore all of its information from props is gotten from the Category
  return (
    <li>{item.name} <button onClick={() => {
      // this just adds the item attached to this button to the cart array (adds the item to our shopping cart)
      setCart([...cart, item])


      // alternate way of doing line 9:
      // const tempArr = cart
      // tempArr.push(item)
      // setCart(tempArr)

    }}>Add to Cart</button></li>
  )
}