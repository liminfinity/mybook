import type { Meta, StoryObj } from "@storybook/react";
import BookInfoTooltip from "./mockProvider";

const meta = {
	component: BookInfoTooltip,
	title: "Entities/BookInfoTooltip",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof BookInfoTooltip>;

type Story = StoryObj<typeof BookInfoTooltip>;

export const BookInfoTooltipSimple: Story = {
	args: {},
};

export default meta;
