import type { Meta, StoryObj } from "@storybook/react";
import BookControlsTooltip from "./mockProvider";

const meta = {
	component: BookControlsTooltip,
	title: "Entities/BookControlsTooltip",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof BookControlsTooltip>;

type Story = StoryObj<typeof BookControlsTooltip>;

export const BookControlsTooltipSimple: Story = {
	args: {},
};

export default meta;
