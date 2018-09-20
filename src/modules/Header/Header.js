import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './Header.scss';

const Header = () => {
  return (
    <ScrollableAnchor id={'header'}>
      <header className='header'>
        <h1>Hi there!</h1>
          <h2>
            <span>My name is Adam and</span><br />
            <span>I'm front-end developer.</span>
          </h2>
        <a href='#aboutme' className='header__button-link'>Show me more!</a>
      </header>
    </ScrollableAnchor>
  )
}
export default Header;
