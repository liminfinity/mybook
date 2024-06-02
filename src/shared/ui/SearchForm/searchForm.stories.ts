import type { Meta, StoryObj } from "@storybook/react";
import SearchForm from "./searchForm";

const meta = {
	component: SearchForm,
	title: "Shared/SearchForm",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof SearchForm>;

type Story = StoryObj<typeof SearchForm>;

export const SearchFormSimple: Story = {
	args: {},
};

export default meta;
