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
        <div>
          <h3 className='skills__h3'>Good</h3>
          <div className='skills__logos'>
            <Logo logo={JS_logo} name='JS_logo'/>
            <Logo logo={HTML5_logo} name='HTML5_logo'/>
            <Logo logo={CSS3_logo} name='CSS3_logo'/>
          </div>
          <h3 className='skills__h3'>Basic</h3>
          <div className='skills__logos'>
            <Logo logo={React_logo} name='React_logo'/>
            <Logo logo={Sass_logo} name='Sass_logo'/>
            <Logo logo={Redux_logo} name='Redux_logo'/>
          </div>
        </div>
        <div className='skills__details'>
          <div className='skills__details__detail'>
            <h3 className='skills__details__h3'>ECMAScript 6</h3>
            <p className='skills__details__p'>When I write javascript code, I use only ES6 syntax.</p>
          </div>
          <div className='skills__details__detail'>
            <h3 className='skills__details__h3'>RWD</h3>
            <p className='skills__details__p'>I make websites and applications fully responsive.</p>
          </div>
          <div className='skills__details__detail'>
            <h3 className='skills__details__h3'>BEM</h3>
            <p className='skills__details__p'>I use BEM methodology so code is clean and works great with SCSS which I use.</p>
          </div>
          <div className='skills__details__detail'>
            <h3 className='skills__details__h3'>Precise</h3>
            <p className='skills__details__p'>I am a precise person, I pay special attention to symmetries and details.</p>
          </div>
          <div className='skills__details__detail'>
            <h3 className='skills__details__h3'>Modern positioning</h3>
            <p className='skills__details__p'>When positioning elements, I always use flexbox. I also learn CSS Grid.</p>
          </div>
          <div className='skills__details__detail'>
            <h3 className='skills__details__h3'>HTML 5</h3>
            <p className='skills__details__p'>I use only semantic tags in HTML code.</p>
          </div>
        </div>

      </section>
   </ScrollableAnchor>
    
  )
}
