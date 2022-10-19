const typographyTypes: { [key: string]: any } = {
    'text': {
        'x-small': 'text-xs',
        'small': 'text-sm',
        'medium': 'text-base',
        'large': 'text-lg',
        'huge': 'text-xl'
    },
    'title': {
        'x-small': 'text-2xl',
        'small': 'text-3xl',
        'medium': 'text-4xl',
        'large': 'text-5xl',
        'huge': 'text-6xl'
    }
}

const typographyAligns: { [key: string]: any } = {
    'left': 'text-left',
    'center': 'text-center',
    'right': 'text-right'
}

const typographyWeights: { [key: string]: any } = {
    'bold': 'font-bold',
    'normal': 'font-medium',
    'light': 'font-light'
}

const styles = {
    default: (props:any) => [
        typographyTypes[props.type??"text"][props.size??"medium"],
        typographyWeights[props.weight??"normal"],
        typographyAligns[props.align??"left"],
        "w-full",
        `text-${props.color}`
    ].join(' ')
}

export default styles