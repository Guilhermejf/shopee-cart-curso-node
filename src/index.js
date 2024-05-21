import { createItem } from "./services/item.js"
import {addItem,calculateTotal,displayCart ,removeItem,deleteItem } from './services/cart.js'

const cart =[]

const item1 = await createItem("Hotweels",12.99,3)
const item2 = await createItem("Hotweels Ferrai",32.99,4)
const item3 = await createItem("Teclado ",349.90,1)

addItem(cart,item1)
addItem(cart,item2)
addItem(cart,item3)

//removeItem(cart,3)

displayCart(cart)

//deleteItem(cart,item3.name)
//console.log(cart)
console.log(
    await calculateTotal(cart)
)
//console.log(item2.subtotal());