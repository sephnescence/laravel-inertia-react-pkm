export default function ContentEdit({ content }) {
    return (
        <>
            <form onSubmit={() => false}>
                <label htmlFor="first_name">Content:</label>
                <input
                    id="content"
                    readOnly={'readonly'}
                    value={content.content}
                />
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
