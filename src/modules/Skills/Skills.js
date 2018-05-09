import React from 'react';
import './Skills.scss';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Logo } from './Logo'
import HTML5_logo from '../../images/HTML5_logo.png';
import CSS3_logo from '../../images/CSS3_logo.png';
import JS_logo from '../../images/JS_logo.png';
import React_logo from '../../images/React_logo.png';
import Redux_logo from'../../images/Redux_logo.png';
import Sass_logo from '../../images/Sass_logo.png';

export const Skills = () => {
  return (
    <ScrollableAnchor id={'skills'}>
      <section className='skills'>
        <a href='#skills'>
          <h1 className='skills__h1'>Skills</h1>
        </a>
        <h2 className='skills__h2'>Good:</h2>
        <div className='skills__logos'>
          <Logo logo={JS_logo} name='JS_logo'/>
          <Logo logo={HTML5_logo} name='HTML5_logo'/>
          <Logo logo={CSS3_logo} name='CSS3_logo'/>
        </div>
        <h2 className='skills__h2'>Basic:</h2>
        <div className='skills__logos'>
          <Logo logo={React_logo} name='React_logo'/>
          <Logo logo={Sass_logo} name='Sass_logo'/>
          <Logo logo={Redux_logo} name='Redux_logo'/>
        </div>
      </section>
   </ScrollableAnchor>
    
  )
}
