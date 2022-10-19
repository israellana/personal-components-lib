
const styles = {
    default: () => [
        "py-3",
        "px-6",
        "bg-gray-200",
        "rounded-2xl",
        "text-gray-500",
        "focus:border-primary-300",
        "focus:border-solid",
        "focus:outline-none",
        "focus:border-2",
        "block", 
        "focus:outline-none", 
        "focus:ring-0 peer"
    ].join(' '),
    label: () => [
        "ml-4",
        "mt[6px]",
        "text-xs",
        "text-gray-500",
        "absolute",
        "duration-300",
        "transform",
        "-translate-y-4",
        "scale-75",
        "top-4",
        "z-10",
        "origin-[0]",
        "left-2.5",
        "peer-focus:text-primary-300",
        "peer-placeholder-shown:scale-100",
        "peer-placeholder-shown:translate-y-0",
        "peer-focus:scale-75",
        "peer-focus:-translate-y-4"
    ].join(' '),
    container: () => [
        "relative",
    ].join(' '),
}

export default styles