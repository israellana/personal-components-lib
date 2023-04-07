import React from 'react'
import classes from './styles'

interface TypographyProps{
  size?: string;
  weight?: string;
  type?: string;
  children: string;
  align?: string;
  color?: string;
}

const elementTypes: { [key: string]: any } = {
  'text': {
    'x-small': 'p',
    'small': 'p',
    'medium': 'p',
    'large': 'p',
    'huge': 'h6'
  },
  'title': {
    'x-small': 'h5',
    'small': 'h4',
    'medium': 'h3',
    'large': 'h2',
    'huge': 'h1'
  }
}

export const Typography: React.FC<TypographyProps> = (props) => {

  const Element = elementTypes[props.type??"text"][props.size??"medium"]

  return (
    <Element {...props} className={classes.default(props)} />
  )
}

Typography.defaultProps = {
  size: 'medium',
  weight: 'normal',
  type: 'text',
  align: 'left',
  color: 'black'
};