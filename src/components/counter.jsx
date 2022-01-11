import React, { Component } from "react";

class Counter extends Component {
  state = {
    // count: this.props.value
    value: this.props.value
    // imageUrl: "https://picsum.photos/200"
    // tags: ["tag1", "tag2", "tag3"]
  };
  // constructor() {
  //   super();
  //   // console.log("Constructor", this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // styles={
  //   fontSize:15,
  //   fontWeight:'bold'
  // }
  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no Tags!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  handleIncrement = () => {
    // console.log("Increment clicked", this);
    // console.log(product);
    this.setState({ value: this.state.value + 1 });
  };
  // handleIncrement(){
  //   console.log("Increment clicked", this);
  // }
  // doHandleIncrement=()=>{
  //   this.handleIncrement({id:1})
  // }
  render() {
    // console.log("props", this.props);
    // let classes = "badge m-2 badge-";
    // classes += this.state.count === 0 ? "warning" : "primary";

    return (
      <div>
        {/* {this.state.tags.length === 0 && "Please create new tag"}
        {this.renderTags()} */}
        {/* <h1>Welcome to the world of PUSPAAA!!!</h1> */}
        {/* <span>{this.state.count}</span> */}
        {/* <img src={this.state.imageUrl} alt=""/> */}
        {/* <span  style={this.styles} className='badge badge-primary m-2'>{this.formatCount()}</span> */}
        {/* <span  style={{fontSize:30}} className='badge badge-primary m-2'>{this.formatCount()}</span> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          // onClick={this.doHandleIncrement}
          // onClick={() => this.handleIncrement({ id: 1 })}
          className="badge badge-secondary m-2"
        >
          Increment
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    // return count === 0 ? <h1>Zero</h1> : count;
    return value === 0 ? "Zero" : value;
  }
}
export default Counter;

// changed count to value for passing data to components
