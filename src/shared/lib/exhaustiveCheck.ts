function exhaustiveCheck(param: never) {
	throw new Error(`Exhaustive check. Param: ${param}. Should not reach here`);
}

export { exhaustiveCheck };
