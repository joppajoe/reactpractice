import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, onInputNumber,onInputNumberChange } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter count={this.props.count} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} onClickCount={this.props.clickCount} 
        onInputNumber={this.props.onInputNumber} onInputNumberChange={this.props.onInputNumberChange} />
       

      </div>
      
    );
  }

}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onInputNumber:() => dispatch(onInputNumber()),
    onInputNumberChange:(number) => dispatch(onInputNumberChange(number)),
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      clickCount: state.clickCount,
      
      
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);