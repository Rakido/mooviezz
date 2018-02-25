import React from 'react';
import { 
	Container,
	Card, 
	CardText, 
	CardBody,
  	CardTitle, 
  	Row,
  	Col,
  	} from 'reactstrap';

// Importing Components 
import Header from '../component/nav/header'
import Footer from '../component/nav/footer'
import './about.css';


 const styles = {
    main: {
      fontFamily: 'Platform',
    },
  };

class About extends React.Component {
	render() {
	return (
		<div>
		<Header />
		<Container>
		<div class="page-title" style={styles.main}><h1> Les règles du game </h1></div>
		<Row>
		<Col md="4"> 
			<Card>
			<CardBody>
        		<CardTitle style={styles.main}>
        		<h3>What is Mooviz ?</h3>
        		<div class="about-underline"> </div>
        		</CardTitle>
          		<CardText>
          		<h4>Some quick example text to build on the card title and make up the bulk of the card's content.
          		</h4>
          		</CardText>
         	</CardBody>
      		</Card>
		</Col>

		<Col md="4"> 
			<Card>
			<CardBody>
        		<CardTitle style={styles.main}>
        		<h3>What is Mooviz ?</h3>
        		<div class="about-underline"> </div>
        		</CardTitle>
          		<CardText>
          		<h4>Some quick example text to build on the card title and make up the bulk of the card's content.
          		</h4>
          		</CardText>
         	</CardBody>
      		</Card>
		</Col>

		<Col md="4"> 
			<Card>
			<CardBody>
        		<CardTitle style={styles.main}>
        		<h3>What is Mooviz ?</h3>
        		<div class="about-underline"> </div>
        		</CardTitle>
          		<CardText>
          		<h4>Some quick example text to build on the card title and make up the bulk of the card's content.
          		</h4>
          		</CardText>
         	</CardBody>
      		</Card>
		</Col>
		</Row>
		<Row>
		<Col md="4"> 
			<Card>
			<CardBody>
        		<CardTitle style={styles.main}>
        		<h3>What is Mooviz ?</h3>
        		<div class="about-underline"> </div>
        		</CardTitle>
          		<CardText>
          		<h4>Some quick example text to build on the card title and make up the bulk of the card's content.
          		</h4>
          		</CardText>
         	</CardBody>
      		</Card>
		</Col>

		<Col md="4"> 
			<Card>
			<CardBody>
        		<CardTitle style={styles.main}>
        		<h3>What is Mooviz ?</h3>
        		<div class="about-underline"> </div>
        		</CardTitle>
          		<CardText>
          		<h4>Some quick example text to build on the card title and make up the bulk of the card's content.
          		</h4>
          		</CardText>
         	</CardBody>
      		</Card>
		</Col>

		<Col md="4"> 
			<Card>
			<CardBody>
        		<CardTitle style={styles.main}>
        		<h3>What is Mooviz ?</h3>
        		<div class="about-underline"> </div>
        		</CardTitle>
          		<CardText>
          		<h4>Some quick example text to build on the card title and make up the bulk of the card's content.
          		</h4>
          		</CardText>
         	</CardBody>
      		</Card>
		</Col>
		</Row>

		</Container>
		
		<Footer />
		</div>
	);

	}
}

export default About;