import type { Meta, StoryObj } from "@storybook/react";
import MobileBookHeader from "./mockProvider";

const meta = {
	component: MobileBookHeader,
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
