import { useState, useContext, createContext, useEffect, memo } from 'react';

const WindowWidthContext = createContext();

export const useWindowWidth = () => {
    return useContext(WindowWidthContext);
};

export const WindowWidthProvider = ({children}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const value = [windowWidth, setWindowWidth];

    return (
        <WindowWidthContext.Provider value={value}>
            {children}
        </WindowWidthContext.Provider>
    );
};
