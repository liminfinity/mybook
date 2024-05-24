import { useDeleteBook } from "@entities/Book/hook";
import { IBookControlsTooltipProps } from "./bookControlsTooltip.props";
import { Tooltip, UpdateDeleteControls } from "@shared/ui";
import { useModal } from "@shared/hook";
import { useState } from "react";
import { ClickAwayListener } from "@mui/material";
import { MoreVert } from "@mui/icons-material";

export default function BookControlsTooltip({
	bookId,
	className = "",
}: IBookControlsTooltipProps) {
	const { mutate: deleteBook } = useDeleteBook();

	const { open } = useModal();

	const [isTooltipOpen, setIsTooltipOpen] = useState(false);

	return (
		<>
			<ClickAwayListener onClickAway={() => setIsTooltipOpen(false)}>
				<div>
					<Tooltip
						className={className}
						disableFocusListener
						disableHoverListener
						disableTouchListener
						onClick={() => setIsTooltipOpen(!isTooltipOpen)}
						open={isTooltipOpen}
						icon={<MoreVert />}
					>
						<UpdateDeleteControls
							onDelete={() => deleteBook(bookId)}
							onUpdate={() => open()}
						/>
					</Tooltip>
				</div>
			</ClickAwayListener>
		</>
	);
}
