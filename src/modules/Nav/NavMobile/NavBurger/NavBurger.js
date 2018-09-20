import React from 'react';
import classNames from 'classnames';
import './NavBurger.scss';

const NavBurger = (props) => {
  return (
    <div className={classNames('nav__burger', props.isOpen && 'nav__burger--open')} onClick={props.onClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
export default NavBurger;
