import type { Meta, StoryObj } from "@storybook/react";
import MobileBookHeader from "./mobileBookHeader";
import { QueryClientProvider } from "@app/providers";

const meta = {
	component: MobileBookHeader,
	decorators: [
		Story => (
			<QueryClientProvider>
				<Story />
			</QueryClientProvider>
		),
	],

	title: "Widgets/MobileBookHeader",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof MobileBookHeader>;

type Story = StoryObj<typeof MobileBookHeader>;

export const MobileBookHeaderSimple: Story = {
	args: {},
};

export default meta;
