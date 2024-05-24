import type { Meta, StoryObj } from "@storybook/react";
import AddBookButton from "./mockProvider";

const meta = {
	component: AddBookButton,
	title: "Entities/AddBookButton",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof AddBookButton>;

type Story = StoryObj<typeof AddBookButton>;

export const AddBookButtonSimple: Story = {
	args: {},
};

export default meta;
