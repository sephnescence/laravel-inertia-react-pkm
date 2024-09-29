import { Link, router } from '@inertiajs/react'
import RethoughtPage from '@/Components/RethoughtPage.jsx'

export default function ContentList({ contents }) {
    function handleDelete(e) {
        e.preventDefault()

        const formData = new FormData(e.target)
        const contentId = formData.get('contentId')
        router.delete(`/content/${contentId}`)
    }

    return (
        <RethoughtPage>
            <div className="mb-2 text-4xl">Contents</div>
            <p>
                List all contents in our own Inertia page. Nova doing this will
                be something separate
            </p>
            <Link
                as={'button'}
                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
                href={'/content/create'}
                type={'button'}
            >
                Create
            </Link>
            {contents.map((content) => {
                return (
                    <div className={'border-l p-4'}>
                        <p>{content.content}</p>
                        <div className={'flex gap-2'}>
                            <Link
                                as={'button'}
                                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
                                href={`/content/${content.id}`}
                                type={'button'}
                            >
                                View
                            </Link>
                            <Link
                                as={'button'}
                                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
                                href={`/content/${content.id}/edit`}
                                type={'button'}
                            >
                                Edit
                            </Link>
                            <form onSubmit={handleDelete}>
                                <input
                                    name={'contentId'}
                                    type={'hidden'}
                                    value={content.id}
                                />
                                <button
                                    className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-500"
                                    type="submit"
                                >
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>
                )
            })}
        </RethoughtPage>
    )
}
