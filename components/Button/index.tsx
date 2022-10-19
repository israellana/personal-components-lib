import React from 'react'
import Typography from '../Typography'
import classes from './styles'

interface ButtonProps{
    size?: string;
    children: string;
    full?: boolean;
    variant?: string;
    disabled?: boolean;
    color?: string;
}

const textTypes: { [key: string]: any } = {
    'huge': 'medium',
    'large': 'small',
    'medium': 'small',
    'small': 'x-small'
}

const Button: React.FC<ButtonProps> = (props) => {

    const Element = props.variant === 'text' ? 'a' : 'button'

    return (
        <Element {...props} className={classes.default(props)}>
            <Typography align={props.full?"center":"left"} size={textTypes[props.size??'medium']}>
                {props.children}
            </Typography>
        </Element>
    )
}

Button.defaultProps = {
    size: 'medium',
    children: 'Teste',
    full: false,
    variant: "contained",
    disabled: false,
    color: 'primary'
};

export default Button