import React from "react";
import Image from "next/image";
import {cn}  from "@/lib/utils";
import {Container} from "@/components/shared/container";

type HeaderProps = {
	className?: string;
};

export const Header = (props: HeaderProps): React.JSX.Element => {
	const {className} = props;
	return (
		<header className={cn('border-b border-gray-100', className)}>
			<Container className="flex justify-between items-center py-4">
				<div className="flex items-center gap-4">
					<Image src="/logo.png" width={35} height={35} alt="Logo"/>
					<div>
						<h1 className="text-2xl uppercase font-black">Next Pizza</h1>
						<p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
					</div>
				</div>
			</Container>
		</header>
	);
};
