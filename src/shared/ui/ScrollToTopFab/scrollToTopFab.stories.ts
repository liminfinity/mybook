import type { Meta, StoryObj } from "@storybook/react";
import ScrollToTopFab from "./scrollToTopFab";

const meta = {
	component: ScrollToTopFab,
	title: "Shared/ScrollToTopFab",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof ScrollToTopFab>;

type Story = StoryObj<typeof ScrollToTopFab>;

export const ScrollToTopFabSimple: Story = {
	args: {
		open: true,
	},
};

export default meta;
