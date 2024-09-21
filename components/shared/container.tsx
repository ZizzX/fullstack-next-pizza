import { cn } from "@/lib/utils";
import React, {PropsWithChildren} from "react";

type ContainerProps = {
	className?: string;
};

export const Container = (props: PropsWithChildren<ContainerProps>): React.JSX.Element => {
	const {className, children} = props;
	return <div className={cn('mx-auto max-w-[1280px]', className)}>{children}</div>;
};
