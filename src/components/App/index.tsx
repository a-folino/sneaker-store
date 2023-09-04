import React, { useState } from 'react';
import { Sneakers } from '../Sneakers';
import './styles.scss';
import { Cart } from '../Cart';
import { FilterSelection } from '../FilterSelection';

export const App = (): JSX.Element => {
  const [sizes, setSizes] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);

  return (
    <div className="container">
        <FilterSelection sizes={sizes} setSizes={setSizes} setBrands={setBrands} brands={brands} setColors={setColors} colors={colors} />
        <Sneakers sizes={sizes} brands={brands} colors={colors} />
        <Cart />
      </div>
  );
}

