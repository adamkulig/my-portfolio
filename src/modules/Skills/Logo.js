import React from 'react';
import './Skills.scss';
import classNames from 'classnames';

const Logo = (props) => {
  return (
    <img 
      src={props.logo} 
      alt={props.name} 
      className={classNames('skills__logos__img', props.name)}/>
  )
}

export default Logo;