import QueryClientProvider from "@app/providers/withQueryClient";
import BookCard from "./bookCard";

export default function mockProvider() {
	return (
		<QueryClientProvider>
			<BookCard
				id="a49Eag7Utban270gmI25"
				title="Идеальный программист. Как стать профессионалом разработки ПО"
				authors={[{ name: "Роберт Мартин" }]}
				ISBN="978-5-459-01044-2"
				rating={5}
				publicationYear={2011}
			/>
		</QueryClientProvider>
	);
}
