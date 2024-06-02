import type { Meta, StoryObj } from "@storybook/react";
import BookGroupingPanel from "./bookGroupingPanel";

const meta = {
	component: BookGroupingPanel,
	title: "Entities/BookGroupingPanel",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof BookGroupingPanel>;

type Story = StoryObj<typeof BookGroupingPanel>;

export const BookGroupingPanelSimple: Story = {
	args: {},
};

export default meta;
