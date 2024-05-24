import { createContext, useContext } from "react";

function createGenericContext<T>(defaultValue: T | null) {
	const Context = createContext<T | null>(defaultValue);

	function useGenericContext() {
		const contextValue = useContext(Context);
		if (contextValue === null) {
			throw new Error("useContext must be used within a ContextProvider");
		}
		return contextValue;
	}
	return { Context, useContext: useGenericContext };
}

export { createGenericContext };
