import {
	Box,
	Button,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
	Rating,
	TextField,
	Typography,
} from "@mui/material";
import styles from "./bookFormDialog.module.scss";
import { IBookFormDialogProps, InputBookForm } from "./bookFormDialog.props";
import { Controller, useFieldArray, useForm } from "react-hook-form";

import { BookSchema } from "@entities/Book/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Close } from "@mui/icons-material";
import { useEffect } from "react";

export default function BookFormDialog({
	onSubmit,
	open,
	onClose,
	title = "Форма книги",
	submitLabel = "Отправить",
	defaultValues = {
		title: "",
		authors: [{ name: "" }],
	},
}: IBookFormDialogProps) {
	const { reset, register, handleSubmit, formState, control } =
		useForm<InputBookForm>({
			defaultValues: {
				...defaultValues,
				rating: defaultValues.rating?.toString() || "0",
			},
			shouldUseNativeValidation: false,
			shouldUnregister: true,
			mode: "onChange",
			resolver: zodResolver(BookSchema),
		});

	const { errors, isDirty, isSubmitting, isSubmitSuccessful } = formState;

	useEffect(() => {
		if (isSubmitSuccessful) reset();
	}, [isSubmitSuccessful, reset]);

	const {
		fields: authorFields,
		append,
		remove,
	} = useFieldArray({
		name: "authors",
		control,
	});

	return (
		<Dialog
			open={open}
			onClose={onClose}
			PaperProps={{
				component: "form",
				onSubmit: handleSubmit(onSubmit),
				className: styles.form,
			}}
		>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent className={styles.content}>
				<TextField
					{...register("title")}
					label="Название"
					variant="standard"
					required
					error={!!errors.title}
					helperText={errors.title?.message}
					fullWidth
					autoComplete="off"
				/>
				<Box className={styles.authorsContainer}>
					<fieldset className={styles.authors}>
						{authorFields.map((field, idx) => {
							return (
								<Box key={field.id} className={styles.author}>
									<TextField
										{...register(`authors.${idx}.name`)}
										label={`Автор ${idx + 1}`}
										variant="standard"
										required={!idx}
										fullWidth
										autoComplete="off"
									/>
									{!!idx && (
										<IconButton
											className={styles.deleteAuthor}
											onClick={() => remove(idx)}
										>
											<Close color="primary" />
										</IconButton>
									)}
								</Box>
							);
						})}
					</fieldset>
					<Button
						size="small"
						variant="contained"
						className={styles.addAuthor}
						onClick={() =>
							append({ name: "" }, { shouldFocus: true })
						}
					>
						Добавить автора
					</Button>
				</Box>
				<TextField
					{...register("publicationYear", {
						valueAsNumber: true,
						shouldUnregister: true,
					})}
					label="Год публикации"
					variant="standard"
					type="number"
					error={!!errors.publicationYear}
					helperText={errors.publicationYear?.message}
					fullWidth
					autoComplete="off"
				/>
				<label className={styles.ratingContainer}>
					<Typography variant="subtitle1" component="span">
						Рейтинг
					</Typography>
					<Controller
						name="rating"
						control={control}
						render={({ field }) => (
							<Rating
								{...field}
								value={+field.value}
								max={10}
								className={styles.rating}
							/>
						)}
					/>
				</label>
				<TextField
					{...register("ISBN", {
						shouldUnregister: true,
					})}
					label="ISBN"
					variant="standard"
					error={!!errors.ISBN}
					helperText={errors.ISBN?.message}
					fullWidth
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Отменить</Button>
				<Button type="reset" onClick={() => reset()}>
					Сбросить
				</Button>
				<Button
					type="submit"
					variant="contained"
					disabled={!isDirty || isSubmitting}
				>
					{submitLabel}
				</Button>
			</DialogActions>
			{isSubmitting && (
				<Box className={styles.progressContainer}>
					<CircularProgress />
				</Box>
			)}
		</Dialog>
	);
}
