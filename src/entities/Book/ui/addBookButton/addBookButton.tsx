import { CreateBookDialog } from "@features/ui";
import { Button } from "@mui/material";
import { useModal } from "@shared/hook";

export default function AddBookButton() {
	const { toggle, close, isShown } = useModal();

	return (
		<>
			<Button variant="contained" onClick={() => toggle()}>
				Добавить книгу
			</Button>
			<CreateBookDialog open={isShown} onClose={close} />
		</>
	);
}
