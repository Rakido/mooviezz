import React from 'react';
import './footer.css';

// Reactstrap Elements

import {
  Navbar,
  NavItem,
  NavLink,
} from 'reactstrap';

// Custom CSS



class Footer extends React.Component {

	render() {
		return (
      	<div className="footer">
        	<Navbar color="secondary" dark expand="md" className="footer">
          		<NavItem class="footer-text">
          			If you see any bug <a href="">send us a message</a>.
          		</NavItem>


              <NavItem>
                <NavLink><div class="signature">MOOVIEZ, All rights reseved, blablablalbalbalbalbalbalblbalbalbal</div></NavLink>
              </NavItem>

        	</Navbar>
      	</div>
   		);
	}
}


export default Footer;
