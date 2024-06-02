import type { Meta, StoryObj } from "@storybook/react";
import SnackbarNotice from "./snackbarNotice";

const meta = {
	component: SnackbarNotice,
	title: "Shared/SnackbarNotice",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof SnackbarNotice>;

type Story = StoryObj<typeof SnackbarNotice>;

export const SnackbarNoticeSimple: Story = {
	args: {
		open: true,
		children: "Отзыв отправлен!",
		severity: "success",
	},
};

export default meta;
