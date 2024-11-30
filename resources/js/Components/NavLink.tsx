import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center border-b-2 leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-slate-500 text-slate-500 hover:border-transparent hover:text-amber-500 focus:border-blue-700'
                    : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 focus:border-slate-300 focus:text-slate-700') +
                className
            }
        >
            {children}
        </Link>
    );
}
