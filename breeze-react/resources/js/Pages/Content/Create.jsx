import { useState } from 'react'
import { Link, router, usePage } from '@inertiajs/react'
import RethoughtPage from '@/Components/RethoughtPage.jsx'

export default function ContentCreate() {
    const { errors } = usePage().props

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
        router.post(route('content.store'), values)
    }

    return (
        <RethoughtPage>
            <div className="mb-2 text-4xl">Create Content</div>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label>
                        <div className="mb-1">Content</div>
                        <textarea
                            rows={4}
                            className="min-w-full bg-slate-700 p-4"
                            id="content"
                            name="content"
                            defaultValue={values.content}
                            onChange={handleChange}
                            placeholder="Item name"
                        />
                    </label>
                    {errors?.content && (
                        <div className="text-red-500">{errors?.content}</div>
                    )}
                </div>
                <div className={'flex gap-2'}>
                    <button
                        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
                        type="submit"
                    >
                        Submit
                    </button>
                    <Link
                        as={'button'}
                        className="rounded-lg bg-gray-600 px-4 py-2 text-white hover:bg-gray-500"
                        href={route('content.index')}
                        type={'button'}
                    >
                        Cancel
                    </Link>
                </div>
            </form>
        </RethoughtPage>
    )
}
