import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FirestoreBookAPI } from "../api";

const { updateBook } = new FirestoreBookAPI();

function useUpdateBook() {
	const queryClient = useQueryClient();
	const mutation = useMutation<void, Error, Parameters<typeof updateBook>>({
		mutationFn: params => updateBook(...params),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["books"],
			});
		},
	});

	return mutation;
}

export { useUpdateBook };
