import React from 'react';
// import { Link } from 'react-router-dom';
// import './NavBar.scss';
import { MenuData } from './MenuData';
import Logo from '../../assests/wanderlust-logo.png';
import { StyledNav } from '../../Styles/StyledNav';

const NavBar = () => {

  return (
    <StyledNav>
    <div className='NavBar'>
      <div className='logo'><img src={Logo} alt="logo" />
      </div>

        <div className="menu-list-wrapper">
              {MenuData.length && (
                <ul className="menu-items">
                  {MenuData.map( item => (
                    <li className="menu-list" key={item.label}>
                      <a className="menu-link" href={item.path}>{item.label}</a>
                    </li>
                  ))}
                </ul>
                
              )}
        </div>
    </div>
    </StyledNav>
  );
};

export default NavBar;