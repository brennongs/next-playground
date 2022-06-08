export default interface Calculator {
  add: (n: number) => void;
  subtract: (n: number) => void;
  multiply: (n: number) => void;
  divide: (n: number) => void;
  undo: () => void;
  reset: () => void;
}