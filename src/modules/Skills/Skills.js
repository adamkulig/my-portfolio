import React from 'react';
import './Skills.scss';
import { SingleSkill } from './SingleSkill';
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
          <div className='skills__logos'>
            <Logo logo={JS_logo} name='JS_logo'/>
            <Logo logo={HTML5_logo} name='HTML5_logo'/>
            <Logo logo={CSS3_logo} name='CSS3_logo'/>
          </div>
          <div className='skills__logos'>
            <Logo logo={React_logo} name='React_logo'/>
            <Logo logo={Sass_logo} name='Sass_logo'/>
            <Logo logo={Redux_logo} name='Redux_logo'/>
          </div>
        </div>
        <div className='skills__details'>
          <SingleSkill 
            heading='REACT.JS'
            text='My main goal is to learn React so all my projects I do using this framework. I also learn Redux to keep my state out of components.'
          />
          <SingleSkill 
            heading='Clean code'
            text='I try to write clean code so that it is understandable for every programmer.'
          />
          <SingleSkill 
            heading='Styling'
            text='I only style using preprocesor SASS exactly the SCSS syntax.'
          />
          <SingleSkill 
            heading='ECMAScript 6'
            text='When I write javascript code, I use ES6 syntax only.'
          />
          <SingleSkill 
            heading='RWD'
            text='I make websites and applications fully responsive.'
          />
          <SingleSkill 
            heading='BEM'
            text='I use BEM methodology so code is clean and works great with SCSS which I use.'
          />
          <SingleSkill 
            heading='Precise'
            text='I am a precise person, I pay special attention to symmetries and details.'
          />
          <SingleSkill 
            heading='Modern positioning'
            text='When positioning elements, I always use flexbox. I also learn CSS Grid.'
          />
          <SingleSkill 
            heading='HTML 5'
            text='I use only semantic tags in HTML code.'
          />
          <SingleSkill 
            heading='Git'
            text='I know the basics of git and I keep my projects in a remote repository.'
          />
        </div>
      </section>
   </ScrollableAnchor>
    
  )
}
