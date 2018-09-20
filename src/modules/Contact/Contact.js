import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { FaEnvelopeO, FaPhone, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/lib/fa'
import './Contact.scss';
import { fb_link, github_link, linkedin_link } from '../../links/links';
import SingleContact from './SingleContact';
import SingleOutsideLink from './SingleOutsideLink';

const Contact = () => {
  return (
    <ScrollableAnchor id={'contact'}>
      <section className='contact'>
        <a href='#contact'>
          <h1 className='contact__h1'>Contact</h1>
        </a>
        <p className='contact__message'>If you have any questions or would like to see my CV let me know!</p>
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
          <SingleOutsideLink
            icon={<FaLinkedin />} 
            classIcon='FaLinkedin'
            link={linkedin_link}/>
        </div>
      </section>
    </ScrollableAnchor>
  )
}
export default Contact;
