import React from 'react'

import { Calculator } from '~/lib/use-cases/calculator'

import { Controls, Operator } from '$/components/pages/calculator'


const CALCULATOR = new Calculator() // Observable

const Main: React.FC = () => {
  const [displayValue, setDisplayValue] = React.useState(0)
  const [result, setResult] = React.useState(0)
  const [operatorSelected, setOperatorSelected] = React.useState(false)
  const [currentOperator, setCurrentOperator] = React.useState<Operator>()
  
  React.useEffect(() => {
    CALCULATOR.subscribe(({ value, history }) => {
      console.log(value, history)
      setDisplayValue(value)
      setResult(value)
    })
  }, [])

  return (
    <main>
      <input
        id="display"
        readOnly
        value={displayValue}
      />

      <Controls
        onDisplayChange={handleNumberClick}
        onOperatorChange={handleOperatorClick}
      />

    </main>
  )

  function handleNumberClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    const { value } = event.currentTarget

    if (result === 0) {
      CALCULATOR.add(Number(value)) // updates display value
      return
    }

    if (operatorSelected || displayValue === 0) {
      setDisplayValue(Number(value))
      setOperatorSelected(false)
      return;
    }

    setDisplayValue(Number(`${displayValue}${event.currentTarget.value}`))
  }

  function handleOperatorClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    const operator = event.currentTarget.value

    setOperatorSelected(true)

    if (operator === Operator.RESET) {
      CALCULATOR.reset()
      setCurrentOperator(undefined)
      return
    }

    if (currentOperator) {
      CALCULATOR[currentOperator](displayValue)
      setCurrentOperator(undefined)
    }

    if (operator !== 'equal') {
      setCurrentOperator(operator as Operator)
    }
  }
}

export default Main