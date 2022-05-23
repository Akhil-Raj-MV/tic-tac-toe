import React,{useState} from "react";
import Board from "./components/Board";
import "./styles/root.scss";
import { calculateWinner } from "./helpers";


const App=()=>{
  const [board,setBoard]=useState(Array(9).fill(null));
  const [isXNext,setisXNext]=useState(false);
  const winner =calculateWinner(board);
  const message= (winner)?`winner is ${winner}`:`Next player is ${isXNext?'X':'O'}`;


  const onClickHandler=(position)=>{
    if(board[position] || winner) return;
      setBoard((prev)=>{
        return(
          prev.map((square,pos)=>{
              if(pos===position){
                return (isXNext)?'X':'O';
              }
              else{
                return square;
              }
          })
        )
      })

      setisXNext((prev)=>{
        return !prev;
      })
  }

  return(
  <div className="app">
    <h1>TIC TAC TOE</h1>
    <h2>Message:{message}</h2>
    <Board board={board} onClickHandler={onClickHandler}/>
  </div>
  )
}

export default App;
