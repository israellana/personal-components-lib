import React from 'react'
import classes from './styles'

interface TypographyProps{
    size?: string;
    weight?: string;
    type?: string;
    children: string;
}

const Typography: React.FC<TypographyProps> = (props) => {
  return (
    <div {...props} className={classes.default(props.size, props.type, props.weight)} />
  )
}

export default Typography