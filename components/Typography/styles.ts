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

const typographyWeights: { [key: string]: any } = {
    'bold': 'font-bold',
    'normal': 'font-medium',
    'light': 'font-light'
}

const styles = {
    default: (size:string = 'medium', type:string = 'text', weight:string = 'normal') => [
        typographyTypes[type][size],
        typographyWeights[weight]
    ].join(' ')
}

export default styles