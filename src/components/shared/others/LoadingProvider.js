"use client";
import React, { createContext, useContext, useState, useEffect } from "react";


const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    // We add a minDuration check if needed, but for now just simple state
    const setLoading = (state) => {
        setIsLoading(state);
    };

    return (
        <LoadingContext.Provider value={{ isLoading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error("useLoading must be used within a LoadingProvider");
    }
    return context;
};
