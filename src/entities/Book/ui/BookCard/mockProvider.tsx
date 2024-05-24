import QueryClientProvider from "@app/providers/withQueryClient";
import BookCard from "./bookCard";

export default function mockProvider() {
	return (
		<QueryClientProvider>
			<BookCard
				id="kH8LCGmEKh9iAnzAcM9L"
				title="Идеальный программист. Как стать профессионалом разработки ПО"
				authors={["Роберт Мартин"]}
				ISBN="978-5-459-01044-2"
				rating={5}
				publicationYear={2011}
			/>
		</QueryClientProvider>
	);
}
