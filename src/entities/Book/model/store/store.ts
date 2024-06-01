import { IBookStore } from "@entities/Book/types";
import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";

const BookStore: StateCreator<IBookStore> = set => ({
	groupBy: undefined,
	setGroupBy: groupBy => set({ groupBy }),
});

const PersistedBookStore = persist(BookStore, {
	name: "BookState",
	partialize: persistedState => ({ groupBy: persistedState.groupBy }),
});

const useBookStore = create<IBookStore>()(PersistedBookStore);

export { useBookStore };
