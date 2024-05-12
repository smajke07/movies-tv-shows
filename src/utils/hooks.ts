import { useEffect, useState } from "react";

export const useDebounce = (cb: string, delay: number) => {
    const [debounceValue, setDebounceValue] = useState(cb);
    
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebounceValue(cb);
      }, delay);
  
      return () => {
        clearTimeout(handler);
      };
    }, [cb, delay]);

    return debounceValue;
}
