import React,{Component} from "react";
import RealCount from "./funk_component/RealCount";
import Counter from "./Js/Counter";

export default class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <>
      <RealCount />
      </>
    )
  }
}