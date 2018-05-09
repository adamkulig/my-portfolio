import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { FaEnvelopeO, FaPhone, FaGithub, FaFacebook, FaAngleDoubleUp } from 'react-icons/lib/fa'
import './Contact.scss';
import { fb_link, github_link } from '../../links/links';
import { SingleContact } from './SingleContact';
import { SingleLink } from './SingleLink';
import { SingleOutsideLink } from './SingleOutsideLink';

export const Contact = () => {
  return (
    <ScrollableAnchor id={'contact'}>
      <section className='contact'>
        <a href='#contact'>
          <h1 className='contact__h1'>Contact</h1>
        </a>
        <h3 className='contact__message'>If you have any questions or would like to see my CV let me know!</h3>
        <div className='contact__contacts'>
          <SingleContact
            text='+48 660 395 550'
            icon={<FaPhone />} 
            classIcon='FaPhone'/>
          <SingleContact
            text='adamkulig92@poczta.fm'
            icon={<FaEnvelopeO />} 
            classIcon='FaEnvelopeO'/>
        </div>
        <div className='contact__links'>
          <SingleOutsideLink
            icon={<FaGithub />} 
            classIcon='FaGithub'
            link={github_link}/>  
          <SingleOutsideLink
            icon={<FaFacebook />} 
            classIcon='FaFacebook'
            link={fb_link}/>
          <SingleLink
            icon={<FaAngleDoubleUp />} 
            classIcon='FaAngleDoubleUp'
            link='#header'/>
        </div>
      </section>
    </ScrollableAnchor>
  )
}