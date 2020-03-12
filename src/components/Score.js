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

    increaseMoviments(keyCode) {
        if(keyCode < 37 || keyCode > 40){
            return;
        }

        console.log(keyCode);

        this.setState({
            moviments: this.state.moviments + 1
        });

        this.movePiece(keyCode);
    }

    calculateScore() {
        this.setState({
            score: this.state.score + 10
        });
    }

    movePiece(keyCode) {
        var pieces = Array.prototype.slice.call( document.getElementById('board').children ),
            blankPiece = document.getElementsByClassName("blank")[0];

        var indexBlankPiece = pieces.indexOf( blankPiece );
        var blankPiece = pieces[indexBlankPiece];
        var htmlBlank = blankPiece.innerHTML;
        var classBlankPiece = blankPiece.className;

        if(keyCode == 39){
            var indexPieceToBeReplaced = indexBlankPiece+1;
            var htmlPiece = pieces[indexPieceToBeReplaced].innerHTML;
            var classPiece = pieces[indexPieceToBeReplaced].className;

            document.getElementById(indexPieceToBeReplaced).innerHTML = htmlBlank;
            document.getElementById(indexPieceToBeReplaced).className = classBlankPiece;

            blankPiece.innerHTML = htmlPiece;
            blankPiece.className = classPiece;
        }
        else if(keyCode == 37){
            var indexPieceToBeReplaced = indexBlankPiece-1;
            var htmlPiece = pieces[indexPieceToBeReplaced].innerHTML;
            var classPiece = pieces[indexPieceToBeReplaced].className;

            document.getElementById(indexPieceToBeReplaced).innerHTML = htmlBlank;
            document.getElementById(indexPieceToBeReplaced).className = classBlankPiece;

            blankPiece.innerHTML = htmlPiece;
            blankPiece.className = classPiece;
        }
        else if(keyCode == 40){
            var indexPieceToBeReplaced = indexBlankPiece+4;
            var htmlPiece = pieces[indexPieceToBeReplaced].innerHTML;
            var classPiece = pieces[indexPieceToBeReplaced].className;

            document.getElementById(indexPieceToBeReplaced).innerHTML = htmlBlank;
            document.getElementById(indexPieceToBeReplaced).className = classBlankPiece;

            blankPiece.innerHTML = htmlPiece;
            blankPiece.className = classPiece;

            
        }
        else if(keyCode == 38){
            var indexPieceToBeReplaced = indexBlankPiece-4;
            var htmlPiece = pieces[indexPieceToBeReplaced].innerHTML;
            var classPiece = pieces[indexPieceToBeReplaced].className;

            document.getElementById(indexPieceToBeReplaced).innerHTML = htmlBlank;
            document.getElementById(indexPieceToBeReplaced).className = classBlankPiece;

            blankPiece.innerHTML = htmlPiece;
            blankPiece.className = classPiece;
        }
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