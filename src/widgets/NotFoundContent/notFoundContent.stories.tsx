import type { Meta, StoryObj } from "@storybook/react";
import NotFoundContent from "./notFoundContent";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: NotFoundContent,
	decorators: [withRouter()],
	title: "Widgets/NotFoundContent",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof NotFoundContent>;

type Story = StoryObj<typeof NotFoundContent>;

export const NotFoundContentSimple: Story = {
	args: {},
};

export default meta;
