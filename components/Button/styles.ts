const sizeTypes: { [key: string]: any } = {
    'huge': 'py-5 px-8 rounded-2xl',
    'large': 'py-5 px-8 rounded-xl',
    'medium': 'py-4 px-6 rounded-xl',
    'small': 'py-3 px-5 rounded-lg'
}

const styles = {
    default: (props:any) => [
        sizeTypes[props.size],
        props.full && 'w-full',
        'flex',
        "gap-1",
        "transition", 
        "duration-300", 
        "ease-in-out", 
        props.variant === "contained"&&`bg-${props.color}-300 text-gray-50 hover:bg-${props.color}-400 focus:bg-${props.color}-300 focus:outline focus:outline-8 focus:outline-${props.color}-100 disabled:bg-gray-200 disabled:text-gray-500 active:bg-${props.color}-500`,
        props.variant === "outlined"&&`m-[-2px] focus:outline focus:outline-8 focus:outline-${props.color}-100 text-${props.color}-300 bg-white ${!props.disabled&&'hover:bg-gray-100'} border-2 border-${props.color}-300 disabled:border-gray-200 disabled:text-gray-400`,
        props.variant === "text"&&`text-${props.color}-300`
    ].join(' '),
}

export default styles