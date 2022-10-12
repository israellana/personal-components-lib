import React from 'react'
import Typography from '../Typography'
import classes from './styles'

interface ButtonProps{
    size?: string;
    children: string;
}

const textTypes: { [key: string]: any } = {
    'huge': 'medium',
    'large': 'small',
    'medium': 'small',
    'small': 'x-small'
}

const Button: React.FC<ButtonProps> = ({size = 'medium', children}) => {
  return (
    <button className={classes.default(size)}>
        <Typography size={textTypes[size]}>
            {children}
        </Typography>
    </button>
  )
}

Button.defaultProps = {
    size: 'medium',
    children: ''
};

export default Button