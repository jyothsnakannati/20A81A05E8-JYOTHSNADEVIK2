import CartIcon from "./CartIcon.jsx"
export default function Header(props){
    return (
        <div class="header">
        <div className="title">Cart</div>
        <CartIcon cartItems={props.cartItems}/>
        </div>
    );
}