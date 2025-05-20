import * as React from 'react';
import { cn } from '@/lib/utils.ts';

interface IconProps {
    children: React.ReactNode;
    color?: string;
    className?: string;
    width?: string;
    height?: string;
    viewBox?: string;
}

export interface IconContentProps {
    className?: string;
    color?: string;
}

const Icon = ({
    children,
    color,
    className,
    width,
    height,
    viewBox,
}: IconProps) => {
    return (
        <svg
            width={width ?? '24px'}
            height={height ?? '24px'}
            viewBox={viewBox ?? '0 0 24 24'}
            xmlns="http://www.w3.org/2000/svg"
            className={cn(`text-${color}`, 'fill-current', className)}
        >
            {children}
        </svg>
    );
};

export default Icon;
