import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useModal } from "@shared/hook";
import { IAddBookFabProps } from "./addBookFab.props";

export default function AddBookFab({ className = "" }: IAddBookFabProps) {
	const { open } = useModal();

	return (
		<>
			<Fab
				className={className}
				color="secondary"
				aria-label="Добавить книгу"
				onClick={() => open()}
			>
				<Add />
			</Fab>
		</>
	);
}
