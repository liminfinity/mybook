import type { Meta, StoryObj } from "@storybook/react";
import SnackbarNoticeList from "./snackbarNoticeList";

const meta = {
	component: SnackbarNoticeList,
	title: "Shared/SnackbarNoticeList",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof SnackbarNoticeList>;

type Story = StoryObj<typeof SnackbarNoticeList>;

export const SnackbarNoticeListSimple: Story = {
	args: {
		notices: [
			{
				id: "123",
				isOpen: true,
				text: "Привет, мир!",
			},
			{
				id: "1234",
				isOpen: true,
				text: "Привет, мир!!!",
			},
		],
	},
};

export default meta;
