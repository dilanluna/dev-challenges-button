import clsx from 'clsx';
// @ts-expect-error: no types for css modules
import styles from './button.module.css';
import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react';
import { ButtonIcon } from './button-icon';

export interface ButtonProps {
	label?: string;
	variant?: 'outline' | 'text';
	color?: 'primary' | 'secondary' | 'danger';
	size?: 'sm' | 'md' | 'lg';
	disableShadow?: boolean;
	startIcon?: string;
	endIcon?: string;
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps;

function InnerButton(
	{ label, variant, color, startIcon, endIcon, size = 'md', disableShadow = false, ...props }: Props,
	ref: ForwardedRef<HTMLButtonElement>,
) {
	return (
		<button
			ref={ref}
			{...props}
			className={clsx(styles.button, {
				// Variants
				[styles['button--outline']]: variant === 'outline',
				[styles['button--text']]: variant === 'text',
				// Shadow
				[styles['button--shadowed']]: !disableShadow,
				// Colors
				[styles['button--primary']]: color === 'primary',
				[styles['button--secondary']]: color === 'secondary',
				[styles['button--danger']]: color === 'danger',
				// Sizes
				[styles['button--sm']]: size === 'sm',
				[styles['button--md']]: size === 'md',
				[styles['button--lg']]: size === 'lg',
			})}>
			{startIcon && (
				<ButtonIcon
					icon={startIcon}
					className={clsx(styles['button__icon'], styles['button__icon--start'])}
				/>
			)}

			{label}

			{endIcon && (
				<ButtonIcon
					icon={endIcon}
					className={clsx(styles['button__icon'], styles['button__icon--end'])}
				/>
			)}
		</button>
	);
}

export const Button = forwardRef(InnerButton);
