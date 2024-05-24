import type { Meta, StoryObj } from "@storybook/react";
import DesktopBookHeader from "./mockProvider";

const meta = {
	component: DesktopBookHeader,
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
