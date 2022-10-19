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
      <input placeholder=" " className={classes.default()} />
      <label className={classes.label()}>Teste</label>
    </div>
  )
}

export default Input