import { Head } from '@inertiajs/react'

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Rethought" />
            <div className="flex h-full min-h-screen w-full items-center justify-center">
                <div className="text-center">
                    <h1 className="mb-2 text-4xl">Rethought</h1>
                    <p className="mb-4 text-2xl text-blue-400">
                        Enjoy your stay at the resort-themed personal knowledge
                        management system!
                    </p>
                    <div className={'flex items-center justify-center gap-2'}>
                        <a
                            className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-500"
                            href={
                                auth.user ? route('dashboard') : route('login')
                            }
                        >
                            Check In
                        </a>
                        {!auth.user && (
                            <a
                                className="rounded-lg bg-purple-600 px-4 py-2 hover:bg-purple-500"
                                href={route('register')}
                            >
                                Register
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
