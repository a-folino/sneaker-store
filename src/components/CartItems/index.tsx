import './styles.scss';
import { Sneaker } from "../../types";
import { BiTrash } from 'react-icons/bi';
import { removeFromCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

type Props = {
    cart: Sneaker[]
}

export const CartItems = ({ cart }: Props) => {
    const dispatch = useDispatch();

    const handleDelete = (item: number) => {
        dispatch(removeFromCart(item));
    }

    return (
        <>
            {cart.map((item) => (
                <div className="cart-item" key={item.id + Math.floor(Math.random() * 1000)}>
                    <div className="details">
                        <p className="shoe">{item.shoe} <BiTrash onClick={() => handleDelete(item.id)} style={{ cursor: 'pointer'}} /></p>
                        <p className="price">${item.price.toFixed(2)}</p>
                        
                    </div>
                </div>
            ))}
        </>
    )
}