import './styles.scss';
import { Sneaker } from "../../types";
import { BiTrash } from 'react-icons/bi';

type Props = {
    cart: Sneaker[]
}

export const CartItems = ({ cart }: Props) => {

    return (
        <>
            {cart.map((item) => (
                <div className="cart-item" key={item.id + Math.floor(Math.random() * 1000)}>
                    <div className="details">
                        <p>{item.shoe}</p>
                        <p>${item.price.toFixed(2)}</p>
                        <BiTrash style={{ cursor: 'pointer'}} />
                    </div>
                </div>
            ))}
        </>
    )
}