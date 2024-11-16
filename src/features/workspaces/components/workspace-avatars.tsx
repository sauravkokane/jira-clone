import Image from 'next/image';

import { cn } from '@/lib/utils';

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface WorkspaceAvatarsProps {
    image?: string;
    name: string;
    className?: string
};


export const WorkspaceAvatars: React.FC<WorkspaceAvatarsProps> = ({ image, name, className }) => {
    if (image) {
        return (
            <div className={
                cn("size-10 relative rounded-md overflow-hidden", className)
            }>
                <Image src={image} alt={name} fill className='object-cover' />
            </div>
        )
    }
    return (
        <Avatar className={
            cn("size-10 rounded-md", className)
        }>
            <AvatarFallback className='text-white bg-blue-500 font-semibold text-lg uppercase rounded-md'>
                {name[0]}
            </AvatarFallback>
        </Avatar>
    )
}