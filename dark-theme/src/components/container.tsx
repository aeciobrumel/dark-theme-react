import type { ReactNode } from "react";

type Props = {
    children: ReactNode
}
export const Container = ({ children }: Props) => {
    return (
        <div className="w-full h-screen flex items-center justify-center transition-all duration-500 ease-in-out
 dark:bg-black dark:text-white bg-white text-black `
        ">
            <div className="container mx-auto">
                {children}
            </div>
        </div >

    );
}

