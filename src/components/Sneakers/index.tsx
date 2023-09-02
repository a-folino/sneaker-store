import React from 'react';
import './styles.scss';
import { data } from '../../data';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { Sneaker } from '../../types';

type Props = {
    sizes: string[];
    brands: string[];
}

export const Sneakers = ({ sizes, brands }: Props): JSX.Element => {
    const dispatch = useDispatch();

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