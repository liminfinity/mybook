import type { Meta, StoryObj } from "@storybook/react";
import SearchAndBookList from "./searchAndBookList";
import { QueryClientProvider } from "@app/providers";

const meta = {
	component: SearchAndBookList,
	decorators: [
		Story => (
			<QueryClientProvider>
				<Story />
			</QueryClientProvider>
		),
	],

	title: "Widgets/SearchAndBookList",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof SearchAndBookList>;

type Story = StoryObj<typeof SearchAndBookList>;

export const SearchAndBookListSimple: Story = {
	args: {},
};

export default meta;
