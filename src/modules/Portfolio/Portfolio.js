import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './Portfolio.scss';
import { PortfolioItem } from './PortfolioItem';
import piggame from '../../images/piggame.png';
import todoapp from '../../images/todoapp2.png';
import recipes from '../../images/recipes2.png';
import memory from '../../images/memory.png';
import grid from '../../images/my-grid.png';
import { 
  piggame_link_live, 
  piggame_link_code, 
  todo_link_live, 
  todo_link_code, 
  recipes_link_live, 
  recipes_link_code,
  memory_link_live,
  memory_link_code,
  grid_link_live,
  grid_link_code
} from '../../links/links';

export const Portfolio = () => {
  return (
    <ScrollableAnchor id={'portfolio'}>
      <section className='portfolio'>
        <a href='#portfolio'>
          <h1 className='portfolio__h1'>Portfolio</h1>
        </a>
        <div className='portfolio__projects'>
          <PortfolioItem 
            src={recipes}
            vertical={true}
            alt='recipes screen'
            linkToLive={recipes_link_live}
            linkToCode={recipes_link_code}
            title='Recipes Search Engine'
            tech='Technologies: React.js, Redux, SCSS, ES6, React-router, Redux-thunk'
          />
          <PortfolioItem 
            src={memory}
            vertical={true}
            alt='memory screen'
            linkToLive={memory_link_live}
            linkToCode={memory_link_code}
            title='Memory Game'
            tech='Technologies: React.js, Redux, Reactstrap, SCSS, ES6, React-router'
          />
          <PortfolioItem 
            src={grid}
            vertical={true}
            alt='grid screen'
            linkToLive={grid_link_live}
            linkToCode={grid_link_code}
            title='My 24 column, mobile-first grid'
            tech='Technologies: React.js, SCSS, ES6'
          />
          <PortfolioItem 
            src={todoapp}
            vertical={true}
            alt='todo screen'
            linkToLive={todo_link_live}
            linkToCode={todo_link_code}
            title='To Do'
            tech='Technologies: React.js, SCSS, ES6'
          />
          <PortfolioItem 
            src={piggame}
            vertical={false}
            alt='piggame screen'
            linkToLive={piggame_link_live}
            linkToCode={piggame_link_code}
            title='Pig Game'
            tech='Technologies: React.js, SCSS, ES6'
          />
         </div>
      </section>
    </ScrollableAnchor>
  )
}
