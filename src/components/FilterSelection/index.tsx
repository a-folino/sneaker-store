import './styles.scss';

type Props ={
    setFilterBy: React.Dispatch<React.SetStateAction<string>>;
    setSize: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterSelection = ({ setFilterBy }: Props): JSX.Element => {
    
    const handleClick = (filter: string) => {
        setFilterBy(filter)
        console.log('clicked');
    };

    return (
        <div className="filter-container">
            <div className="filters">
                <div className="filter">
                    <p onClick={() => handleClick('size')}>SIZE</p>
                </div>
                <div className="filter">
                    <p onClick={() => handleClick('brand')}>BRAND</p>
                </div>
                <div className="filter">
                    <p onClick={() => handleClick('color')}>COLOR</p>
                </div>
                <div className="filter" style={{ borderBottom: 'none' }}>
                    <p onClick={() => handleClick('price')}>PRICE</p>
                </div>
            </div>
        </div>
    )
}