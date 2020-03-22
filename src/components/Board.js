import React from 'react';
import Piece from './Piece';
import './Board.css'

class Board extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            pieces: this.createAnArrayWithAllPieces(props.folderWithParts)
        }
    }

    createAnArrayWithAllPieces(folderWithParts) {
        var arrayAllPieces = [];

        for(let i=1; i<=16;i++) {
            arrayAllPieces.push({
                src: require("../assets/img/gamepieces/" + folderWithParts + "/image_part_" + i + ".jpg"),
                number: (i-1),
                className: "piece"
            });
        }

        arrayAllPieces.splice(3, 1);

        var shuffledArray = this.shuffle(arrayAllPieces);

        shuffledArray.push({ 
            src: require('../assets/img/piece.png'),
            number: 15,
            className: "blank"
        });

        return shuffledArray;
    }

    shuffle(array) {
        array.sort(function() {
            return .5 - Math.random();
        });

        return array;
    }

    render() {
        let htmlBoard = [];

        for(let i=0; i < this.state.pieces.length ;i++){
            htmlBoard.push(<Piece id={i} model={ this.state.pieces[i] } />)
        }

        return (
            <div id="board" className="img-thumbnail">
                {htmlBoard}
            </div>
        )
    }
}

export default Board;