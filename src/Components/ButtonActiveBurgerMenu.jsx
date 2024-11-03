import React from 'react';

const ButtonActiveBurgerMenu = ({ onClick }) => (
  <button
    className="burgerClick"
    aria-label="Активация меню"
    type="button"
    onClick={onClick}
  />
);

export default ButtonActiveBurgerMenu;
