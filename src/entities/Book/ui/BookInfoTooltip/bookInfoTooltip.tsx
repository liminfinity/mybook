import { useBookById } from "@entities/Book/hook";
import { IBookInfoTooltipProps } from "./bookInfoTooltip.props";
import { Tooltip } from "@shared/ui";
import styles from "./bookInfoTooltip.module.scss";
import { Desktop, Mobile } from "@shared/hoc";
import { useState } from "react";
import { ClickAwayListener } from "@mui/material";

export default function BookInfoTooltip({
	bookId,
	className = "",
}: IBookInfoTooltipProps) {
	const book = useBookById(bookId);

	const [isTooltipOpen, setIsTooltipOpen] = useState(false);

	if (!book) return null;

	const { ISBN, publicationYear } = book;

	return (
		<>
			<Mobile>
				<ClickAwayListener onClickAway={() => setIsTooltipOpen(false)}>
					<div>
						<Tooltip
							disableFocusListener
							disableHoverListener
							disableTouchListener
							onClick={() => setIsTooltipOpen(!isTooltipOpen)}
							open={isTooltipOpen}
							className={className}
						>
							<ul className={styles.content}>
								{publicationYear && (
									<li>Год публикации: {publicationYear}</li>
								)}
								{ISBN && <li>ISBN: {ISBN}</li>}
							</ul>
						</Tooltip>
					</div>
				</ClickAwayListener>
			</Mobile>
			<Desktop>
				<Tooltip className={className}>
					<ul className={styles.content}>
						{publicationYear && (
							<li>Год публикации: {publicationYear}</li>
						)}
						{ISBN && <li>ISBN: {ISBN}</li>}
					</ul>
				</Tooltip>
			</Desktop>
		</>
	);
}
