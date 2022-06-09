import React from 'react'

import { Calculator } from '~/lib/use-cases/calculator';

type Result = {
  calculator: Calculator
  value: number | undefined
  history: number[] | undefined
}

export function useCalculator(): Result {
  const [value, setValue] = React.useState<number>()
  const [history, setHistory] = React.useState<number[]>()
  const calculator = new Calculator()

  React.useEffect(() => {
    if ([value, history].includes(undefined)) {
      const observer = calculator.subscribe(({ value, history }) => {
        console.log(value, history)
        setValue(value)
        setHistory(history)
      })

    }
  }, [])


  return { calculator, value, history }
}