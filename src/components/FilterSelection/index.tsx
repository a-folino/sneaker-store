import './styles.scss';
import { sizes, brandsData, colors } from '../../data';
import { useRef } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

type Props ={
    setSizes: React.Dispatch<React.SetStateAction<string[]>>;
    setBrands: React.Dispatch<React.SetStateAction<string[]>>;
    brands: string[];
}

export const FilterSelection = ({ setSizes, setBrands, brands }: Props): JSX.Element => {
    const sizeRef = useRef<HTMLDivElement>(null);
    const brandRef = useRef<HTMLDivElement>(null);
    const colorRef = useRef<HTMLDivElement>(null);

    const handleClick = (filter: string) => {
        if (filter === 'size') {
            const ref = sizeRef.current as HTMLDivElement;
            ref.classList.contains('openFilter') ? ref.classList.remove('openFilter') : ref.classList.add('openFilter');
        } else if (filter === 'brand') {
            const ref = brandRef.current as HTMLDivElement;
            ref.classList.contains('openFilter') ? ref.classList.remove('openFilter') : ref.classList.add('openFilter');
        } else if (filter === 'color') {
            const ref = colorRef.current as HTMLDivElement;
            ref.classList.contains('openFilter') ? ref.classList.remove('openFilter') : ref.classList.add('openFilter');
        }
    };

    const handleBrandClick = (selection: string) => {
        // remove brand from array if it exists
    }

    const handleSizeClick = (selection: string) => {
    }

    return (
        <div className="filter-container">
            <div className="filters">
                <div className="filter">
                    <div className="top" onClick={() => handleClick('size')}>
                        <p>SIZE</p>
                        <AiOutlinePlus />
                    </div>
                    <div className="filterType" ref={sizeRef}>
                        {sizes.map(size => 
                            <span>
                                <input type="checkbox" id={size} name={size} onClick={() => handleSizeClick(size)} />
                                <label htmlFor={size}>{size}</label>
                            </span>
                        )}
                    </div>
                </div>
                <div className="filter">
                    <div className="top" onClick={() => handleClick('brand')}>
                        <p>BRAND</p>
                        <AiOutlinePlus />
                    </div>
                    <div className="filterType" ref={brandRef}>
                        {brandsData.map(brand => 
                            <span>
                                <input type="checkbox" id={brand} name={brand} onClick={() => handleBrandClick(brand)} />
                                <label htmlFor={brand}>{brand}</label>
                            </span>
                        )}
                    </div>
                </div>
                <div className="filter" style={{ borderBottom: 'none' }}> 
                    <div className="top" onClick={() => handleClick('color')}>
                        <p>COLOR</p>
                        <AiOutlinePlus />
                    </div>
                    <div className="filterType" ref={colorRef} >
                        {colors.map(color => 
                            <span>
                                <input type="checkbox" id={color} name={color} />
                                <label htmlFor={color}>{color}</label>
                            </span>
                        )}
                        </div>
                </div>
                {/* <div className="filter" >
                    <p onClick={() => handleClick('price')}>PRICE</p>
                </div> */}
            </div>
        </div>
    )
}