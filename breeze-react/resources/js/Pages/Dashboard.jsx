import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-2 text-gray-900 underline">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p>
                    Today I spent <span>most</span> of the day researching ways
                    to ...
                    <span className="inline-flex items-baseline">
                        <img
                            src="https://place-hold.it/42/42"
                            alt="Woot woot"
                            className="mx-1 h-5 w-5 self-center rounded-full"
                        />
                        <span>Kramer</span>
                    </span>
                    keeps telling me there is no way to make it work, that ...
                </p>
            </div>
            <div>
                <p>
                    Today I spent <span>most</span> of the day researching ways
                    to ...
                    <span>
                        <img
                            src="https://place-hold.it/42/42"
                            alt="Woot woot"
                            className="mx-1 h-5 w-5 self-center rounded-full"
                        />
                        <span>Kramer</span>
                    </span>
                    keeps telling me there is no way to make it work, that ...
                </p>
            </div>
        </AuthenticatedLayout>
    )
}
