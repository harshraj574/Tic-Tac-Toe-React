import { useState } from 'react';
import './App.css'
import Square from './components/Square';
import Button from './components/Button';


export default function Board(){

       const [xIsNext,setXIsNext]  = useState(true);   
       const [squares,setSquares] = useState(Array(9).fill(null));

       function handleClick(i){
        if(squares[i] || calculateWinner(squares)){
          return;
        }
        const nextSquares = squares.slice();
        if(xIsNext){
          nextSquares[i] = "X";
          // nextSquares[i].className = ""
        }
        else{
          nextSquares[i] = "O";
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
       }

       function handleClickBtn(){
        setSquares(Array(9).fill(null));
       }

      const winner = calculateWinner(squares);
      let status;
      if (winner) {
         status = 'Winner: ' + winner;
       } 
       else {
         status = 'Next Player : ' + (xIsNext ? 'X' : 'O');
       }
  
   return(
  <>

  <div className='top-div'>

    <div className='container-div'>
    <h1 className={`mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl`}><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Tic Tac</span>Toe</h1>
    <div className={`status header ${xIsNext ? 'xStatus' : 'yClass'}`}>{status}</div>
    <div className="board-row">
     <Square value={squares[0]} onSquareClick={() => handleClick(0) } className={`${xIsNext ? 'square' : 'oSquare'}`} />
     <Square value={squares[1]} onSquareClick={() => handleClick(1) } className={xIsNext ? 'square' : 'oSquare'} />
     <Square value={squares[2]} onSquareClick={() => handleClick(2) } className={xIsNext ? 'square' : 'oSquare'} />
    </div>

    <div className="board-row">
    <Square value={squares[3]} onSquareClick={() => handleClick(3) } className={xIsNext ? 'square' : 'oSquare'} />
    <Square value={squares[4]} onSquareClick={() => handleClick(4) } className={xIsNext ? 'square' : 'oSquare'} />
    <Square value={squares[5]} onSquareClick={() => handleClick(5) } className={xIsNext ? 'square' : 'oSquare'} />
    </div>

    <div className="board-row">
    <Square value={squares[6]} onSquareClick={() => handleClick(6) } className={xIsNext ? 'square' : 'oSquare'} />
    <Square value={squares[7]} onSquareClick={() => handleClick(7) } className={xIsNext ? 'square' : 'oSquare'} />
    <Square value={squares[8]} onSquareClick={() => handleClick(8) } className={xIsNext ? 'square' : 'oSquare'} />
    </div>

    </div>
  </div>

  <Button onClickHandler={handleClickBtn} />

  </>
    
  ) 
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}