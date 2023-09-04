import { useDispatch } from 'react-redux';
import { Sneaker } from '../../types';
import './styles.scss';
import { addToCart } from '../../redux/cartSlice';
import { useRef } from 'react';

type Props = {
    isOpen: boolean;
    sneaker: Sneaker | undefined;
    setIsOpen: (isOpen: boolean) => void;
}

export const Modal = ({isOpen, sneaker, setIsOpen}: Props): JSX.Element => {
    const dispatch = useDispatch();
    const ref = useRef<HTMLDivElement>(null);

    const handleClick = (action: string) => {
        const modal = ref.current as HTMLDivElement;

        if (action === 'close') {
            modal.style.animation = 'fadeOut 0.3s ease forwards';
            setTimeout(() => {
                setIsOpen(false)
            }, 300);
            return;
        } else {
            setIsOpen(false);
            dispatch(addToCart(sneaker));
        }
    };

    return (
        <>
            {isOpen && (
                <div className="modal-container" ref={ref}>
                    <div className="details">
                        <h3>{sneaker?.shoe}</h3>
                        <p className="smaller-text">{sneaker?.color} &middot; {sneaker?.brand}</p>
                        <img src={require(`../../${sneaker?.image}`)} alt={sneaker?.shoe} />
                        <p className="smaller-text">{sneaker?.desc}</p>
                        <h4>${sneaker?.price.toFixed(2)}</h4>
                    </div>

                    <div className="buttons">
                        <button className="add-btn" onClick={() => handleClick('add')}>ADD TO CART</button>
                        <button className="close-btn" onClick={() => handleClick('close')}>CLOSE</button>
                    </div>
                </div>
            )}
        </>
    )
}