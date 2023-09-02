import './styles.scss';

export const FilterSelection = (): JSX.Element => {

    return (
        <div className="filter-container">
            <div className="filters">
                <div className="filter">
                    <p>SIZE</p>
                </div>
                <div className="filter">
                    <p>BRAND</p>
                </div>
                <div className="filter">
                    <p>COLOR</p>
                </div>
                <div className="filter" style={{ borderBottom: 'none' }}>
                    <p>PRICE</p>
                </div>
            </div>
        </div>
    )
}