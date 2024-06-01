import { SearchQuery } from "@shared/context";
import BookList from "./bookList";
import { useState } from "react";
import { IBookListProps } from "./bookList.props";

export default function MockProvider(props: IBookListProps) {
	const [searchQuery, setSearchQuery] = useState("");
	return (
		<SearchQuery.Context.Provider
			value={{
				value: searchQuery,
				handleChange: e => setSearchQuery(e.target.value),
			}}
		>
			<BookList {...props} />
		</SearchQuery.Context.Provider>
	);
}
