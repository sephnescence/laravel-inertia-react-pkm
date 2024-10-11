import { Link } from '@inertiajs/react'

export default function ResponsiveNavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={`flex w-full items-start border-l-4 py-2 pe-4 ps-3 ${
                active
                    ? 'border-indigo-400 bg-indigo-50 focus:border-indigo-700 focus:bg-indigo-100'
                    : 'border-transparent hover:border-gray-300 hover:bg-gray-50 focus:border-gray-300 focus:bg-gray-50'
            } text-base font-medium transition duration-150 ease-in-out focus:outline-none ${className}`}
        >
            {children}
        </Link>
    )
}
