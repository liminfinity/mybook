import { ChangeEventHandler } from "react";

interface IFormControlContext<T, P extends HTMLElement> {
	value: T;
	handleChange: ChangeEventHandler<P>;
}

export type { IFormControlContext };
