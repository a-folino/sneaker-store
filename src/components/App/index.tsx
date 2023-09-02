import React, { useState } from 'react';
import { Sneakers } from '../Sneakers';
import './styles.scss';
import { Cart } from '../Cart';
import { FilterSelection } from '../FilterSelection';

export const App = (): JSX.Element => {
  const [filterBy, setFilterBy] = useState('');
  const [size, setSize] = useState('');

  return (
    <div className="container">
        <FilterSelection setFilterBy={setFilterBy} setSize={setSize} />
        <Sneakers filterBy={filterBy} size={size} />
        <Cart />
      </div>
  );
}

