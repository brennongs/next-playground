import React from 'react'

export enum Operator {
  ADD = 'add',
  SUBTRACT = 'subtract',
  MULTIPLY = 'multiply',
  DIVIDE = 'divide',
  RESET = 'reset'
}

interface ControlsProps {
  onDisplayChange: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
  onOperatorChange: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
}

export const Controls: React.FC<ControlsProps> = ({
  onDisplayChange: handleDisplayChange,
  onOperatorChange: handleOperatorChange
}) => {
  return (
    <section id="controls">
      <Button
        value={Operator.RESET}
        display='C'
        onClick={handleOperatorChange}
      />
      <div id="placeholder" />
      <Button
        value={Operator.DIVIDE}
        display="\u000f7"
        onClick={handleOperatorChange}
      />
      <Button
        value={7}
        onClick={handleDisplayChange}
      />
      <Button
        value={8}
        onClick={handleDisplayChange}
      />
      <Button
        value={9}
        onClick={handleDisplayChange}
      />
      <Button
        value={Operator.MULTIPLY}
        display='x'
        onClick={handleOperatorChange}
      />
      <Button
        value={4}
        onClick={handleDisplayChange}
      />
      <Button
        value={5}
        onClick={handleDisplayChange}
      />
      <Button
        value={6}
        onClick={handleDisplayChange}
      />
      <Button
        value={Operator.SUBTRACT}
        display='-'
        onClick={handleOperatorChange}
      />
      <Button
        value={1}
        onClick={handleDisplayChange}
      />
      <Button
        value={2}
        onClick={handleDisplayChange}
      />
      <Button
        value={3}
        onClick={handleDisplayChange}
      />
      <Button
        value={Operator.ADD}
        display='+'
        onClick={handleOperatorChange}
      />
      <Button
        value={0}
        onClick={handleDisplayChange}
      />
      <Button
        value="."
        onClick={handleDisplayChange}
      />
      <Button
        value="equal"
        display='='
        onClick={handleOperatorChange}
      />
    </section>
  )

}

interface ButtonProps {
  value: number | Operator | string
  display?: string
  onClick: React.EventHandler<React.MouseEvent<HTMLButtonElement>>
}

const Button: React.FC<ButtonProps> = ({
  value,
  display,
  onClick: handleClick
}) => (
  <button
    id={value.toString()}
    value={value}
    onClick={handleClick}
  >
    {display || value}
  </button>
)