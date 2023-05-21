import React from 'react';
import chessBoardImage from './chess_board.svg';
import './App.css';

function App() {
  return (
    <>
      <nav>
          <div className="container">
              <div className="title"> MINT CHESS </div>
          </div>
      </nav>
        <body>
            <div className="bodyCenter">
                <img className="chessBoard" src={chessBoardImage} alt="chess board SVG" />
            </div>
            <div className="bodyCenter">
                <button className="gameButton"> NEW GAME </button>
            </div>
            <div className="bodyCenter">
                <button className="gameButton"> LOAD GAME </button>
            </div>
        </body>
    </>
  );
}

export default App;
