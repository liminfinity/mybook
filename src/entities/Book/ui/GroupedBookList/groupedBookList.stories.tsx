import type { Meta, StoryObj } from "@storybook/react";
import GroupedBookList from "./groupedBookList";
import { QueryClientProvider } from "@app/providers";

const meta = {
	component: GroupedBookList,
	title: "Entities/GroupedBookList",
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
} satisfies Meta<typeof GroupedBookList>;

type Story = StoryObj<typeof GroupedBookList>;

export const GroupedBookListSimple: Story = {
	args: {
		groupedBooks: [
			[
				"5",
				[
					{
						id: "a49Eag7Utban270gmI25",
						title: "Идеальный программист. Как стать профессионалом разработки ПО",
						authors: [{ name: "Роберт Мартин" }],
						ISBN: "978-5-459-01044-2",
						rating: 5,
						publicationYear: 2011,
					},
					{
						id: "tR8OMvusVFrGQreSG3QG",
						title: "Практическое руководство по винокурению",
						authors: [{ name: "Павел Иевлев" }],
						ISBN: "978-5-04-088830-6",
						rating: 5,
						publicationYear: 2022,
					},
				],
			],
			[
				"6",
				[
					{
						id: "a49Eag7Utban270gmI25",
						title: "Идеальный программист. Как стать профессионалом разработки ПО",
						authors: [{ name: "Роберт Мартин" }],
						ISBN: "978-5-459-01044-2",
						rating: 6,
						publicationYear: 2011,
					},
				],
			],
		],
	},
};

export default meta;
