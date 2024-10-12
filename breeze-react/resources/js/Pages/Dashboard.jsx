import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'

const Dashboard = () => {
    return <Head title="Dashboard" />
}

Dashboard.layout = (page) => (
    <AuthenticatedLayout
        children={page}
        header={
            <h2 className="text-xl font-semibold leading-tight">Dashboard</h2>
        }
    />
)

export default Dashboard
