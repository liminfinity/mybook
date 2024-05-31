import type { Meta, StoryObj } from "@storybook/react";
import Image from "./image";

const meta = {
	component: Image,
	title: "Shared/Image",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Image>;

type Story = StoryObj<typeof Image>;

export const ImageSimple: Story = {
	args: {
		src: "/404Girl.png",
		width: 150,
	},
};

export default meta;
