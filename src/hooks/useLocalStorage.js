import { useState, useEffect } from 'react';

export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        const fetchedItem = localStorage.getItem(key);
        if (fetchedItem) {
            return JSON.parse(fetchedItem);
        }
        else return defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
};