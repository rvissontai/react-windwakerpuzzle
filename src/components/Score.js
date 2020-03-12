import React from 'react';
import './Score.css';

class Score extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            score: 0,
            moviments: 0
        }
    }

    calculateScore() {
        this.setState({
            score: this.state.score + 10
        });
    }

    movePiece(keyCode) {
        if(keyCode < 37 || keyCode > 40){
            return;
        }

        if(keyCode == 39){
            this.movePieceTo(1);
        }
        else if(keyCode == 37){
            this.movePieceTo(-1);
        }
        else if(keyCode == 40){
            this.movePieceTo(4);
        }
        else if(keyCode == 38){
            this.movePieceTo(-4);
        }
    } 

    movePieceTo(index){
        var pieces = Array.prototype.slice.call( document.getElementById('board').children );
        var blankPiece = document.getElementsByClassName("blank")[0];

        var indexBlankPiece = pieces.indexOf( blankPiece );
        var indexPieceToBeReplaced = indexBlankPiece + index;

        if(indexPieceToBeReplaced > 15 || indexPieceToBeReplaced < 0){
            return 
        }

        var blankPiece = pieces[indexBlankPiece];
        var htmlBlank = blankPiece.innerHTML;
        var classBlankPiece = blankPiece.className;

        
        var htmlPiece = pieces[indexPieceToBeReplaced].innerHTML;
        var classPiece = pieces[indexPieceToBeReplaced].className;

        document.getElementById(indexPieceToBeReplaced).innerHTML = htmlBlank;
        document.getElementById(indexPieceToBeReplaced).className = classBlankPiece;

        blankPiece.innerHTML = htmlPiece;
        blankPiece.className = classPiece;

        this.increaseMoviments();        
    }

    increaseMoviments() {
        this.setState({
            moviments: this.state.moviments + 1
        });
    }

    render() {
        return (
            <div className="col col-lg-12">
                <label>Score: </label> { this.state.score }<br />
                <label>Moviments: </label> {this.state.moviments }
            </div>
        );
    }
}

export default Score;