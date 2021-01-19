import React from 'react';
import 'materialize-css';
import {Navbar, Icon} from 'react-materialize';
import {NavLink} from 'react-router-dom';


const Index = (props) => {
  const {handleLogout, displayName} = props;
    return(
        <Navbar
  alignLinks="right"
  brand={<a className="brand-logo black-text" href="/">Bold</a>}
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
  className="z-depth-3"
>
  <NavLink to="/" className="black-text">
    Welcome {displayName}
  </NavLink>

  <NavLink to="/profile" className="black-text">
    Profile
  </NavLink>

  <NavLink to="/product" className="black-text">
    Products
  </NavLink>

  <NavLink to="/api" className="black-text">
    API
  </NavLink>


  <NavLink onClick={handleLogout} to="/" className="black-text">
      LogOut
  </NavLink>
  
  
</Navbar>
    )
}

export default Index;