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

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button {...props} className={classes.default(props.size)}>
        <Typography size={textTypes[props.size??'medium']}>
            {props.children}
        </Typography>
    </button>
  )
}

Button.defaultProps = {
    size: 'medium',
    children: ''
};

export default Button