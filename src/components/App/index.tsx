import React, { useState } from 'react';
import { Sneakers } from '../Sneakers';
import './styles.scss';
import { Cart } from '../Cart';
import { FilterSelection } from '../FilterSelection';

export const App = (): JSX.Element => {
  const [sizes, setSizes] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);

  console.log('BRANDS', brands);
  console.log('SIZES', sizes);
  return (
    <div className="container">
        <FilterSelection setSizes={setSizes} setBrands={setBrands} brands={brands} />
        <Sneakers sizes={sizes} brands={brands} />
        <Cart />
      </div>
  );
}

