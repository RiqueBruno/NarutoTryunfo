import { cards } from "./Cards";

export const setCollectionCards = (name, arr) => {
    localStorage.setItem(name, JSON.stringify(arr));
}

export const getCollectionCards = (name) => {
    let collection = JSON.parse(localStorage.getItem(name));
    if(!collection) {
        setCollectionCards(name, cards);
        collection = [...cards]
    }
    return collection;
}

export const getRank = (name) => {
    const collection = JSON.parse(localStorage.getItem(name)) || [];
    if(collection.length === 0) {
        setCollectionCards(name, collection);
    }
    return collection;
}

export default {
    getCollectionCards,
    setCollectionCards,
    getRank
};