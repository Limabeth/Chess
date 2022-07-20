import { CellColorType } from "../../types/chess/CellColorType";

const getCellColor = (x: number, y: number) => {
  let color: CellColorType = 'light';

  if (x % 2 === 0 && y % 2 === 0) {
    color = 'light';
  } else if (x % 2 !== 0 && y % 2 === 0) {
    color = 'dark';
  } else if (x % 2 === 0 && y % 2 !== 0) {
    color = 'dark';
  } else if (x % 2 !== 0 && y % 2 !== 0) {
    color = 'light';
  }

  return color;
};

export { getCellColor };
