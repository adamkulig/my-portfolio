import React from 'react';
import './Portfolio.scss';

export const PortfolioItem = (props) => {
  const { src, alt, linkToLive, linkToCode, text } = props;
  return (
    <div className='portfolio-item'>
      <img className='portfolio-item__img' src={src} alt={alt} />
      <span className='portfolio-item__text-under-img'>{text}</span>
      <div className='portfolio-item__buttons'>
        <a 
          className='portfolio-item__buttons__link portfolio-item__buttons__link--live' 
          href={linkToLive}  target="_blank">
          Live
        </a>
        <a className='portfolio-item__buttons__link portfolio-item__buttons__link--code'
          href={linkToCode}  target="_blank">
          Code
        </a>
      </div>
    </div>   
  )
}
