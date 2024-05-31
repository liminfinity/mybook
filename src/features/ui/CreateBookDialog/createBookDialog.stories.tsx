import type { Meta, StoryObj } from "@storybook/react";
import CreateBookDialog from "./createBookDialog";
import { QueryClientProvider } from "@app/providers";

const meta = {
	component: CreateBookDialog,
	decorators: [
		Story => (
			<QueryClientProvider>
				<Story />
			</QueryClientProvider>
		),
	],
	title: "Features/CreateBookDialog",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof CreateBookDialog>;

type Story = StoryObj<typeof CreateBookDialog>;

export const CreateBookDialogSimple: Story = {
	args: {
		open: true,
	},
};

export default meta;
