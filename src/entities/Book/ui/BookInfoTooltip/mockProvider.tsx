import { SearchQuery } from "@shared/context";
import BookInfoTooltip from "./bookInfoTooltip";
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
			<BookInfoTooltip bookId="tR8OMvusVFrGQreSG3QG" />
		</SearchQuery.Context.Provider>
	);
}
