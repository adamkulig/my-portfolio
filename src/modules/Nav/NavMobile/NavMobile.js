import React, { Component } from 'react';
import './NavMobile.scss';
import classNames from 'classnames';
import NavList from '../NavList/NavList';
import NavBurger from './NavBurger/NavBurger';

class NavMobile extends Component {
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
    const isOpen = this.state.menuIsOpen;
    return (
      <React.Fragment>
        <NavBurger onClick={this.showMenu} isOpen={isOpen} />
        <div className={classNames('nav__menu', isOpen && 'nav__menu--open')}>
          <NavList mobileView />
        </div>
      </React.Fragment>
    )
  }
}
export default NavMobile;
