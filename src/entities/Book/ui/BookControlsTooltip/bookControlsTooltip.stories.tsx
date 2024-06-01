import type { Meta, StoryObj } from "@storybook/react";
import BookControlsTooltip from "./mockProvider";
import { QueryClientProvider } from "@app/providers";

const meta = {
	component: BookControlsTooltip,
	decorators: [
		Story => (
			<QueryClientProvider>
				<Story />
			</QueryClientProvider>
		),
	],
	title: "Entities/BookControlsTooltip",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof BookControlsTooltip>;

type Story = StoryObj<typeof BookControlsTooltip>;

export const BookControlsTooltipSimple: Story = {
	args: {
		bookId: "a49Eag7Utban270gmI25",
	},
};

export default meta;
