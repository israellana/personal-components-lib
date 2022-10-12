const styles = {
    default: [
        'flex',
        'bg-red',
        'py-5',
        'px-8',
        "active:bg-primary-500", 
        "gap-1", 
        "transition", 
        "duration-300", 
        "ease-in-out", 
        "bg-primary-300", 
        "rounded-2xl", 
        "text-gray-50", 
        "hover:bg-primary-400", 
        "focus:bg-primary-300", 
        "focus:border-solid", 
        "focus:border-8", 
        "focus:border-primary-100", 
        "focus:rounded-3xl", 
        "disabled:bg-gray-200", 
        "disabled:text-gray-500"
    ].join(' '),
    li: [
        'mb-3',
        'sm:ml-3',
        'sm:mb-0',
        'even:bg-gray-50',
        'odd:bg-white',
    ].join(' '),
    a: () =>
    [
        'text-black',
        'font-bold',
        'inline-block',
        'rounded-full',
        'bg-yellow-400',
        'py-1',
        'px-3',
    ].join(' '),
}

export default styles