//TO DO: x, o & empty, clicks or actions 
import './Square.css'

interface SquareProps {
    value: string,
    index: number,
    clickListener: (index: number) => void
}

export default function Square({value, index, clickListener}: SquareProps) {

    function handleClick(){
        clickListener(index);

    }
    return (
        <div>
            <button className="square" onClick={handleClick}>
            { value }
            </button>
        </div>
    );
}