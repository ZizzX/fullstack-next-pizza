'use client';
import React from 'react';
import { cn } from '@/lib/utils';

type CategoriesProps = {
    className?: string;
};

const items = Array.from({ length: 5 }, (_, i) => i);

export const Categories = ({ className }: CategoriesProps): React.JSX.Element => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {items.map((_, i) => (
                <a
                    key={i}
                    href={`/#Category-${i}`}
                    className={cn(
                        'flex items-center font-bold h-11 rounded-2xl px-5 transition duration-300',
                        {
                            'bg-white shadow-md shadow-gray-200 text-primary': activeIndex === i,
                        }
                    )}
                >
                    <button
                        onClick={() => {
                            setActiveIndex(i);
                        }}
                    >{`Category ${i}`}</button>
                </a>
            ))}
        </div>
    );
};
