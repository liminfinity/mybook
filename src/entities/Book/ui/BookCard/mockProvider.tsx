import { SearchQuery } from "@shared/context";
import BookCard from "./bookCard";
import { useState } from "react";
import { IBookCardProps } from "./bookCard.props";

export default function MockProvider(props: IBookCardProps) {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<SearchQuery.Context.Provider
			value={{
				value: searchQuery,
				handleChange: e => setSearchQuery(e.target.value),
			}}
		>
			<BookCard {...props} />
		</SearchQuery.Context.Provider>
	);
}
