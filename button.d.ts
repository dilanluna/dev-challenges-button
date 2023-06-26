import { ButtonHTMLAttributes } from 'react';
export interface ButtonProps {
    label?: string;
    variant?: 'outline' | 'text';
    color?: 'primary' | 'secondary' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    disableShadow?: boolean;
    startIcon?: string;
    endIcon?: string;
}
export declare const Button: import("react").ForwardRefExoticComponent<ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
