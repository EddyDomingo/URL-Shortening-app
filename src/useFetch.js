import { useState, useEffect} from 'react';

const useFetch = (fullUrl) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch(fullUrl)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data.result.short_link);
            setIsPending(false);
        })
    }, [fullUrl]);

    return{data, isPending}
}

export default useFetch;