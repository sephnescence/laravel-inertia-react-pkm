import { Link, router } from '@inertiajs/react'

export default function ContentList({ contents }) {
    function handleDelete(e) {
        e.preventDefault()

        const formData = new FormData(e.target)
        const contentId = formData.get('contentId')
        router.delete(`/content/${contentId}`)
    }

    return (
        <>
            <h1>Contents</h1>
            <p>
                List all contents in our own Inertia page. Nova doing this will
                be something separate
            </p>
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500">
                <Link href={'/content/create'} as={'button'} type={'button'}>
                    Create
                </Link>
            </button>
            {contents.map((content) => {
                return (
                    <div className={'border-l p-4'}>
                        <p>{content.content}</p>
                        <div className={'flex gap-2'}>
                            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500">
                                <Link
                                    href={`/content/${content.id}`}
                                    as={'button'}
                                    type={'button'}
                                >
                                    View
                                </Link>
                            </button>
                            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500">
                                <Link
                                    href={`/content/${content.id}/edit`}
                                    as={'button'}
                                    type={'button'}
                                >
                                    Edit
                                </Link>
                            </button>
                            <form onSubmit={handleDelete}>
                                <input
                                    name={'contentId'}
                                    type={'hidden'}
                                    value={content.id}
                                />
                                <button
                                    type="submit"
                                    className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-500"
                                >
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
