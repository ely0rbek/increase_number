import React, { Component } from "react";
export default class Form_ref extends React.Component {
constructor(props) {
    super();
    this.state = {
    card: "",
    cv: "",
    name: "",
    };
    this.cardRef = React.createRef();
    this.cvRef = React.createRef();
    this.nameRef = React.createRef();
}
changeHolder = (e) => {
    this.setState({ [e.target.name]: e.target.value },()=>{
        if(this.state.card.length===16){
            this.cvRef.current.focus()
        }
        if(this.state.cv.length===3){
            this.nameRef.current.focus()
        }
    });
};
componentDidMount(){
    this.cardRef.current.focus()
}

render() {
    const { card, cv, name } = this.state;
    return (
    <div className="App">
        <h1>Form</h1>
        <input
        type="text"
        name="card"
        placeholder="Card number..."
        value={card}
        onChange={this.changeHolder}
        ref={this.cardRef}
        />
        <input
        type="text"
        name="cv"
        placeholder="Cv number... "
        value={cv}
        onChange={this.changeHolder}
        ref={this.cvRef}
        />
        <input
        type="text"
        name="name"
        value={name}
        placeholder="Name..."
        onChange={this.changeHolder}
        ref={this.nameRef}
        />
    </div>
    );
}
}
