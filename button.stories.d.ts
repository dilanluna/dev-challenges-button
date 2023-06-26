import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<import("react").ButtonHTMLAttributes<HTMLButtonElement> & import("./button").ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
    tags: string[];
    argTypes: {
        size: {
            control: string;
            options: string[];
        };
        color: {
            control: string;
            options: string[];
        };
        variant: {
            control: string;
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Outline: Story;
export declare const Text: Story;
export declare const Disabled: Story;
export declare const TextDisabled: Story;
export declare const ShadowDisabled: Story;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Danger: Story;
export declare const PrimaryOutline: Story;
export declare const SecondaryOutline: Story;
export declare const DangerOutline: Story;
export declare const PrimaryText: Story;
export declare const SecondaryText: Story;
export declare const DangerText: Story;
export declare const Small: Story;
export declare const Medium: Story;
export declare const Large: Story;
export declare const StartIcon: Story;
export declare const EndIcon: Story;
