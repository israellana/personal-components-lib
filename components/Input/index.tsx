import React from 'react'
import classes from './styles'

interface InputProps{
    size?: string;
    weight?: string;
    type?: string;
    children: string;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className={classes.container()}>
      <label className={classes.label()}>Teste</label>
      <input placeholder='' className={classes.default()} />
    </div>
  )
}

export default Input