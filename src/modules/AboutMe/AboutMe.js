import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './AboutMe.scss';

const AboutMe = () => {
  return (
    <ScrollableAnchor id={'aboutme'}>
      <section className='aboutme'>
        <a href='#aboutme'>
          <h1 className='aboutme__h1'>About me</h1>
        </a>
        <div className='aboutme__text'>
          <p>My name is Adam Kulig.</p>
          <p>I am a land surveyor by education. I have been learning programming for almost a year. Also I took part in the 6-month weekend programming course with Front-end Development with React specialization.</p> 
          <p>I am an systematic, precise, ambitious person who can't leave a problem unresolved and that's probably why I enjoy programming so much - because it constantly challenges me and motivates to learn more.</p>
          <p> My current objective is using my React & Redux skills in larger commercial projects and learning advanced front-end techniques using this technology stack.</p>
          <p>I would love to get my first job as a frontend developer and challenge myself with real-world problems.</p> 
          <p>I encourage you to contact me!</p>
        </div>
      </section>
    </ScrollableAnchor>
  )
}

export default AboutMe;
