import React from 'react';
import { redirect } from 'next/navigation';

import { getCurrent } from '@/features/auth/queries';


interface WorkspaceIdSettingsPageProps {
    params: {
        workspaceId: string;
    }
}

const WorkspaceIdSettingsPage: React.FC<WorkspaceIdSettingsPageProps> = async ({ params }) => {
    const user = await getCurrent();

    if (!user) {
        redirect("/sign-in");
    }


    return (
        <div>
            Workspace Id Settings Page: {params.workspaceId}
        </div>
    );
}

export default WorkspaceIdSettingsPage;
