import React from 'react'
import { Typography } from '../Typography'
import classes from './styles'

interface InputProps{
  scale?: string;
  full?: boolean;
  hint: string;
  label?: string;
}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <div className={classes.container()}>
      <input {...props} placeholder=" " className={classes.default(props)} />
      <label className={classes.label(props)}>{props.label}</label>
      {props.hint && <div className={classes.hint()}>
        <Typography type='text' size='x-small'>{props.hint}</Typography>
      </div>}
    </div>
  )
}