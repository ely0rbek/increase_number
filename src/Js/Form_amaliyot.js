import React, { Component } from "react";
export default class Form_amaliyot extends React.Component {
state = {
    email: "",
    checkbox:false,
};
changeHolder = (e) => {
    this.setState({ [e.target.name]: e.target.value });
};
checkedHendler=(e)=>{
    this.setState({ [e.target.name]: e.target.checked });
}
sendForm=()=>{
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!re.test(this.state.email)){
        alert("Emailni xato kiriting")
        return 
    }
    else if(!this.state.checkbox){
        alert("sen tugmachani bosmading")
        return 
    }
    else {
        alert("Rahmat togri malumot uchun")
        this.setState({email:''})
        this.setState({checkbox:false})
    }
}
render() {
    const { firstName, email,message, select,checkbox,gender} = this.state;
    return (
    <div className="App">
        <h1>Form</h1>
        <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={this.changeHolder}
        />
        <label>
            <input type="checkbox" name="checkbox" checked={checkbox} onChange={this.checkedHendler}/>
            Kuzatuv
        </label>
        <button className="success" onClick={this.sendForm}>Send</button>
    </div>
    );
}
}
