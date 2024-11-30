import React from 'react';
import { redirect } from 'next/navigation';

import { getCurrent } from '@/features/auth/queries';

const WorkspaceIdPage = async () => {
    const user = await getCurrent();

    if (!user) {
        redirect("/sign-in");
    }
    return (
        <div>
            Workspace Id Page
        </div>
    )
}

export default WorkspaceIdPage;
