import { useState, useCallback } from 'react';

export const useFetch = <T, P>(fetchFn: (arg: P) => Promise<T>) => {
const [data, setData] = useState<T | null>(null);
const [loading, setLoading] = useState<boolean>(false);
const [error, setError] = useState<string | null>(null);
const [wasSearched, setWasSearched] = useState<boolean>(false);

const execute = useCallback(async (param: P) => {
    setLoading(true);
    setWasSearched(true);
    setError(null);
    try {
        const result = await fetchFn(param);
        setData(result);
        return result;
    } 
    catch (err: any) {
        setError(err.message || "Error");
        setData(null);
        throw err;
    } 
    finally {
        setLoading(false);
    }
}, [fetchFn]);

const reset = useCallback(() => {
    setData(null);
    setLoading(false);
    setError(null);
    setWasSearched(false);
}, []);

return { data, loading, error, wasSearched, execute, reset };
};