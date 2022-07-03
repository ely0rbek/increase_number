import React, { Component } from "react";
export default class Form extends React.Component {
state = {
    firstName: "",
    email: "",
    message:'',
    select:'',
    checkbox:false,
    gender:''
};
changeHolder = (e) => {
    this.setState({ [e.target.name]: e.target.value });
};
checkedHendler=(e)=>{
    this.setState({ [e.target.name]: e.target.checked });
}
validationName = () => {
    if (this.state.firstName.length < 5) {
    alert("Ismingiz 5 harfdan oshmadi. Iltimos ismingizni qayta kiriting!");
    }
};
regexName=()=>{
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!re.test(this.state.email)){
        alert("Email error")
    }
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
        placeholder="FirstName"
        name="firstName"
        value={firstName}
        onChange={this.changeHolder}
        onBlur={this.validationName}
        />
        <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={this.changeHolder}
        />
        <textarea name="message" value={message} onChange={this.changeHolder}></textarea>
        <select name="select" value={select} onChange={this.changeHolder}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <label>
            <input type="checkbox" name="checkbox" checked={checkbox} onChange={this.checkedHendler}/>
            Kuzatuv
        </label><br></br>
        <input type="radio" name="gender" value="male" onChange={this.changeHolder}/> Male
        <input type="radio" name="gender" value="female" onChange={this.changeHolder}/> Female
        <button className="success" onClick={this.sendForm}>Send</button>
    </div>
    );
}
}
