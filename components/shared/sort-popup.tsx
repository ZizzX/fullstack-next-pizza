import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpDown } from 'lucide-react';

type SortPopupProps = {
    className?: string;
};

export const SortPopup = ({ className }: SortPopupProps): React.JSX.Element => {
    return (
        <div
            className={cn(
                'inline-flex gap-1 items-center bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer',
                className
            )}
        >
            <ArrowUpDown size={16} />
            <b>Сортировка:</b>
            <b className="text-primary">популярное</b>
        </div>
    );
};
