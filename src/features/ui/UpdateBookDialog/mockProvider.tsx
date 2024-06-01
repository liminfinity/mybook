import { SearchQuery } from "@shared/context";
import UpdateBookDialog from "./updateBookDialog";
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
			<UpdateBookDialog open bookId="tR8OMvusVFrGQreSG3QG" />
		</SearchQuery.Context.Provider>
	);
}
