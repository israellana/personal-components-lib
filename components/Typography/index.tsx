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
    <div className={classes.default(props.size, props.type, props.weight)}>
        {props.children}
    </div>
  )
}

export default Typography