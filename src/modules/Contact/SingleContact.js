import React from 'react';
import './Contact.scss';
import classNames from 'classnames';

export const SingleContact = (props) => {
  const { icon, text, classIcon } = props;
  return (
    <div className='contact__contacts__single'>
      <i className={classNames('contact__contacts__single__icon', classIcon)}>{icon}</i>
      <span>{text}</span>
    </div>
  )
}