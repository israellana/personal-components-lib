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
    <>
        <label className={classes.label()}>Teste</label>
        <input className={classes.default()} />
    </>
  )
}

export default Input