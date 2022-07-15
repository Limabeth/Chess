const getCellColor = (x: number, y: number) => {
  let color: string = '';

  if (x % 2 === 0 && y % 2 === 0) {
    color = 'white';
  } else if (x % 2 !== 0 && y % 2 === 0) {
    color = 'black';
  } else if (x % 2 === 0 && y % 2 !== 0) {
    color = 'black';
  } else if (x % 2 !== 0 && y % 2 !== 0) {
    color = 'white';
  }

  return color;
};

export { getCellColor };
