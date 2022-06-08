import { Calculator } from '.';

describe('Calculator', () => {
  it('runs', () => {
    expect(new Calculator()).toBeTruthy()
  })

  it('works', () => {
    expect.assertions(8)

    const calculator = new Calculator()
    const expectedValues = [
      { value: 0, history: [] },
      { value: 12, history: [0] },
      { value: 10, history: [0, 12] },
      { value: 20, history: [0, 12, 10] },
      { value: 5, history: [0, 12, 10, 20] },
      { value: 20, history: [0, 12, 10] },
      { value: 4, history: [0, 12, 10, 20] },
      { value: 0, history: [] }
    ]

    const display = calculator.subscribe((state) => {
      expect(state).toEqual(expectedValues.shift())
    })

    calculator.add(12)
    calculator.subtract(2)
    calculator.multiply(2)
    calculator.divide(4)
    calculator.undo()
    calculator.divide(5)
    calculator.reset()
  })

  it('can support multiple displays for some reason', () => {
    expect.assertions(11)

    const calculator = new Calculator()
    const primaryExpectedValues = [
      { value: 0, history: [] },
      { value: 12, history: [0] },
      { value: 10, history: [0, 12] },
      { value: 20, history: [0, 12, 10] },
      { value: 5, history: [0, 12, 10, 20] },
    ]
    const secondaryExpectedValues = [
      { value: 10, history: [0, 12] },
      { value: 20, history: [0, 12, 10] },
      { value: 5, history: [0, 12, 10, 20] },
      { value: 20, history: [0, 12, 10] },
      { value: 4, history: [0, 12, 10, 20] },
      { value: 0, history: [] }
    ]

    const primaryDisplay = calculator.subscribe((state) => {
      expect(state).toEqual(primaryExpectedValues.shift())
    })

    calculator.add(12)
    calculator.subtract(2)

    const secondaryDisplay = calculator.subscribe((state) => {
      expect(state).toEqual(secondaryExpectedValues.shift())
    })

    calculator.multiply(2)
    calculator.divide(4)
    
    primaryDisplay.unsubscribe()

    calculator.undo()
    calculator.divide(5)
    calculator.reset()
  })
})