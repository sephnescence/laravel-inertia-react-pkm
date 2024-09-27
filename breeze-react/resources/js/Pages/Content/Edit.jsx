import { useState } from 'react'
import { router } from '@inertiajs/react'

export default function ContentEdit({ content }) {
    const [values, setValues] = useState({
        id: content.id,
        content: content.content,
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
        const contentId = values.id
        router.patch(`/content/${contentId}`, values)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first_name">Content:</label>
                <input
                    id="content"
                    value={values.content}
                    onChange={handleChange}
                />
                <button
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
                    type="submit"
                >
                    Submit
                </button>
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
