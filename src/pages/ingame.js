import React from 'react';

import './ingame.css';

// Importing Components
import Header from '../component/nav/header';
import Footer from '../component/nav/footer';
import Video from '../component/game/video';
import Compteur from '../component/game/score';


const styles = {
  	main: {
  		fontFamily: 'Platform'
  	},
  };

class InGame extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			hasMessageToShow:false,
			score: 0,
      name: "Blockbusters",

		}
	}

	render() {
	return (
		<div>
		<Header />
		<div className="wrapper">
		<div className="infos" style={styles.main}><div class="infos-live" style={styles.main}> live </div><h3 class="white">{this.state.name} | {this.state.score} points</h3>
		<Compteur />

		</div>


		<Video />
		</div>
		<Footer />
		</div>
	)

	}
}

export default InGame;
