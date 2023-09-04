import './styles.scss';
import { sizesData, brandsData, colorsData } from '../../data';
import { useRef } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

type Props ={
    sizes: string[];
    setSizes: React.Dispatch<React.SetStateAction<string[]>>;
    brands: string[];
    setBrands: React.Dispatch<React.SetStateAction<string[]>>;
    colors: string[];
    setColors: React.Dispatch<React.SetStateAction<string[]>>;
}

export const FilterSelection = ({ sizes, setSizes, brands, setBrands, colors, setColors}: Props): JSX.Element => {
    const sizeRef = useRef<HTMLDivElement>(null);
    const brandRef = useRef<HTMLDivElement>(null);
    const colorRef = useRef<HTMLDivElement>(null);

    const handleClick = (e: React.MouseEvent, filter: string) => {
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
        if (brands.includes(selection)) {
            setBrands(brands.filter(size => size !== selection));
        } else {
            setBrands([...brands, selection]);
        }
    }

    const handleSizeClick = (selection: string) => {
        if (sizes.includes(selection)) {
            setSizes(sizes.filter(size => size !== selection));
        } else {
            setSizes([...sizes, selection]);
        }
    }

    const handleColorClick = (selection: string) => {
        if (colors.includes(selection)) {
            setColors(colors.filter(size => size !== selection));
        } else {
            setColors([...colors, selection]);
        }
    }

    return (
        <div className="filter-container">
            <div className="filters">
                <div className="filter">
                    <div className="top" onClick={(e) => handleClick(e, 'size')}>
                        <p>SIZE</p>
                        <AiOutlinePlus />
                    </div>
                    <div className="filterType" ref={sizeRef}>
                        {sizesData.map(size => 
                            <span>
                                <input type="checkbox" id={size} name={size} onClick={() => handleSizeClick(size)} />
                                <label htmlFor={size}>{size}</label>
                            </span>
                        )}
                    </div>
                </div>
                <div className="filter">
                    <div className="top" onClick={(e) => handleClick(e, 'brand')}>
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
                    <div className="top" onClick={(e) => handleClick(e, 'color')}>
                        <p>COLOR</p>
                        <AiOutlinePlus />
                    </div>
                    <div className="filterType" ref={colorRef} >
                        {colorsData.map(color => 
                            <span>
                                <input type="checkbox" id={color} name={color} onClick={() => handleColorClick(color)} />
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