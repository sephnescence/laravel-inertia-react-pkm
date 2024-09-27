import { useState } from 'react'
import { router } from '@inertiajs/react'

export default function ContentCreate() {
    const [values, setValues] = useState({
        content: '',
    })

    function handleChange(e) {
        const key = e.target.id
        const value = e.target.value
        setValues((values) => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/content', values)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="content">Content:</label>
                <input
                    id="content"
                    value={values.content}
                    onChange={handleChange}
                />
                <a
                    href={`/content`}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
                    type="submit"
                >
                    Submit
                </a>
            </form>
            <a
                href={`/content`}
                className="rounded-lg bg-gray-600 px-4 py-2 text-white hover:bg-gray-500"
                type="submit"
            >
                Cancel
            </a>
        </>
    )
}
