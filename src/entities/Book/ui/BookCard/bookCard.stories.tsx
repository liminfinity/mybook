import type { Meta, StoryObj } from "@storybook/react";
import BookCard from "./mockProvider";
import { QueryClientProvider } from "@app/providers";

const meta = {
	component: BookCard,
	decorators: [
		Story => (
			<QueryClientProvider>
				<Story />
			</QueryClientProvider>
		),
	],
	title: "Entities/BookCard",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof BookCard>;

type Story = StoryObj<typeof BookCard>;

export const BookCardSimple: Story = {
	args: {
		id: "a49Eag7Utban270gmI25",
		title: "Идеальный программист. Как стать профессионалом разработки ПО",
		authors: [{ name: "Роберт Мартин" }],
		ISBN: "978-5-459-01044-2",
		rating: 5,
		publicationYear: 2011,
	},
};

export default meta;
