



import './Buttons.css';


function Buttons({value, onSquareClick}){
    

   
    

    return (
        <> 
          <button className="button" onClick={onSquareClick}>{value}</button>
        </>);
}
export default Buttons;