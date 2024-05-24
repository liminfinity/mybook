import { Button } from "@mui/material";
import { useModal } from "@shared/hook";

export default function AddBookButton() {
	const { open } = useModal();

	return (
		<>
			<Button variant="contained" onClick={() => open()}>
				Добавить книгу
			</Button>
		</>
	);
}
