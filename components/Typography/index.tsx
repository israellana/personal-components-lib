import React from 'react'
import classes from './styles'

interface TypographyProps{
    size?: string;
    weight?: string;
    type?: string;
    children: string;
    align?: string;
}

const Typography: React.FC<TypographyProps> = (props) => {
  return (
    <div {...props} className={classes.default(props)} />
  )
}

export default Typography