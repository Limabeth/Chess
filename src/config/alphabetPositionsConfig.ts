interface alphPosInInterface {
  a: string | number;
  b: string | number;
  c: string | number;
  d: string | number;
  e: string | number;
  f: string | number;
  g: string | number;
  h: string | number;
}

interface alphPosOutInterface {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
}

const alphPosIn: alphPosInInterface = {
  a: '1',
  b: '2',
  c: '3',
  d: '4',
  e: '5',
  f: '6',
  g: '7',
  h: '8',
};

const alphPosOut: alphPosOutInterface = {
  1: 'a',
  2: 'b',
  3: 'c',
  4: 'd',
  5: 'e',
  6: 'f',
  7: 'g',
  8: 'h',
};

export { alphPosIn, alphPosOut };
