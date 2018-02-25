import React, { Component } from 'react';
import Youtube from 'react-youtube';
import chrono from '../../img/elements/pictos/chronometre.svg';
import categorie from '../../categories/categorie';

import './player.css';

const TIMER = 30;
const TIMER_STEP = 100;

class Video extends Component {

  constructor(props){
    super(props);

    this.state = {
      interval: null,
      timeRemaining: TIMER,
      inputValue: "",
      currentVideoId: 1,
      canPlay: false,
      hasWon: false,
    };

    this.resetGame = this.resetGame.bind(this);
    this.endGame = this.endGame.bind(this);
    this.startGame = this.startGame.bind(this);
    this.newGame = this.newGame.bind(this);
    // this.testInput = this.testInput.bind(this);
    this.advanceTimer = this.advanceTimer.bind(this);
    // this.handleKeyboard = this.handleKeyboard.bind(this);
  }

    // Envoyer une nouvelle vidéo à chaque lancement
    componentWillMount() {
      this.getVideo();
    }

    getVideo() {
      const keyArray = Object.keys(categorie);
      const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
      // Ajouter un random
      this.setState(categorie[randomKey]);
    };

    resetGame(){
    this.setState((prevState) => {
      return {
        canPlay: false,
        timeRemaining: TIMER,
        hasWon: false
      };
    });
    this.playerInput.resetInput();
    this.playerInput.setFocus();
  }

    startGame(){
    var interval = setInterval( this.advanceTimer, TIMER_STEP);
    this.setState({interval: interval, canPlay: true})
  }

  clearCounterInterval(){
    clearInterval(this.state.interval);
  }

    // Timer function
    advanceTimer(){
    this.setState((prevState) => {
      return {
        timeRemaining: prevState.timeRemaining - (TIMER_STEP / 1000)
      };
    });
  }

    endGame(){
    this.setState((prevState) => {
      return {
        canPlay: false,

      };
    });

    this.clearCounterInterval();
  }

     newGame(){

    this.resetGame();
    this.setState((prevState) => {
      return {
        currentVideoId: this.getNextVideoId()
      };
    }, this.startGame);
  }


    render() {

    const opts = {
      height: window.innerHeight,
      width: window.innerWidth,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        rel : 0,
        fs : 0,
        modestbranding: 1,
        showinfo: 0,
        iv_load_policy: 3,
        disablekb: 0,
        end:30,
      }
    };

   return (

          <div>
            <div className="input-field">
              <div className="count">
                <img src={chrono} alt="counter"/>
                <div className="counter">
                { (this.state.timeRemaining >= 0 ) ? Math.floor(Math.round(this.state.timeRemaining * 10).toFixed(2) / 10) : 0 }
              </div>
              </div>


              <input type="text"
              placeholder="Une idée ?"
              ref=""
              disabled= ""
              className="player-input" />
             </div>

          <div className="wrapper">
            <Youtube videoId={this.state.youtubeID} opts={opts} onReady={this._onReady}/>
          </div>

          <div className="overlay"> </div>
          </div>


    );
  }

  _onReady(event){
    event.target.playVideo();
  }
}

export default Video;
