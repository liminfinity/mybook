import type { Meta, StoryObj } from "@storybook/react";
import BackdropLoader from "./backdropLoader";

const meta = {
	component: BackdropLoader,
	title: "Shared/BackdropLoader",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof BackdropLoader>;

type Story = StoryObj<typeof BackdropLoader>;

export const BackdropLoaderSimple: Story = {
	args: {
		open: true,
	},
};

export default meta;
