import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FirestoreBookAPI } from "../api";

const { createBook } = new FirestoreBookAPI();

function useCreateBook() {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: createBook,
		onSettled: () => {
			queryClient.invalidateQueries({
				queryKey: ["books"],
			});
		},
	});

	return mutation;
}

export { useCreateBook };
