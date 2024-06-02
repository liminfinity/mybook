import { IBookStore } from "@entities/Book/types";
import { nanoid } from "nanoid";
import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";

const BookStore: StateCreator<IBookStore> = set => ({
	groupBy: undefined,
	setGroupBy: groupBy => set({ groupBy }),

	searchQuery: "",
	setSearchQuery: searchQuery => set({ searchQuery }),

	notices: [],
	addNotice: newNotice =>
		set(store => {
			return {
				notices: [
					...store.notices,
					{
						...newNotice,
						isOpen: true,
						id: nanoid(10),
					},
				],
			};
		}),
	deleteNotice: noticeId =>
		set(store => {
			return {
				notices: store.notices.filter(notice => notice.id !== noticeId),
			};
		}),
	toggleNotice: noticeId =>
		set(store => {
			return {
				notices: store.notices.map(notice => {
					if (notice.id === noticeId) {
						return { ...notice, isOpen: !notice.isOpen };
					} else return notice;
				}),
			};
		}),
});

const PersistedBookStore = persist(BookStore, {
	name: "BookState",
	partialize: persistedState => ({ groupBy: persistedState.groupBy }),
});

const useBookStore = create<IBookStore>()(PersistedBookStore);

export { useBookStore };
