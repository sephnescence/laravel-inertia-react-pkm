import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'

const LocationIndex = () => {
    return <Head title="Locations" />
}

LocationIndex.layout = (page) =>
    (
        <AuthenticatedLayout
            children={page}
            header={
                <h2 className="text-xl font-semibold leading-tight">
                    Locations
                </h2>
            }
        />
    )``

export default LocationIndex
