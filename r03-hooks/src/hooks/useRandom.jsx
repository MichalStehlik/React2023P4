import {useEffect, useState} from "react";

export const useRandom = (min = 0, max = 6) => {
    const [random, setRandom] = useState(0);
    useEffect(() => {
        setRandom( Math.floor(Math.random() * (max - min) ) + min);
    }, [min, max])
    return random;
}

export default useRandom;