import { Observable } from '~/adapters/observable';

import Contract from './.d';

interface State {
  history: number[];
  value: number;
}

const initialState = {
  value: 0,
  history: []
}

export class Calculator
extends Observable<State>
implements Contract {
  constructor(state = initialState) {
    super(state)
  }

  add(n: number): void {
    this.emit(({ history, value }) => ({
      history: [...history, value],
      value: value + n
    }))
  }

  subtract(n: number): void {
    this.emit(({ history, value }) => ({
      history: [...history, value],
      value: value - n
    }))
  }

  multiply(n: number): void {
    this.emit(({ history, value }) => ({
      history: [...history, value],
      value: value * n
    }))
  }

  divide(n: number): void {
    this.emit(({ history, value }) => ({
      history: [...history, value],
      value: value / n
    }))
  }

  undo(): void {
    this.emit(({ history }) => ({
      history: history.slice(0, -1),
      value: history.slice(-1).pop() || 0
    }))
  }

  reset(): void {
    this.emit((_) => initialState)
  }
}