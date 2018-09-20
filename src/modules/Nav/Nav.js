import React, { Component } from 'react';
import './Nav.scss';
import NavList from './NavList/NavList';
import NavMobile from './NavMobile/NavMobile';
import me from '../../images/me.jpg';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      width: 0
    }
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const mobileView = this.state.width < 576
    return (
      <nav className='nav'>
        <a href='#header'>
          <img className='nav__author' src={me} alt="author's face" />
        </a>
        { mobileView && <NavMobile mobileView />}
        { !mobileView && <NavList />}
      </nav>
    )
  }
}

export default Nav;