import type { Meta, StoryObj } from "@storybook/react";
import AddBookFab from "./mockProvider";

const meta = {
	component: AddBookFab,
	title: "Entities/AddBookFab",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof AddBookFab>;

type Story = StoryObj<typeof AddBookFab>;

export const AddBookFabSimple: Story = {
	args: {},
};

export default meta;
