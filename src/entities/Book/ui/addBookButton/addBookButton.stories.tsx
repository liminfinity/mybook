import type { Meta, StoryObj } from "@storybook/react";
import AddBookButton from "./addBookButton";
import { QueryClientProvider } from "@app/providers";

const meta = {
	component: AddBookButton,
	decorators: [
		Story => (
			<QueryClientProvider>
				<Story />
			</QueryClientProvider>
		),
	],
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
