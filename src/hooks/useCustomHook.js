import { useEffect, useState } from 'react';


export const useCustomHook = (url) => {
    const [data, setData] = useState();
    useEffect(() => {
        setData(url);
        console.log('useCustomHook');
    }, [url])
    return data;
}