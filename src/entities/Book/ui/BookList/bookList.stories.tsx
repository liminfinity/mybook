import type { Meta, StoryObj } from "@storybook/react";
import BookList from "./mockProvider";

const meta = {
	component: BookList,
	title: "Entities/BookList",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof BookList>;

type Story = StoryObj<typeof BookList>;

export const BookListSimple: Story = {
	args: {},
};

export default meta;
