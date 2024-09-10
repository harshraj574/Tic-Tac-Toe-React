
function Square({value,onSquareClick,className}){
     
    return (
     <button className={className} onClick={onSquareClick}>
        {value}
     </button>);
}

export default Square;