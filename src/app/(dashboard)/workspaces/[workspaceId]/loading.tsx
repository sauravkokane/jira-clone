import React from 'react'
import { Loader } from 'lucide-react'

const DashboardLoading: React.FC = () => {
    return (
        <div className="h-full flex item-center justify-center">
            <Loader className='size-6 animate-spin text-muted-foreground' />
        </div>
    )
}

export default DashboardLoading;
