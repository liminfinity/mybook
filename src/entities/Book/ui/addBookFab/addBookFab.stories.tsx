import type { Meta, StoryObj } from "@storybook/react";
import AddBookFab from "./addBookFab";
import { QueryClientProvider } from "@app/providers";

const meta = {
	component: AddBookFab,
	decorators: [
		Story => (
			<QueryClientProvider>
				<Story />
			</QueryClientProvider>
		),
	],
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
