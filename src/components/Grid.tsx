import { ReactNode } from "react";

type Cols =
    1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 'none'

export default function Grid({ children, cols }: { children: ReactNode, cols: Cols }) {
    return (
        <div className={`grid grid-cols-${cols} mb-6`}>
            {children}
        </div>
    );
}