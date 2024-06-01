import { SearchQuery } from "@shared/context";
import BookControlsTooltip from "./bookControlsTooltip";
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
			<BookControlsTooltip bookId="tR8OMvusVFrGQreSG3QG" />
		</SearchQuery.Context.Provider>
	);
}
