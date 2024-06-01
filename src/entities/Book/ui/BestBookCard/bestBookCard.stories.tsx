import type { Meta, StoryObj } from "@storybook/react";
import BestBookCard from "./bestBookCard";
import { QueryClientProvider } from "@app/providers";

const meta = {
	component: BestBookCard,
	decorators: [
		Story => (
			<QueryClientProvider>
				<Story />
			</QueryClientProvider>
		),
	],
	title: "Entities/BestBookCard",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof BestBookCard>;

type Story = StoryObj<typeof BestBookCard>;

export const BestBookCardSimple: Story = {
	args: {},
};

export default meta;
