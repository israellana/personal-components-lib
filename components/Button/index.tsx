import React from 'react'
import classes from './styles'

interface ButtonProps{
    size?: string;
    label?: string;
 }

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className={classes.default}>Teste</button>
  )
}

export default Button