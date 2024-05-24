import type { Meta, StoryObj } from "@storybook/react";
import StarRating from "./starRating";

const meta = {
	component: StarRating,
	title: "Shared/StarRating",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof StarRating>;

type Story = StoryObj<typeof StarRating>;

export const StarRatingSimple: Story = {
	args: {
		rating: 5,
	},
};

export const StarRatingWithoutRating: Story = {
	args: {},
};

export default meta;
