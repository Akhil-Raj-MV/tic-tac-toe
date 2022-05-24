import React,{useState} from "react";
import Board from "./components/Board";
import History from "./components/History";
import "./styles/root.scss";
import { calculateWinner } from "./helpers";
import StatusMessage from "./components/StatusMessage";

const NEW_GAME=[{board:Array(9).fill(null),isXNext:true}];

const App=()=>{
  const [history,setHistory]=useState(
    NEW_GAME
    );
  const [currentMove,setCurrentMove]=useState(0);
  const current=history[currentMove];

  
  const {winner,winningCombination} =calculateWinner(current.board);

  const onClickHandler=(position)=>{
    if( current.board[position] || winner) return;
      setHistory((prev)=>{

        const last=prev[prev.length-1];
  
         const newBoard= last.board.map((square,pos)=>{
              if(pos===position){
                return (last.isXNext)?'X':'O';
              }
              else{
                return square;
              }
          })
            return prev.concat([{board:newBoard,isXNext:!last.isXNext}])
      });

      setCurrentMove((prev)=>{
          return(
            prev+1
          )
      });
  }

  const moveTo=(move)=>{
      setCurrentMove(move);
  }

  const onNewGame=()=>{
    return(
        setHistory(
         NEW_GAME
        ),
        setCurrentMove(0)
    )

  }

  return(
  <div className="app">
    <h2>TIC <span className="text-green">TAC</span> TOE</h2>
    <StatusMessage winner={winner} current={current}/>
    <Board board={current.board} onClickHandler={onClickHandler} winningCombination={winningCombination}/>
    <button onClick={onNewGame} className={`btn-reset ${winner?'active':''}`}>NEW GAME</button>
    <h2 style={{fontWeight:'normal'}}>Current Game History</h2>
    <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    <div className="bg-balls"/>
  </div>
  )
}

export default App;
