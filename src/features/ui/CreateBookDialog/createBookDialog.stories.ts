import type { Meta, StoryObj } from "@storybook/react";
import CreateBookDialog from "./mockProvider";

const meta = {
	component: CreateBookDialog,
	title: "Features/CreateBookDialog",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof CreateBookDialog>;

type Story = StoryObj<typeof CreateBookDialog>;

export const CreateBookDialogSimple: Story = {
	args: {},
};

export default meta;
