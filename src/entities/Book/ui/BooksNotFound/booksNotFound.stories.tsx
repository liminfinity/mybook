import type { Meta, StoryObj } from "@storybook/react";
import BooksNotFound from "./booksNotFound";

const meta = {
	component: BooksNotFound,
	title: "Entities/BooksNotFound",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof BooksNotFound>;

type Story = StoryObj<typeof BooksNotFound>;

export const BooksNotFoundSimple: Story = {
	args: {},
};

export default meta;
