import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  // state = {
  //   counters: [
  //     { id: 1, value: 0 },
  //     { id: 2, value: 4 },
  //     { id: 3, value: 0 },
  //     { id: 4, value: 0 }
  //   ]
  // };
  // handleIncrement = (counter) => {
  //   // console.log(counter)
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value++;
  //   console.log(this.state.counters[0]);
  //   this.setState({ counters });
  // };
  // handleReset = () => {
  //   const counters = this.state.counters.map((c) => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counters });
  // };
  // handleDelete = (counterId) => {
  //   const counters = this.state.counters.filter((c) => c.id !== counterId);
  //   // console.log("Event Handle Called", counterId);
  //   this.setState({ counters });
  // };
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button
          // onClick={this.handleReset}
          // onClick={this.props.onReset}
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {/* <Counter />,
        <Counter />,
        <Counter />,
        <Counter /> */}
        {/* {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
          > */}
        {/* {this.state.counters.map((counter) => ( */}
        {/* {this.props.counters.map((counter) => ( */}
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            // onDelete={this.handleDelete}
            // onDelete={this.props.onDelete}
            onDelete={onDelete}
            // onIncrement={this.handleIncrement}
            // onIncrement={this.props.onIncrement}
            onIncrement={onIncrement}
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}
export default Counters;
