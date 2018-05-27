import React from 'react';
import classNames from 'classnames';
import './Portfolio.scss';

export const PortfolioItem = (props) => {
  const { src, vertical, alt, linkToLive, linkToCode, title, tech } = props;
  return (
    <div className='portfolio-item'>
      <img 
        className={classNames('portfolio-item__img', vertical && 'portfolio-item__img--vertical')}
        src={src}
        alt={alt}
      />
      <span className='portfolio-item__title'>{title}</span>
      <span className='portfolio-item__technologies'>{tech}</span>
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
