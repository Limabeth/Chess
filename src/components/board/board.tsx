import { FC } from 'react';
import Cell from '../cell/cell';
import { configAxisX } from '../../config/axisConfig';
import { configAxisY } from '../../config/axisConfig';

const getCellColor = (x: number, y: number) => {
  let color: string | null = null;

  if (x % 2 === 0 && y % 2 === 0) {
    color = 'white';
  } else if (x % 2 !== 0 && y % 2 === 0) {
    color = 'black';
  } else if (x % 2 === 0 && y % 2 !== 0) {
    color = "black"
  } else if (x % 2 !== 0 && y % 2 !== 0) {
    color = "white";
  }

  return color;
};

const Board: FC = () => {
  return (
    <div className='chessboard__board'>
      {configAxisY.map((num, numIndex) => {
        return configAxisX.map((letter, letterIndex) => {
          const key: string = `${letter}${num}`;

          const coords: string = key;
          const color = getCellColor(letterIndex, numIndex);

          return <Cell coords={coords} color={color} key={key} />;
        });
      })}
    </div>
  );
};

export default Board;
