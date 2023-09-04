import React from 'react';
import './styles.scss';
import { data } from '../../data';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { Sneaker } from '../../types';

type Props = {
    sizes: string[];
    brands: string[];
    colors: string[];
}

export const Sneakers = ({ sizes, brands, colors }: Props): JSX.Element => {
    const dispatch = useDispatch();

    const handleClick = (sneaker: Sneaker) => {
        dispatch(addToCart(sneaker));

        // add to localStorage
    };

    const filteredData = data.filter(sneaker => {
        if (sizes.length && brands.length && colors.length) {
            return sneaker.sizes.some(size => sizes.includes(size)) && brands.includes(sneaker.brand) && colors.includes(sneaker.color);
        } else if (sizes.length && brands.length) {
            return sneaker.sizes.some(size => sizes.includes(size)) && brands.includes(sneaker.brand)
        } else if (sizes.length && colors.length) {
            return sneaker.sizes.some(size => sizes.includes(size)) && colors.includes(sneaker.color);
        } else if (brands.length && colors.length) {
            return brands.includes(sneaker.brand) && colors.includes(sneaker.color);
        } else if (sizes.length) {
            return sneaker.sizes.some(size => sizes.includes(size));
        } else if (brands.length) {
            return brands.includes(sneaker.brand);
        } else if (colors.length) {
            return colors.includes(sneaker.color);
        } else {
            return sneaker;
        }
    });

    return (
        <div className="sneakers-container">
            {filteredData.length ? filteredData.map((sneaker) => (
                <div className="sneaker" key={sneaker.id }onClick={() => handleClick(sneaker)}>
                    <img src={require(`../../${sneaker.image}`)} alt={sneaker.shoe} />
                    <div className="details">
                        <p>{sneaker.shoe}</p>
                        <p>${sneaker.price.toFixed(2)}</p>
                    </div>
                </div>
            )) : <p>No items match your search!</p>}
        </div>
    )
}