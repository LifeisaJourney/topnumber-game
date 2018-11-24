import React from 'react';
import ReactDOM from 'react-dom';
const yellow = 'rgb(255, 215, 18)';

export class TopNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 'highest': 0 };
  }
// componentWillReceiveProps will render before render()
  componentWillReceiveProps(nextProps) {
    if (nextProps.number > this.state.highest){
      this.props.number
    }
  }

  render() {
    return (
      <h1>
        Top Number: {this.props.number}
      </h1>
    );
  }
}

TopNumber.propTypes = {
  number: React.PropTypes.number,
  game: React.PropTypes.bool
};