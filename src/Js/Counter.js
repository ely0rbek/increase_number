import React, { Component } from "react";
export default class Counter extends React.Component {
state = {
    count: 0,
    isCouting: false,
};
componentDidMount() {
    let a = localStorage.getItem("time");
    this.setState({ count: a });
}
componentDidUpdate() {
    localStorage.setItem("time", this.state.count);
}
componentWillUnmount() {
    clearInterval(this.timering);
}
handleStart = () => {
    this.setState({ isCouting: true });
    this.timering = setInterval(() => {
    this.setState({ count: ++this.state.count });
    }, 1000);
};
handleReset = () => {
    this.setState({ isCouting: false, count: 0 });
    clearInterval(this.timering);
};
handleStop = () => {
    this.setState({ isCouting: false });
    clearInterval(this.timering);
};
render() {
    return (
    <div className="App">
        <p>React Timer</p>
        <p>{this.state.count}</p>
        {!this.state.isCouting ? (
        <button className="success" onClick={this.handleStart}>
            Start
        </button>
        ) : (
        <button className="danger" onClick={this.handleStop}>
            Stop
        </button>
        )}
        <button className="secondary" onClick={this.handleReset}>
        Reset
        </button>
    </div>
    );
}
}
