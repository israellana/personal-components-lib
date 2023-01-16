const styles = {
    default: (props:any) => [
        props.scale === 'medium' ? "py-3" : "py-2",
        'py-6',
        'px-6',
        'bg-green-300',
    ].join(' '),
}

export default styles