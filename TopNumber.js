import React from 'react';
import ReactDOM from 'react-dom';
const yellow = 'rgb(255, 215, 18)';

export class TopNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 'highest': 0 };
  }
// componentWillReceiveProps will render before render()
//Will setState of highest to be the nextProp which is Top Number: {this.props.number}
  componentWillReceiveProps(nextProps) {
    if (nextProps.number > this.state.highest){
      this.setState({ highest:nextProps.number
      });
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