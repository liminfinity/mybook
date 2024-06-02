import type { Meta, StoryObj } from "@storybook/react";
import UpdateBookDialog from "./updateBookDialog";
import { QueryClientProvider } from "@app/providers";

const meta = {
	component: UpdateBookDialog,
	decorators: [
		Story => (
			<QueryClientProvider>
				<Story />
			</QueryClientProvider>
		),
	],

	title: "Features/UpdateBookDialog",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof UpdateBookDialog>;

type Story = StoryObj<typeof UpdateBookDialog>;

export const UpdateBookDialogSimple: Story = {
	args: {
		open: true,
		bookId: "a49Eag7Utban270gmI25",
	},
};

export default meta;
