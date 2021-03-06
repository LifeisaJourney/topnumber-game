import React from 'react';
import ReactDOM from 'react-dom';
const yellow = 'rgb(255, 215, 18)';

export class TopNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 'highest': 0 };
  }
// componentWillReceiveProps will render before render()
// setState of highest to be the nextProps.number which is passed from App.js
  componentWillReceiveProps(nextProps) {
    if (nextProps.number > this.state.highest){
      this.setState({ 
        highest: nextProps.number
      });
    }
  }

  //Turns background yellow when it is over the limit with game logic. Otherwise it will be white. 
  componentWillUpdate(nextProps, nextState){
    if (document.body.style.background != yellow && this.state.highest >= 950*1000) {
      document.body.style.background = yellow; 
    } else if (!this.props.game && nextProps.game) {
      document.body.style.background = 'white';
    }
  }


  // Render the display of this.state of highest instead of displaying props.number
  render() {
    return (
      <h1>
        Top Number: {this.state.highest}
      </h1>
    );
  }
}
//common way of using componentWillReceiveProps to comparing incoming props to current props or state and decides what to render based on comparison. 

TopNumber.propTypes = {
  number: React.PropTypes.number,
  game: React.PropTypes.bool
};