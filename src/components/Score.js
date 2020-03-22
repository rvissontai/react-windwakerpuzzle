import React from 'react';
import './Score.css';

const piecesPerLine = 4;
const keyCodeLeft = 37;
const keyCodeUp = 38;
const keyCodeRight = 39;
const keyCodeDown = 40;
const cornersRigth = [3,7,11,15];
const cornersLeft = [0,4,8,12];

class Score extends React.Component {
    constructor(props) {
        super(props);

        this.calculateCornerPieces();

        this.state = {
            score: 0,
            moviments: 0
        }
    }

    calculateCornerPieces() {
        //TODO - Dynamically the cornes based on rows and lines
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

        this.setState({
            lastestPressedKeyCode: keyCode
        });

        if(keyCode == keyCodeRight){
            this.movePieceTo(1);
        }
        else if(keyCode == keyCodeLeft){
            this.movePieceTo(-1);
        }
        else if(keyCode == keyCodeDown){
            this.movePieceTo(4);
        }
        else if(keyCode == keyCodeUp){
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

        if(this.state.lastestPressedKeyCode == keyCodeLeft && cornersLeft.indexOf(indexBlankPiece) > -1) {
            return;
        }

        if(this.state.lastestPressedKeyCode == keyCodeRight && cornersRigth.indexOf(indexBlankPiece) > -1) {
            return;
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

        this.checkForWin();
    }

    checkForWin() {
        var allPieces = document.querySelectorAll(".piece");
        var wins = true;
        
        for(let i = 0; i < allPieces.length; i++) {
            var pieceId = allPieces[i].id;
            var img = allPieces[i].getElementsByTagName('img')[0];
            var imgId = img.dataset.piece;

            if(pieceId != imgId) {
                wins = false;
                break;
            }
        }

        alert("CONGRATULATOIONS! You win!");
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