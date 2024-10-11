import { Link } from '@inertiajs/react'

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-300 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-indigo-400 focus:border-indigo-700'
                    : 'border-transparent hover:border-gray-300 focus:border-gray-300') +
                className
            }
        >
            {children}
        </Link>
    )
}
