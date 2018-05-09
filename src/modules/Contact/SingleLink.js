import React from 'react';
import './Contact.scss';
import classNames from 'classnames';

export const SingleLink = (props) => {
  const { icon, classIcon, link } = props;
  return (
    <div className='contact__links__single'>
      <a href={link}>
        <i className={classNames('contact__links__single__icon', classIcon)}>{icon}</i>
      </a>
    </div>
  )
}