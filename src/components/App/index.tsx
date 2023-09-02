import React from 'react';
import { Sneakers } from '../Sneakers';
import './styles.scss';
import { Cart } from '../Cart';
import { FilterSelection } from '../FilterSelection';

export const App = (): JSX.Element => {

  return (
    <div className="container">
        <FilterSelection />
        <Sneakers />
        <Cart />
      </div>
  );
}

