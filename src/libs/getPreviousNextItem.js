const getPreviousNextItem = (items, currentId) => {
	const totalItems = items?.length;
	// Find index of current item to handle string IDs (slugs)
	const currentIndex = items?.findIndex(({ id }) => id === currentId);

	// If item not found, return empty/safe defaults
	if (currentIndex === -1) return { isPrevItem: false, isNextItem: false };

	const prevIndex = currentIndex > 0 ? currentIndex - 1 : 0;
	const nextIndex = currentIndex < totalItems - 1 ? currentIndex + 1 : totalItems - 1;

	const prevId = items[prevIndex]?.id;
	const nextId = items[nextIndex]?.id;

	const currentItem = items[currentIndex];

	const isPrevItem = currentIndex > 0;
	const isNextItem = currentIndex < totalItems - 1;

	return { prevId, nextId, currentItem, isPrevItem, isNextItem };
};

export default getPreviousNextItem;
