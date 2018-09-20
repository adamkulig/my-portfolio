import React from 'react';
import './Skills.scss';

const SingleSkill = (props) => {
  const { heading, text } = props;
  return (
    <div className='skills__details__detail'>
      <h3 className='skills__details__h3'>{heading}</h3>
      <p className='skills__details__p'>{text}</p>
    </div>
  )
}
export default SingleSkill;
