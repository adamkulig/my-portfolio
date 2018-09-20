import React, { Component } from 'react';
import './Nav.scss';
import classNames from 'classnames';
import { NavItem } from './NavItem';
import { NavBurger } from './NavBurger/NavBurger';
import { FaInfoCircle, FaWrench, FaDesktop, FaEnvelopeO } from 'react-icons/lib/fa'
import me from '../../images/me.jpg';

export class Nav extends Component {
  constructor() {
    super();
    this.state = {
      menuIsOpen: false
    }
  }
  showMenu = () => {
    this.setState({
      menuIsOpen: !this.state.menuIsOpen
    })
  }

  render() {
    return (
      <div className='nav'>
        <img className='nav__author' src={me} alt="author's face" />
        <NavBurger onClick={this.showMenu} openClass={this.state.menuIsOpen && 'nav__burger--open'}/>
        <div className={classNames('nav-menu', this.state.menuIsOpen && 'nav-menu--open')}>
          <nav className='nav-menu__list'>
            <NavItem onClick={this.showMenu} link='#aboutme' text='About me' icon={<FaInfoCircle />} classIcon='FaInfoCircle'/>
            <NavItem onClick={this.showMenu} link='#skills' text='My skills' icon={<FaWrench />} classIcon='FaWrench'/>
            <NavItem onClick={this.showMenu} link='#portfolio' text='Portfolio' icon={<FaDesktop />} classIcon='FaDesktop'/>
            <NavItem onClick={this.showMenu} link='#contact' text='Contact' icon={<FaEnvelopeO />} classIcon='FaEnvelopeO'/>
          </nav>
        </div>
      </div>
    )
  }
}