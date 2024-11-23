import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui';
import { ArrowRight, ShoppingCart } from 'lucide-react';

type HeaderProps = {
    className?: string;
};

export const Header = (props: HeaderProps): React.JSX.Element => {
    const { className } = props;
    return (
        <header className={cn('border-b border-gray-100', className)}>
            <Container className="flex justify-between items-center py-4">
                <div className="flex items-center gap-4">
                    <Image src="/logo.png" width={35} height={35} alt="Logo" />
                    <div>
                        <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
                        <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
                    </div>
                </div>

                <Button className={cn('group relative', className)}>
                    <b>0 ₽</b>
                    <span className="h-full w-[1px] bg-white/30 mx-3" />
                    <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                        <ShoppingCart size={16} className="relative" strokeWidth={2} />
                        <b>0</b>
                    </div>
                    <ArrowRight
                        size={20}
                        className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                    />
                </Button>
            </Container>
        </header>
    );
};
