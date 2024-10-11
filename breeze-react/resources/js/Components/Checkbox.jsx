export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-indigo-900 shadow-sm focus:ring-indigo-500 ' +
                className
            }
        />
    )
}
