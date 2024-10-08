export const shuffleCollection = (arr) => {
    const collection = arr.slice();
    for (let i = collection.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [collection[i], collection[j]] = [collection[j], collection[i]];
    }
    return collection;
};