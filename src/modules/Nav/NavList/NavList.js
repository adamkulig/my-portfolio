import React, { Component } from 'react';
import './NavList.scss';
import classNames from 'classnames';
import { NavItem } from '../NavItem/NavItem';
import { FaInfoCircle, FaWrench, FaDesktop, FaEnvelopeO } from 'react-icons/lib/fa'

class NavList extends Component {
  render() {
    const { mobileView, toggleMenu } = this.props;
    return (
      <div className={classNames('nav-list', mobileView && 'nav-list--mobile')}>
        <NavItem onClick={toggleMenu} link='#aboutme' text='about me' icon={<FaInfoCircle />} classIcon='FaInfoCircle'/>
        <NavItem onClick={toggleMenu} link='#skills' text='my skills' icon={<FaWrench />} classIcon='FaWrench'/>
        <NavItem onClick={toggleMenu} link='#portfolio' text='portfolio' icon={<FaDesktop />} classIcon='FaDesktop'/>
        <NavItem onClick={toggleMenu} link='#contact' text='contact' icon={<FaEnvelopeO />} classIcon='FaEnvelopeO'/>
    </div>
    );
  }
}

export default NavList;