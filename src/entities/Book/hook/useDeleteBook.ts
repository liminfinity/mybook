import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FirestoreBookAPI } from "../api";

const { deleteBook } = new FirestoreBookAPI();

function useDeleteBook() {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: deleteBook,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["books"],
			});
		},
	});

	return mutation;
}

export { useDeleteBook };
