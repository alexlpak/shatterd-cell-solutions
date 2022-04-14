import React, { useContext, createContext, useState, useEffect } from 'react';

const FormContext = createContext();

export const useForm = () => {
    return useContext(FormContext);
};

export const FormProvider = ({children}) => {
    const [data, setData] = useState({});

    const value = [data, setData];

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );

};
