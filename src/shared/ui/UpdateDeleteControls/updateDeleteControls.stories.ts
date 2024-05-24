import type { Meta, StoryObj } from "@storybook/react";
import UpdateRemoveControls from "./updateDeleteControls";
import { fn } from "@storybook/test";

const meta = {
	component: UpdateRemoveControls,
	title: "Shared/UpdateRemoveControls",
	tags: ["autodocs"],
	args: {
		onDelete: fn(),
		onUpdate: fn(),
	},
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof UpdateRemoveControls>;

type Story = StoryObj<typeof UpdateRemoveControls>;

export const UpdateRemoveControlsSimple: Story = {
	args: {},
};

export default meta;
