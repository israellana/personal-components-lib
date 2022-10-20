const styles = {
    default: (props:any) => [
        props.scale === 'medium' ? "py-3" : "py-2",
        "px-6",
        `bg-gray-200`,
        "rounded-2xl",
        "text-gray-500",
        //"valid:bg-green-100",
        //"valid:outline-offset-0",
        //"valid:focus:outline-green-300",
        "valid:focus:outline-primary-300",
        "invalid:bg-red-100",
        "invalid:outline-offset-0",
        "invalid:focus-offset-0",
        `invalid:focus:outline-red-300`,
        "focus:outline-solid",
        "focus:outline-none",
        "focus:outline-2",
        "focus:outline-offset-0",
        "block", 
        "focus:border-none", 
        "focus:ring-0 peer",
        "disabled:opacity-50",
        props.full && 'w-full'
        
    ].join(' '),
    label: (props:any) => [
        "ml-4",
        "mt[6px]",
        "text-xs",
        "text-gray-500",
        "absolute",
        "duration-300",
        "transform",
        props.scale === 'medium' ? "-translate-y-4" : "-translate-y-[12px]",
        "scale-75",
        props.scale === 'medium' ? "top-4" : "top-[12px]",
        "z-10",
        "origin-[0]",
        "left-2.5",
        "peer-disabled:opacity-50",
        `peer-focus:text-primary-300`,
        //"peer-valid:text-green-300",
        "peer-invalid:text-red-300",
        //"peer-valid:peer-focus:text-green-300",
        "peer-invalid:peer-focus:text-red-300",
        "peer-placeholder-shown:scale-100",
        "peer-placeholder-shown:translate-y-0",
        "peer-focus:scale-75",
        props.scale === 'medium' ? "peer-focus:-translate-y-4" : "peer-focus:-translate-y-[12px]"
    ].join(' '),
    container: () => [
        "relative",
    ].join(' '),
    hint: () => [
        "mt-2",
        "peer-focus:text-primary-300",
        //"peer-valid:text-green-300",
        "peer-invalid:text-red-300",
        "text-gray-500"
    ].join(' '),
}

export default styles