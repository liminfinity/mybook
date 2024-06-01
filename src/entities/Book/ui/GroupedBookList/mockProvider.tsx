import { SearchQuery } from "@shared/context";
import GroupedBookList from "./groupedBookList";
import { useState } from "react";
import { IGroupedBookListProps } from "./groupedBookList.props";

export default function MockProvider(props: IGroupedBookListProps) {
	const [searchQuery, setSearchQuery] = useState("");
	return (
		<SearchQuery.Context.Provider
			value={{
				value: searchQuery,
				handleChange: e => setSearchQuery(e.target.value),
			}}
		>
			<GroupedBookList {...props} />
		</SearchQuery.Context.Provider>
	);
}
