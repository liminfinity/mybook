import type { Meta, StoryObj } from "@storybook/react";
import DesktopBookHeader from "./desktopBookHeader";
import { QueryClientProvider } from "@app/providers";

const meta = {
	component: DesktopBookHeader,
	decorators: [
		Story => (
			<QueryClientProvider>
				<Story />
			</QueryClientProvider>
		),
	],
	title: "Widgets/DesktopBookHeader",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof DesktopBookHeader>;

type Story = StoryObj<typeof DesktopBookHeader>;

export const DesktopBookHeaderSimple: Story = {
	args: {},
};

export default meta;
