import { useBookById } from "@entities/Book/hook";
import { IBookInfoTooltipProps } from "./bookInfoTooltip.props";
import { Tooltip } from "@shared/ui";

export default function BookInfoTooltip({
	bookId,
	className = "",
}: IBookInfoTooltipProps) {
	const book = useBookById(bookId);

	if (!book) return null;

	const { ISBN, publicationYear } = book;

	return (
		<>
			<Tooltip className={className}>
				<ul>
					{publicationYear && (
						<li>Год публикации: {publicationYear}</li>
					)}
					{ISBN && <li>ISBN: {ISBN}</li>}
				</ul>
			</Tooltip>
		</>
	);
}
