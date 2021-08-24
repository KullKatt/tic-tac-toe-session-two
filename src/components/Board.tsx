//TO DO: Display game status
import React from "react"
import Square from "./Square"
import './Board.css'

interface BoardProps {
    squares: string[];
    boardClick: (index: number) => void
}

export default function Board({boardClick, squares}: BoardProps) {

    return (
        <div>
            <p>Board</p>
            <div className="board">
                <div className="row">
                    <Square value={squares[0]} index={0} clickListener={boardClick}/>
                    <Square value={squares[1]} index={1} clickListener={boardClick}/>
                    <Square value={squares[2]} index={2} clickListener={boardClick}/>
                </div>

                <div className="row">
                    <Square value={squares[3]} index={3} clickListener={boardClick}/>
                    <Square value={squares[4]} index={4} clickListener={boardClick}/>
                    <Square value={squares[5]} index={5} clickListener={boardClick}/>
                </div>

                <div className="row">
                    <Square value={squares[6]} index={6} clickListener={boardClick}/>
                    <Square value={squares[7]} index={7} clickListener={boardClick}/>
                    <Square value={squares[8]} index={8} clickListener={boardClick}/>
                </div>
            </div>
        </div>
    )
}