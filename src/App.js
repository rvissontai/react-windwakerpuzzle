import React from 'react';
import './App.css';
import Board from './components/Board';
import Score from './components/Score';

const keyUp = (event) => function(event) {
  console.log(event.keyCode);
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      keyUp: this.handleKeyUp,
      lastKeyCodePressed: 0
    }

    document.body.onkeydown = this.handleKeyUp.bind(this);
  }

  handleKeyUp(event) {
    this.setState({
      lastKeyPressed: event.keyCode
    });

    this.score.increaseMoviments(event.keyCode); 
  }

  render() {
    return (
      <form className="App">
        <header className="App-header">
          <div className="container">
  
            <div className="row justify-content-md-center">
                <p>Utilize as setas para mover as peças</p>
            </div>
  
            <div className="row justify-content-md-center">
              <div className="col col-lg-6">
                <Board folderWithParts="zelda" />
              </div>
              <div className="col col-lg-6">
                <img src="zelda.png" className="img-thumbnail" />
              </div>
  
              <Score ref={(cd) => this.score = cd} />
            </div>
          </div>
        </header>
      </form>
    );
  }
}

export default App;
