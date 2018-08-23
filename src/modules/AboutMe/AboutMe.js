import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './AboutMe.scss';

export const AboutMe = () => {
  return (
    <ScrollableAnchor id={'aboutme'}>
      <section className='aboutme'>
        <a href='#aboutme'>
          <h1 className='aboutme__h1'>About me</h1>
        </a>
        <div className='aboutme__text'>
          <p>My name is Adam Kulig.</p>
          <p>I am a land surveyor by education. I made the decision to change my industry work.</p> 
          <p>I chose programming because it is interesting and gives me the opportunity to improve myself technically, logically and linguistically. </p>
          <p>I have been learning programming for half a year. I took part in the programming course with Front-end Development with React specialization. </p>
          <p>I am a systematic, precise, ambitious person who can not leave an problem unresolved.</p> 
          <p>I would love to get my first job as a frontend developer and challenge myself with real-world problems.</p> 
          <p>I encourage you to contact me!</p>
        </div>
      </section>
    </ScrollableAnchor>
  )
}
