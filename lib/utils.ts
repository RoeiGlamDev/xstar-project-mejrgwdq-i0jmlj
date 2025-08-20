import React from 'react';

// Utility function to format currency
export const formatCurrency = (amount: number): string => {
    return `$${amount.toFixed(2)}`; // Formats amount to currency
};

// Utility function to capitalize first letter of each word
export const capitalizeWords = (str: string): string => {
    return str.replace(/\b\w/g, char => char.toUpperCase()); // Capitalizes first letter of each word
};

// Utility function to generate a unique ID
export const generateUniqueId = (): string => {
    return 'id-' + Math.random().toString(36).substr(2, 16); // Generates a unique ID
};

// Utility function to check if a string is empty
export const isEmpty = (str: string): boolean => {
    return !str.trim().length; // Returns true if string is empty
};

// Utility function to debounce a function
export const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
        if (timeoutId) clearTimeout(timeoutId); // Clears previous timeout
        timeoutId = setTimeout(() => {
            func(...args); // Calls the function after delay
        }, delay);
    };
};

export default {
    formatCurrency,
    capitalizeWords,
    generateUniqueId,
    isEmpty,
    debounce,
};