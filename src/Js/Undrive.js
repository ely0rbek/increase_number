import React, { Component } from "react";
export default class Undrive extends React.Component {
constructor(props) {
    super();
    this.state={
        card:''
    }
    this.cardRef = React.createRef();
    this.cvRef = React.createRef();
    this.nameRef = React.createRef();
}
handleClick=(e)=>{
    e.preventDefault();
    if(this.cardRef.current.value.length <16){
        alert("Xato kiritdingiz")
        this.cardRef.current.focus();
        return
    }
    this.setState({card:this.cardRef.current.value})
}


render() {
    return (
        <div className="App">
        <h1>Form</h1>
        <form onSubmit={this.handleClick}>
            <input
                type="text"
                name="card"
                placeholder="Card number..."
                ref={this.cardRef}
            />
            <input
                type="text"
                name="cv"
                placeholder="Cv number... "
                ref={this.cvRef}
            />
            <input
                type="text"
                name="name"
                placeholder="Name..."
                ref={this.nameRef}
            />
            <button className="danger">Send</button>
        </form>
        <h1>{this.state.card}</h1>
        </div>
    );
}
}
