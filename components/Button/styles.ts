const sizeTypes: { [key: string]: any } = {
    'huge': 'py-5 px-8 rounded-2xl focus:rounded-3xl',
    'large': 'py-5 px-8 rounded-xl focus:rounded-[20px]',
    'medium': 'py-4 px-6 rounded-xl focus:rounded-[20px]',
    'small': 'py-3 px-5 rounded-lg focus:rounded-2xl'
}

const styles = {
    default: (props:any) => [
        sizeTypes[props.size],
        props.full && 'w-full',
        'flex',
        "gap-1",
        "m-2",
        "transition", 
        "duration-300", 
        "ease-in-out", 
        "bg-primary-300", 
        "text-gray-50", 
        "hover:bg-primary-400", 
        "focus:m-0",
        "focus:bg-primary-300", 
        "focus:border-solid", 
        "focus:border-8", 
        "focus:border-primary-100", 
        "disabled:bg-gray-200", 
        "disabled:text-gray-500",
        "active:bg-primary-500"
    ].join(' '),
}

export default styles