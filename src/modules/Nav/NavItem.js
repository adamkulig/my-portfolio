import React from 'react';
import './Nav.scss';
import classNames from 'classnames';

export const NavItem = (props) => {
  const { link, onClick, classIcon, icon, text } = props;
  return (
    <a 
      href={link}
      onClick={onClick}
      className='nav-menu__list__item'>
      <i className={classNames('nav-menu__list__item__icon', classIcon)}>{icon}</i>
      <span>{text}</span>
    </a>
  )
}