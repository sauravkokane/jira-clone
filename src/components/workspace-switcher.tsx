"use client";

import React from 'react'
import { useRouter } from 'next/navigation';
import { RiAddCircleFill } from "react-icons/ri";

import { useWorkspaceId } from '@/features/workspaces/hooks/use-workspace-id';
import { useGetWorkspaces } from '@/features/workspaces/api/use-get-workspaces';
import { useCreateWorkspaceModal } from '@/features/workspaces/hooks/use-create-workspace-modal';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { WorkspaceAvatars } from '@/features/workspaces/components/workspace-avatars';

export const WorkspaceSwitcher: React.FC = () => {
    const router = useRouter();
    const workspaceId = useWorkspaceId();
    const { data: workspaces } = useGetWorkspaces();
    const { open } = useCreateWorkspaceModal();

    const onSelect = (id: string) => {
        router.push(`/workspaces/${id}`);
    };

    return (
        <div className='flex flex-col gap-y-2'>
            <div className='flex items-center justify-between'>
                <p className='text-xs uppercase text-neutral-500'>Workspaces</p>
                <RiAddCircleFill onClick={open} className='size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition' />
            </div>
            <Select onValueChange={onSelect} value={workspaceId}>
                <SelectTrigger className='w-full bg-neutral-200 font-medium p-1'>
                    <SelectValue placeholder="No workspace selected" />
                </SelectTrigger>
                <SelectContent>
                    {
                        workspaces?.documents.map((workspace) => {
                            return (
                                <SelectItem key={workspace.$id} value={workspace.$id}>
                                    <div className='flex justify-start items-center gap-3 font-medium'>
                                        <WorkspaceAvatars name={workspace.name} image={workspace.imageUrl} />
                                        <span className='trunckate'>{workspace.name}</span>
                                    </div>
                                </SelectItem>
                            );
                        })
                    }
                </SelectContent>
            </Select>
        </div>
    );
};

