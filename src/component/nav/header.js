import React from 'react';
import Logo from '../../img/elements/logo.svg';
import { Link, } from 'react-router-dom';

// Reactstrap Elements

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';

// Custom CSS

import './header.css';



 const styles = {
  	main: {
  		fontFamily: 'Platform'
  	},
  };



class Header extends React.Component {

	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

 

	render() {
		return (
      	<div style={styles.main}>
        	<Navbar color="secondary" dark expand="md" className="header">
          		<NavbarBrand href="/">
          			<img src={Logo} className="app-logo" alt="logo" /> 
          		</NavbarBrand>
          		<NavbarToggler onClick={this.toggle} />
          	

          	<Collapse isOpen={this.state.isOpen} navbar>
			<Nav className="ml-auto" navbar>
              
              <NavItem>
                <NavLink class='text-button-grey'><Link to='/categories'>Salles</Link></NavLink>
              </NavItem>

              <NavItem>
                <NavLink class='text-button-grey'><Link to='/about'>About</Link></NavLink>
              </NavItem>

            </Nav>
          </Collapse>

        	</Navbar>
      	</div>
   		);
	}
}



export default Header;