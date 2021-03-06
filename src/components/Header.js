import React from 'react';
import logoSvg from '../assets/img/pizza-logo.svg';
import Button from './Button';

const Header = (props) => {    
  const handlerClick = () => {
    console.log('handler click')
  }

  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src={logoSvg} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <Button onClick={handlerClick}/>
      </div>
    </div>
  );
};

export default Header;
