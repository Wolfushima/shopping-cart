/* eslint-disable quotes */
import React from 'react';
import { Link } from 'react-router-dom';
import addToCardIcon from '../../assets/images/add-to-cart.png';
import searchIcon from '../../assets/images/search.png';

const HeaderControls = ({
  handleClick, className, handleClickSearch, handleClickHamburger, isSearchBarExpanded,
}) => (
  <div className={className}>
    <button
      className={isSearchBarExpanded ? "header-controls__search expanded" : "header-controls__search"}
      onClick={handleClickSearch}
      type="button"
    >
      <div className="icon-container">
        <img className="icon icon-search" src={searchIcon} alt="Search Icon" />
      </div>
    </button>
    <Link
      to="/shop/cart"
      className="header-controls__cart"
      onClick={(e) => handleClick(e, 'root', '/shop/cart')}
    >
      <div className="icon-container">
        <img className="icon icon-cart" src={addToCardIcon} alt="Cart Icon" />
      </div>
    </Link>
    <button
      className="header-controls__nav"
      type="button"
      onClick={handleClickHamburger}
    >
      <div className="hamburger-icon" id="icon">
        <div className="icon-1" id="a" />
        <div className="icon-2" id="b" />
        <div className="icon-3" id="c" />
      </div>
    </button>
  </div>
);

export default HeaderControls;
