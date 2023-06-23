import { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
	title: 'Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
		},
		color: {
			control: 'select',
			options: ['primary', 'secundary', 'danger'],
		},
		variant: {
			control: 'select',
			options: ['outline', 'text'],
		},
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Button',
	},
};

export const Outline: Story = {
	args: {
		label: 'Button',
		variant: 'outline',
	},
};

export const Text: Story = {
	args: {
		label: 'Button',
		variant: 'text',
	},
};

export const Disabled: Story = {
	args: {
		label: 'Button',
		disabled: true,
	},
};

export const TextDisabled: Story = {
	args: {
		label: 'Button',
		variant: 'text',
		disabled: true,
	},
};

export const ShadowDisabled: Story = {
	args: {
		label: 'Button',
		disableShadow: true,
	},
};

export const Primary: Story = {
	args: {
		label: 'Button',
		color: 'primary',
	},
};

export const Secondary: Story = {
	args: {
		label: 'Button',
		color: 'secondary',
	},
};

export const Danger: Story = {
	args: {
		label: 'Button',
		color: 'danger',
	},
};

export const PrimaryOutline: Story = {
	args: {
		label: 'Button',
		color: 'primary',
		variant: 'outline',
	},
};

export const SecondaryOutline: Story = {
	args: {
		label: 'Button',
		color: 'secondary',
		variant: 'outline',
	},
};

export const DangerOutline: Story = {
	args: {
		label: 'Button',
		color: 'danger',
		variant: 'outline',
	},
};

export const PrimaryText: Story = {
	args: {
		label: 'Button',
		color: 'primary',
		variant: 'text',
	},
};

export const SecondaryText: Story = {
	args: {
		label: 'Button',
		color: 'secondary',
		variant: 'text',
	},
};

export const DangerText: Story = {
	args: {
		label: 'Button',
		color: 'danger',
		variant: 'text',
	},
};

export const Small: Story = {
	args: {
		label: 'Button',
		size: 'sm',
		color: 'primary',
	},
};

export const Medium: Story = {
	args: {
		label: 'Button',
		size: 'md',
		color: 'primary',
	},
};

export const Large: Story = {
	args: {
		label: 'Button',
		size: 'lg',
		color: 'primary',
	},
};

export const StartIcon: Story = {
	args: {
		label: 'Button',
		color: 'primary',
		startIcon: 'local_grocery_store',
	},
};

export const EndIcon: Story = {
	args: {
		label: 'Button',
		color: 'primary',
		endIcon: 'local_grocery_store',
	},
};
