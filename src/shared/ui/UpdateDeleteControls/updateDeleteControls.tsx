import { IUpdateDeleteControlsProps } from "./updateDeleteControls.props";
import { Delete, Edit } from "@mui/icons-material";
import { Button, ButtonGroup } from "@mui/material";
import styles from "./updateDeleteControls.module.scss";

export default function UpdateDeleteControls({
	onDelete,
	onUpdate,
	className = "",
}: IUpdateDeleteControlsProps) {
	return (
		<ButtonGroup orientation="vertical" className={className}>
			<Button
				variant="contained"
				className={styles.btn}
				onClick={onUpdate}
			>
				<Edit />
				<span>Изменить</span>
			</Button>
			<Button
				variant="contained"
				className={styles.btn}
				onClick={onDelete}
			>
				<Delete />
				<span>Удалить</span>
			</Button>
		</ButtonGroup>
	);
}
