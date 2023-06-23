import clsx from 'clsx';

export function ButtonIcon({ icon, className }: { icon: string; className?: string }) {
	return (
		<span
			aria-hidden="true"
			className={clsx('material-symbols-outlined', className)}>
			{icon}
		</span>
	);
}
