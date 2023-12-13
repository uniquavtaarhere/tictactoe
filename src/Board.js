import Buttons from './Buttons';
import {useState} from 'react';
import './Board.css';


function Board(){
      
    const [squares , setSquares] = useState(Array(9).fill(null));
    const [xIsNext , setXIsNext ]  = useState(true);
    const [buttonValue , setbuttonValue] = useState("Enable Dark Mode");

    const [style, setStyle] = useState({backgroundColor: 'rgb(63, 15, 107)'});
    function toggleStyle(){
      if(style.backgroundColor ==='rgb(63, 15, 107)' ){
            setStyle({backgroundColor: 'black'})
           
            setbuttonValue("Enable Light Mode");

      }
      else {
            setStyle({backgroundColor: 'rgb(63, 15, 107)'});
            setbuttonValue("Enable Dark Mode");
            
      }
                

      
    }
        
    
    function handleClick(i){
      if(calculateWinner(squares) || squares[i]){
            return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
            nextSquares[i] ='X';
      }
      else{
            nextSquares[i]='O';
      }
     
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    }

    
    const winner = calculateWinner(squares);
    let status;
    if (winner){
      status = 'Winner :' + winner;
    }else{
      status ='Next player: ' + (xIsNext ? 'X' : 'O'); 
}
function handleReset(){
      setSquares(Array(9).fill(null));

}


    

    


    return <>  
                  <div className="navbar" style={style}> <h3>TIC -TAE -TOE</h3>
                  <h4>Created by ASHISH MISHRA</h4>
                  <button onClick={toggleStyle} className="togglebutton">{buttonValue} </button>
                  <h6>More updates are on the way ...Stay tuned.</h6>
                      </div>
                  <div className="status" style={style} >{status}</div>
                  <div className="board-container" style={style}><div className="">
                        <Buttons  value={squares[0]} onSquareClick={() => handleClick(0)}/>
                        <Buttons value={squares[1]} onSquareClick = {() => handleClick(1)}/>
                        <Buttons value={squares[2]} onSquareClick = {() => handleClick(2)}/>
                  </div> 
                   <div className="">
                        <Buttons value={squares[3]} onSquareClick = {() => handleClick(3)} />
                        <Buttons value={squares[4]}  onSquareClick = {() => handleClick(4)}/>
                        <Buttons  value={squares[5]} onSquareClick = {() => handleClick(5)}/>
                  </div>
                  <div className="">
                       <Buttons value={squares[6]}  onSquareClick = {() => handleClick(6)}/>
                       <Buttons  value={squares[7]} onSquareClick = {() => handleClick(7)}/>
                       <Buttons value={squares[8]}  onSquareClick = {() => handleClick(8)}/>
                 </div></div>
                 <div className="buttons" style={style}> <button onClick = {handleReset}>Play Again </button></div>
                 <div className="footer" style={style}> <footer>copyright@Ashishmishra</footer></div>
                  
    
    
    
    
           </>


}



function calculateWinner(squares){
      const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
      ];
      for (let i=0; i<lines.length ; i++){
            const [a,b,c]= lines[i];
      if (squares[a] && squares[a] === squares[b]&& squares[a]===squares[c]){
            return squares[a];
      }

      } }

export default Board;

