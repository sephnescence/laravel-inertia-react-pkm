import { Link } from '@inertiajs/react'
import RethoughtPage from '@/Components/RethoughtPage.jsx'

export default function ContentEdit({ content }) {
    return (
        <RethoughtPage>
            <div className="mb-2 text-4xl">View Content</div>
            <form onSubmit={() => false}>
                <div className="mb-2">
                    <label>
                        <div className="mb-1">Content</div>
                        <textarea
                            className="min-w-full bg-slate-700 p-4"
                            disabled={true}
                            id="content"
                            name="content"
                            placeholder="Item name"
                            rows={4}
                            value={content.content}
                        />
                    </label>
                </div>
                <div className={'flex gap-2'}>
                    <Link
                        as={'button'}
                        className="rounded-lg bg-gray-600 px-4 py-2 text-white hover:bg-gray-500"
                        href={`/content`}
                        type={'button'}
                    >
                        Cancel
                    </Link>
                </div>
            </form>
        </RethoughtPage>
    )
}
