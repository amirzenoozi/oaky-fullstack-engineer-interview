const isInt = (n: number): boolean => {
	return n % 1 === 0;
}

const isFloat = (n: number): boolean => {
	return Number(n) === n && n % 1 !== 0;
}

const priceParser = (price: number) => {
	if (isInt(price)) {
		return `${price},-`;
	}
	return price
};

export {
	isInt,
	isFloat,
	priceParser,
}
