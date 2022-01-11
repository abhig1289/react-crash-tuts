import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };
  // styles={
  //   fontSize:15,
  //   fontWeight:'bold'
  // }
  render() {
    // let classes = "badge m-2 badge-";
    // classes += this.state.count === 0 ? "warning" : "primary";

    return (
      <React.Fragment>
        {/* <h1>Welcome to the world of PUSPAAA!!!</h1> */}
        {/* <span>{this.state.count}</span> */}
        {/* <img src={this.state.imageUrl} alt=""/> */}
        {/* <span  style={this.styles} className='badge badge-primary m-2'>{this.formatCount()}</span> */}
        {/* <span  style={{fontSize:30}} className='badge badge-primary m-2'>{this.formatCount()}</span> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="badge badge-secondary m-2">Increment</button>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    // return count === 0 ? <h1>Zero</h1> : count;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
