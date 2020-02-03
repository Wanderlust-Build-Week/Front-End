import React from 'react';
import { Link } from './node_modules/react-router-dom';
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
                      <Link className="menu-link" to={item.path}>{item.label}</Link>
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