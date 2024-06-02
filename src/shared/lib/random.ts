function random(min = 0, max = 1) {
	return Math.round(Math.random() * (max - min) + min);
}

export { random };
