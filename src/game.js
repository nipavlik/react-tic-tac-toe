import React, { Component } from "react";
import Board from "./board";
import colculateWinner from "./helpers/calculateWinner";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      xIsNext: true,
      stepNumber: 0,
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
    };
  }

  handleClick(i) {
    const { xIsNext, history } = this.state;
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (colculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";

    this.setState({
      xIsNext: !xIsNext,
      history: history.concat([{ squares }]),
      stepNumber: ++this.state.stepNumber,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 ? false : true,
    });
  }

  render() {
    const { xIsNext, stepNumber, history } = this.state;
    const current = history[stepNumber];
    const winner = colculateWinner(current.squares);
    let status;
    if (winner) {
      status = "Выиграл: " + winner;
    } else {
      status = "Ход игрока: " + (xIsNext ? "X" : "0 ");
    }

    return (
      <div className="game">
        <div className="game-info">{status}</div>
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
      </div>
    );
  }
}

export default Game;
