import React from 'react';
import classNames from 'classnames';
import './NavBurger.scss';

export const NavBurger = (props) => {
  return (
    <div className={classNames('nav__burger', props.openClass)} onClick={props.onClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}