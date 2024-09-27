import { Link } from '@inertiajs/react'

export default function InertiaExample() {
    const someInterpolatedVariable = `See this example of string interpolation to prove that it's in JSX`

    return (
        <>
            <p>This is rendered using jsx! {someInterpolatedVariable}</p>

            <Link href={'/examples/jsx-2'}>JSX-2</Link>
        </>
    )
}
