import type { Meta, StoryObj } from "@storybook/react";
import Сaption from "./caption";

const meta = {
	component: Сaption,
	title: "Shared/Сaption",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Сaption>;

type Story = StoryObj<typeof Сaption>;

export const CaptionSimple: Story = {
	args: {
		children: "Привет, мир!",
	},
};

export default meta;
