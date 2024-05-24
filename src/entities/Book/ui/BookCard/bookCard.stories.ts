import type { Meta, StoryObj } from "@storybook/react";
import BookCard from "./mockProvider";

const meta = {
	component: BookCard,
	title: "Entities/BookCard",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof BookCard>;

type Story = StoryObj<typeof BookCard>;

export const BookCardSimple: Story = {
	args: {},
};

export default meta;
