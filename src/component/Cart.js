import {useState , useEffect } from "react";


const Cart = ({items}) => {

    return(
        <div >
            <h1>Cart Items</h1>
            {items.length === 0 && <h3>No items in the cart</h3>}
            {items.length > 0 &&
            <ul className="absolute top-15 right-15 z-1 bg-blue-500 p-2 m-2 w-48 border-2">
                <h3>{items.length +  " items"}</h3>
                { items.map((item)=>{
                    return <li key={item}>{item}</li>
                })}
            </ul>
}
        </div>
    )
}

export default Cart;