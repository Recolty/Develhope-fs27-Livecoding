import { useState } from "react";

export function Tris() {
  const [matrix, setMatrix] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [symbol, setSymbol] = useState(1);
  function handleClick(row, col) {
    if (matrix[row][col] == 0) {
      matrix[row][col] = symbol;
      for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].find((s) => s != symbol) === undefined) {
          alert(
            `il simbolo che ha vinto è ${
              symbol == 1 ? "croce" : symbol == 2 ? "cerchio" : ""
            }`
          );
          setMatrix([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ]);
          setSymbol(1);
          return;
        }
      }

      for (let i = 0; i < matrix.length; i++) {
        const colonna = [];
        for (let j = 0; j < matrix.length; j++) {
          colonna.push(matrix[j][i]);
        }
        if (colonna.find((s) => s != symbol) === undefined) {
          alert(
            `il simbolo che ha vinto è ${
              symbol == 1 ? "croce" : symbol == 2 ? "cerchio" : ""
            }`
          );
          setMatrix([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ]);
          setSymbol(1);
          return;
        }
      }

      const diagonal1 = [];
      const diagonal2 = [];

      for (let i = 0; i < matrix.length; i++) {
        diagonal1.push(matrix[i][i]);
        diagonal2.push(matrix[i][matrix.length - 1 - i]);
      }
      if (
        diagonal1.find((s) => s != symbol) === undefined ||
        diagonal2.find((s) => s != symbol) === undefined
      ) {
        alert(
          `il simbolo che ha vinto è ${
            symbol == 1 ? "croce" : symbol == 2 ? "cerchio" : ""
          }`
        );
        setMatrix([
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ]);
        setSymbol(1);
        return;
      }
      let pareggio = true;
      
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[j][i] === 0) {
            pareggio = false
            break
          }
        }
      } if(pareggio){
        alert(
          `pareggio`
        );
        setMatrix([
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ]);
        setSymbol(1);
        return;
      }

      setMatrix(() => {
        const newMatrix = [...matrix];
        newMatrix[row][col] = symbol;
        return newMatrix;
      });
      setSymbol(symbol === 1 ? 2 : 1);
    }
  }

  return (
    <div className="game">
      <div className="game-container">
        {matrix.map((row, riga) =>
          row.map((col, colonna) => {
            return (
              <div
                className="check"
                key={colonna}
                onClick={() => {
                  handleClick(riga, colonna);
                }}
              >
                {" "}
                <div
                  className={`${
                    col === 1 ? "line" : col === 2 ? "circle" : ""
                  }`}
                ></div>{" "}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
