import type { Meta, StoryObj } from "@storybook/react";
import BookInfoTooltip from "./bookInfoTooltip";
import { QueryClientProvider } from "@app/providers";

const meta = {
	component: BookInfoTooltip,
	decorators: [
		Story => (
			<QueryClientProvider>
				<Story />
			</QueryClientProvider>
		),
	],
	title: "Entities/BookInfoTooltip",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof BookInfoTooltip>;

type Story = StoryObj<typeof BookInfoTooltip>;

export const BookInfoTooltipSimple: Story = {
	args: {
		bookId: "a49Eag7Utban270gmI25",
	},
};

export default meta;
