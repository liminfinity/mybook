import type { Meta, StoryObj } from "@storybook/react";
import BookList from "./mockProvider";
import { QueryClientProvider } from "@app/providers";

const meta = {
	component: BookList,
	title: "Entities/BookList",
	tags: ["autodocs"],
	decorators: [
		Story => (
			<QueryClientProvider>
				<Story />
			</QueryClientProvider>
		),
	],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof BookList>;

type Story = StoryObj<typeof BookList>;

export const BookListSimple: Story = {
	args: {
		books: [
			{
				id: "a49Eag7Utban270gmI25",
				title: "Идеальный программист. Как стать профессионалом разработки ПО",
				authors: [{ name: "Роберт Мартин" }],
				ISBN: "978-5-459-01044-2",
				rating: 5,
				publicationYear: 2011,
			},
			{
				id: "a49Eag7Utban270gmI25",
				title: "Идеальный программист. Как стать профессионалом разработки ПО",
				authors: [{ name: "Роберт Мартин" }],
				ISBN: "978-5-459-01044-2",
				rating: 5,
				publicationYear: 2011,
			},
			{
				id: "a49Eag7Utban270gmI25",
				title: "Идеальный программист. Как стать профессионалом разработки ПО",
				authors: [{ name: "Роберт Мартин" }],
				ISBN: "978-5-459-01044-2",
				rating: 5,
				publicationYear: 2011,
			},
			{
				id: "a49Eag7Utban270gmI25",
				title: "Идеальный программист. Как стать профессионалом разработки ПО",
				authors: [{ name: "Роберт Мартин" }],
				ISBN: "978-5-459-01044-2",
				rating: 5,
				publicationYear: 2011,
			},
		],
	},
};

export default meta;
