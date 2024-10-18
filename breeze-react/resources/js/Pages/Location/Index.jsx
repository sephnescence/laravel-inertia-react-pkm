import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'

const LocationIndex = ({ locations }) => {
    console.log(locations)
    return (
        <>
            <Head title="Locations" />
            <div className={'*:lg flex flex-col *:py-2 *:lg:px-8'}>
                {locations.map((location) => {
                    return (
                        <div key={location.id}>
                            <h2 className={'text-xl'}>
                                {location.display_name}
                            </h2>
                            <div>{location.description}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

LocationIndex.layout = (page) => (
    <AuthenticatedLayout
        children={page}
        header={
            <h2 className="text-xl font-semibold leading-tight">Locations</h2>
        }
    />
)

export default LocationIndex
