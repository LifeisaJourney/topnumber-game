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


  // Render the display of this.state of highest instead of displaying props.number
  render() {
    return (
      <h1>
        Top Number: {this.state.highest}
      </h1>
    );
  }
}

TopNumber.propTypes = {
  number: React.PropTypes.number,
  game: React.PropTypes.bool
};