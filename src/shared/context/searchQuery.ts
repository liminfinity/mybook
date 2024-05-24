import { ISearchQueryContext } from "@shared/types";
import { createGenericContext } from "@shared/lib";

const { Context, useContext } = createGenericContext<ISearchQueryContext>(null);

export { Context, useContext };
