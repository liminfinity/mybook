import { IQueryContext } from "@features/types";
import { createGenericContext } from "@shared/lib";

const { Context, useContext } = createGenericContext<IQueryContext>(null);

export { Context, useContext };
