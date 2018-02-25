import React from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  Button } from 'reactstrap';

import { Link } from 'react-router-dom';

import './card.css';



 const styles = {
    main: {
      fontFamily: 'Platform',
    },
  };

class Room extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "default",
      players: 0,
    }
  }
  render() {
  return (
    <div>
      <Card>

        <CardTitle style={styles.main}><h1>{this.state.name}</h1></CardTitle>
        <CardSubtitle><h4>{this.state.players} Players</h4></CardSubtitle>
        <CardImg top width="100%" height="378px" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />


          <Button outline color="primary btn-cta-outline" style={styles.main}><Link to='/playing'> Play Now </Link> </Button>

      </Card>
    </div>
  );
};
}

export default Room;
