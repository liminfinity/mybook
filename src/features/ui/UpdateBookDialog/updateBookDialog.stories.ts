import type { Meta, StoryObj } from "@storybook/react";
import UpdateBookDialog from "./mockProvider";

const meta = {
	component: UpdateBookDialog,
	title: "Features/UpdateBookDialog",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof UpdateBookDialog>;

type Story = StoryObj<typeof UpdateBookDialog>;

export const UpdateBookDialogSimple: Story = {
	args: {},
};

export default meta;
