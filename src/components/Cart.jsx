import { useState } from "react";
export default function Cart(props){
    let[isAdded,setIsAdded]=useState(false);
    let {products}=props
    let [quantity,setQuantity]=useState(1);
    function incrementQuantity(){
        setQuantity(quantity+1)
        props.changeTotal(products.price);
    }
    function decrementQuantity(){
        setQuantity(quantity-1)
        props.changeTotal(-products.price * quantity);
    }
    function onAdd(){
        if(isAdded){
            props.decreaseCartItem();
            setIsAdded(false);
            props.changeTotal(-products.price);
        }else
        {
            props.changeTotal(products.price);
            setIsAdded(true);
            props.addCartItem();
        }
    }
    return(
        <div className="cart-wrapper">
            <div className="image-wrapper">
                <img src={products.path} alt="product-image"></img>
            </div>
            
            <div className="content">
                <div className="name">{products.name}</div>
                <div className="price">₹ {products.price}</div>
                {isAdded && (
                     <div className="quantity">
                    <div onClick={incrementQuantity}>+</div>
                    <div>{quantity}</div>
                    <button disabled={quantity <= 1} onClick={decrementQuantity}>-</button>
                </div>
                )}
                <button onClick={onAdd}>{isAdded ? "Remove":"Add"}</button>
            </div>
        </div>
    )
}