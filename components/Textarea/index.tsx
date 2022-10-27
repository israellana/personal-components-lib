import React from 'react'
import Typography from '../Typography'
import classes from './styles'

interface TextareaProps{
  scale?: string;
  full?: boolean;
  hint: string;
  label?: string;
}

const Textarea: React.FC<TextareaProps> = (props) => {
  return (
    <div className={classes.container()}>
      <textarea {...props} placeholder=" " className={classes.default(props)} />
      <label className={classes.label(props)}>{props.label}</label>
      {props.hint && <div className={classes.hint()}>
        <Typography type='text' size='x-small'>{props.hint}</Typography>
      </div>}
    </div>
  )
}

export default Textarea