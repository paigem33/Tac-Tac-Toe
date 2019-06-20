import React, { Component } from 'react';
import './App.css';
import Squares from './Squares'

export default class Board extends Component {
  constructor(props){
    super(props)
    this.state = {
      turn: 0,
      arr: [],
      player: 'X'
    }
  }
  
  generate = () => {
    let { turn } =  this.state
    turn = 0
    let num = 9
    // let { arr } = this.state
    let arr = []
    for(let i=0;i<num;i++){
      arr.push('')
    }
    this.setState({arr, turn})
  }
  
  grabIndex=(a,b,c)=>{
    let{arr}=this.state
    let val1 = arr[a]
    let val2 = arr[b]
    let val3 = arr[c]
    return `${val1}${val2}${val3}`
  }
  
  winLose =()=>{
    let { arr, turn} = this.state
    let{grabIndex,generate}=this
    if(grabIndex(0,1,2)==="XXX"||grabIndex(0,1,2)==="OOO"){
      setTimeout(function(){
        alert(`${arr[0]}s WIN`)
        generate()
    }, 100);
    }else if(grabIndex(3,4,5)==="XXX"||grabIndex(3,4,5)==="OOO"){
      setTimeout(function(){
        alert(`${arr[3]}s WIN`)
        generate()
    }, 100);
    }else if(grabIndex(6,7,8)==="XXX"||grabIndex(6,7,8)==="OOO"){
      setTimeout(function(){
        alert(`${arr[6]}s WIN`)
        generate()
    }, 100);
    }else if(grabIndex(0,3,6)==="XXX"||grabIndex(0,3,6)==="OOO"){
      setTimeout(function(){
        alert(`${arr[0]}s WIN`)
        generate()
    }, 100);
    }else if(grabIndex(1,4,7)==="XXX"||grabIndex(1,4,7)==="OOO"){
      setTimeout(function(){
        alert(`${arr[1]}s WIN`)
        generate()
    }, 100);
    }else if(grabIndex(2,5,8)==="XXX"||grabIndex(2,5,8)==="OOO"){
      setTimeout(function(){
        alert(`${arr[2]}s WIN`)
        generate()
    }, 100);
    }else if(grabIndex(0,4,8)==="XXX"||grabIndex(0,4,8)==="OOO"){
      setTimeout(function(){
        alert(`${arr[0]}s WIN`)
        generate()
    }, 100);
    }else if(grabIndex(2,4,6)==="XXX"||grabIndex(2,4,6)==="OOO"){
      setTimeout(function(){
        alert(`${arr[2]}s WIN`)
        generate()
    }, 100);
    }else if(turn === 8){
      setTimeout(function(){
        alert(`Draw`)
        generate()
    }, 100);
    }
  }
  
  ticTacMark = (e) => {

    let { turn, arr } = this.state
    let id = e.target.id
    if(arr[id]===""){
      if(turn%2 === 0){
        arr[id] = 'X'
        turn = turn +1
        this.setState({turn, arr})
        this.winLose()
      } else if( turn%2 !== 0){
          arr[id] = 'O'
          turn = turn +1
          this.setState({turn, arr})
          this.winLose()
        }
    }
    this.activePlayer()
  }
  
  activePlayer = () => {
    let { player,turn } = this.state
    if(turn % 2 === 0){
      player = 'O'
      this.setState({player}) 
    } else if (turn % 2 !== 0){
      player = 'X'
      this.setState({player})
    }
  }
  
  componentWillMount(){
    this.generate();
  }
  
  render() {
    const { arr } = this.state;
    return (
      <div>
      <h2>Player: {this.state.player}</h2>
      <div className="board">
      
       {arr.map((value, index) => {
          return (<Squares ticTacMark={this.ticTacMark} arr={this.state.arr} id={index}/>);
        })
        }
        <button onClick={this.generate}>Restart</button>
     </div>
     </div>
    );
  }
}

