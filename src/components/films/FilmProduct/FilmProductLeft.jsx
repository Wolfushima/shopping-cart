import React, { useState, useEffect } from 'react';
import FilmProductForm from './FilmProductForm';
import { useCart } from '../../../utils/CartContext';

const pricePerMinute = {
  collectorsEdition: 0.24153225806,
  blurayEdition: 0.10435483871,
  dvdEdition: 0.07177419354,
};
const filmPrice = (runTime, edition, quantity) => (runTime * pricePerMinute[edition]) * quantity;

const FilmProductLeft = ({ film }) => {
  const { setCurrentCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [priceTotal, setPriceTotal] = useState('');
  const [edition, setEdition] = useState('collectorsEdition');

  const addToCart = (item) => {
    setCurrentCart((prevState) => [...prevState, item]);
  };

  const handleClickQuantity = (step) => {
    if ((quantity === 1 && step === 'down') || (quantity === 10 && step === 'up')) return;
    if (step === 'down') setQuantity((prevState) => prevState - 1);
    if (step === 'up') setQuantity((prevState) => prevState + 1);
  };

  const handleChangeEdition = (e) => {
    setEdition(() => e.target.id);
  };

  const handleSubmit = (e) => {
    addToCart({
      filmTitle: film.title, priceTotal, quantity, edition,
    });
    e.preventDefault();
  };

  useEffect(() => {
    const newPrice = (filmPrice(film.running_time, edition, quantity)).toFixed(2);
    setPriceTotal(newPrice);
  }, [quantity]);

  useEffect(() => {
    const newPrice = (filmPrice(film.running_time, edition, quantity)).toFixed(2);
    setPriceTotal(newPrice);
  }, [edition]);

  return (
    <div className="film-product__left">
      <div className="film-product__img-container">
        <img
          key={film.image}
          src={film.image || null}
          alt={film.title}
        />
      </div>
      <FilmProductForm
        priceTotal={priceTotal}
        quantity={quantity}
        edition={edition}
        handleIncrease={() => handleClickQuantity('up')}
        handleDecrease={() => handleClickQuantity('down')}
        handleChange={handleChangeEdition}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default FilmProductLeft;