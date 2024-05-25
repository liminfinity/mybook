import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useModal } from "@shared/hook";
import { IAddBookFabProps } from "./addBookFab.props";
import { CreateBookDialog } from "@features/ui";

export default function AddBookFab({ className = "" }: IAddBookFabProps) {
	const { toggle, close, isShown } = useModal();

	return (
		<>
			<Fab
				className={className}
				color="secondary"
				aria-label="Добавить книгу"
				onClick={() => toggle()}
			>
				<Add />
			</Fab>
			<CreateBookDialog open={isShown} onClose={close} />
		</>
	);
}
