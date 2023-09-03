import { useSelector } from 'react-redux';
import './styles.scss';
import { RootState } from '../../redux/store';
import { CartItems } from '../CartItems';

export const Cart = (): JSX.Element => {
    const cart = useSelector((state: RootState) => state.cart);

    return (
        <div className="cart-container">
            <div className="cart">
                {cart.length === 0 ? <p>Add items to cart!</p> : 
                    <CartItems cart={cart} />
                }
            </div>
            <div className="bottom">
                <div className="total">
                    <p>TOTAL</p>
                    <p>${cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)}</p>
                </div>
                <div className={cart.length ? "checkout-btn-active checkout-btn" : "checkout-btn"}>
                    <p>CHECKOUT</p>
                </div>
            </div>
        </div>
    )
}