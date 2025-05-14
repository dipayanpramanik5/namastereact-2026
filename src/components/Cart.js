import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    // Subscribe to redux store using useSelector
    const cartItems = useSelector(store => store.cart.items);// get the items from the redux store
    const dispatch = useDispatch();
    const handleClearCart = () => {
        // Dispatch an action
        dispatch(clearCart());
    };
    return (
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold">Cart Items</h1>
                <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                  
                  { cartItems.length === 0 ?
                   <h1 className="text-2xl font-bold">Your Cart is Empty</h1> :
                   <button 
                    className="bg-pink-50 hover:bg-pink-100 text-pink-600 font-bold py-2 px-4 rounded"
                    onClick={() => { handleClearCart()}}
                    >
                    Clear Cart
                  </button>
                   
                 }
                  <ItemList items={cartItems} showVeg={false}/>
                </div>
            </div>
        )
}
export default Cart;