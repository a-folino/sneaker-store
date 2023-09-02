import React from 'react';
import './styles.scss';
import { data } from '../../data';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { RootState } from '../../redux/store';
import { Sneaker } from '../../types';

export const Sneakers = (): JSX.Element => {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart);

    console.log(cart);

    const handleClick = (sneaker: Sneaker) => {
        dispatch(addToCart(sneaker));

        // add to localStorage
    };

    return (
        <div className="sneakers-container">
            {data.map((sneaker) => (
                <div className="sneaker" key={sneaker.id }onClick={() => handleClick(sneaker)}>
                    <img src={require(`../../${sneaker.image}`)} alt={sneaker.shoe} />
                    <div className="details">
                        <p>{sneaker.shoe}</p>
                        <p>${sneaker.price.toFixed(2)}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}