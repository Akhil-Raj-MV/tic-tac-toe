import React from 'react'


const StatusMessage=({winner,current})=> {
    const noMovesLeft=current.board.every(element => element !== null)

  return (
    <div>
        <h2>
        {winner &&`winner is ${winner}` }
        {!winner && !noMovesLeft &&`Next player is ${current.isXNext?'X':'O'}`}
        {!winner && noMovesLeft && `Game is a DRAW`}
        </h2>
    </div>
  )
}

export default StatusMessage