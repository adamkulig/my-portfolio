import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './Portfolio.scss';
import { PortfolioItem } from './PortfolioItem';
import piggame from '../../images/piggame.png';
import todoapp from '../../images/todoapp.png';
import { piggame_link_live, piggame_link_code, todo_link_live, todo_link_code } from '../../links/links';

export const Portfolio = () => {
  return (
    <ScrollableAnchor id={'portfolio'}>
      <section className='portfolio'>
        <a href='#portfolio'>
          <h1 className='portfolio__h1'>Portfolio</h1>
        </a>
        <div className='portfolio__projects'>
          <PortfolioItem 
            src={piggame}
            alt='piggame screen'
            linkToLive={piggame_link_live}
            linkToCode={piggame_link_code}
            title='Pig Game'
            tech='Technologies: React.js, SCSS, ES6'
          />
          <PortfolioItem 
            src={todoapp}
            alt='todo screen'
            linkToLive={todo_link_live}
            linkToCode={todo_link_code}
            title='To Do'
            tech='Technologies: React.js, SCSS, ES6'
          />
         </div>
      </section>
    </ScrollableAnchor>
  )
}
