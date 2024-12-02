import { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({
    className = '',
    disabled,
    children,
    href,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { href?: string }) {
    const handleClick = () => {
        if (href) {
            window.location.href = href; // `href` に遷移
        }
    };
    return (
        <button
            {...props}
            onClick={handleClick}
            className={
                `mx-auto border bg-teal-600 !hover:bg-blue-700 font-en text-white select:border-rose-70 drop-shadow-xl translate-y-[-2px] hover:drop-shadow-2xl hover:translate-y-[-6px] focus:drop-shadow-2xl focus:translate-y-[-6px] active:drop-shadow-none active:translate-y-0 
                inline-flex items-center rounded-md border-transparent px-4 py-2 text-xs font-semibold uppercase tracking-widest transition duration-150 ease-in-out hover:bg-rose-700 focus:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 active:bg-rose-700 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
// import { ButtonHTMLAttributes } from 'react';

// export default function PrimaryButton({
//     className = '',
//     disabled,
//     children,
//     ...props
// }: ButtonHTMLAttributes<HTMLButtonElement>) {
//     return (
//         <button
//             {...props}
//             className={
//                 `mx-auto border bg-teal-600 !hover:bg-blue-700 font-en text-white select:border-rose-70
//                 inline-flex items-center rounded-md border-transparent px-4 py-2 text-xs font-semibold uppercase tracking-widest transition duration-150 ease-in-out hover:bg-rose-700 focus:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 active:bg-rose-700 ${
//                     disabled && 'opacity-25'
//                 } ` + className
//             }
//             disabled={disabled}
//         >
//             {children}
//         </button>
//     );
// }