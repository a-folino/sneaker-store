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
        </div>
    )
}