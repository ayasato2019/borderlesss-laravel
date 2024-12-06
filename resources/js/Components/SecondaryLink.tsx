import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function Secondarylink({
    className = '',
    children,
    href,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                `inline-flex items-center rounded-md border border-teal-500 text-teal-500 bg-white px-4 py-2 text-xs font-semibold font-en uppercase tracking-widest transition duration-150 ease-in-out hover:bg-amber-500 hover:border-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 disabled:opacity-25  drop-shadow-xl translate-y-[-2px] hover:drop-shadow-2xl hover:translate-y-[-6px] focus:drop-shadow-2xl focus:translate-y-[-6px] active:drop-shadow-none active:translate-y-0` + className
            }
            href={href}
        >
            {children}
        </Link>
    );
}
