import { useDeleteBook } from "@entities/Book/hook";
import { IBookControlsTooltipProps } from "./bookControlsTooltip.props";
import { BackdropLoader, Tooltip, UpdateDeleteControls } from "@shared/ui";
import { useModal } from "@shared/hook";
import { useState } from "react";
import { ClickAwayListener } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import styles from "./bookControlsTooltip.module.scss";
import { UpdateBookDialog } from "@features/ui";
import { useBookStore } from "@entities/Book/model";

export default function BookControlsTooltip({
	bookId,
	className = "",
}: IBookControlsTooltipProps) {
	const { mutateAsync: deleteBook, isPending, isError } = useDeleteBook();

	const { open, isShown, close } = useModal();

	const [isTooltipOpen, setIsTooltipOpen] = useState(false);

	const addNotice = useBookStore(store => store.addNotice);

	const handleDelete = async () => {
		await deleteBook(bookId);
		if (isError) {
			addNotice({
				severity: "error",
				text: "Ошибка при удалении книги",
			});
		} else {
			addNotice({
				severity: "success",
				text: "Книга удалена",
			});
		}
		setIsTooltipOpen(false);
	};

	return (
		<>
			<ClickAwayListener onClickAway={() => setIsTooltipOpen(false)}>
				<div>
					<Tooltip
						className={[styles.tooltip, className].join(" ")}
						disableFocusListener
						disableHoverListener
						disableTouchListener
						onClick={() => setIsTooltipOpen(!isTooltipOpen)}
						open={isTooltipOpen}
						icon={<MoreVert />}
					>
						<UpdateDeleteControls
							onDelete={handleDelete}
							onUpdate={() => {
								open();
								setIsTooltipOpen(false);
							}}
						/>
					</Tooltip>
				</div>
			</ClickAwayListener>
			<UpdateBookDialog open={isShown} bookId={bookId} onClose={close} />
			<BackdropLoader open={isPending} />
		</>
	);
}
