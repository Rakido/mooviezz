import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './categories.css';

// Importing Components 
import Header from '../component/nav/header'
import Room from '../component/nav/card'

const styles = {
  	main: {
  		fontFamily: 'Platform'
  	},
  };

class Categories extends React.Component {
	render() {
	return (
		<div>
		<Header />
		<Container>
		<div class="page-title" style={styles.main}><h1> 10 salles, 10 ambiances </h1></div>
		<Row>
		<Col md="4"> <Room /> </Col>
		<Col md="4"> <Room /> </Col>
		<Col md="4"> <Room /> </Col>
		</Row>
		</Container>
		
		</div>
	)

	}
}

export default Categories;