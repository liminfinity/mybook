import { SearchQuery } from "@shared/context";
import SearchForm from "./searchForm";
import { useState } from "react";

export default function MockProvider() {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<SearchQuery.Context.Provider
			value={{
				value: searchQuery,
				handleChange: e => setSearchQuery(e.target.value),
			}}
		>
			<SearchForm onSubmit={e => e.preventDefault()} />
		</SearchQuery.Context.Provider>
	);
}
