import { useState } from "react";

function useModal() {
	const [isShown, setIsShown] = useState(false);

	const open = () => setIsShown(true);
	const toggle = () => setIsShown(!isShown);
	const close = () => setIsShown(false);

	return { isShown, open, toggle, close };
}

export { useModal };
