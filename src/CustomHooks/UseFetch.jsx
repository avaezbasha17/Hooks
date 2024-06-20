import React, { useEffect, useState } from 'react'

const UseFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(result => setData(result))
            .catch(error => setError(error))
    }, [url]);
    return {data,error}
}

export default UseFetch