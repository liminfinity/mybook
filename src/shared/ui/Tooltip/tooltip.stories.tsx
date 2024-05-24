import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./tooltip";

const meta = {
	component: Tooltip,
	title: "Shared/Tooltip",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;

export const TooltipSimple: Story = {
	args: {
		children: <span>Привет, мир!</span>,
	},
};

export default meta;
