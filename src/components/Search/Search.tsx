import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/pro-light-svg-icons';
import styles from './Search.module.css';
import { useRef } from 'react';

interface SearchProps {
  query: string;
  setQuery: (query: string) => void;
}

const Search = ({ query, setQuery }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  
  return (
    <div className={styles['wrapper']}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styles['search--icon']} onClick={focusInput} />
      <input ref={inputRef} placeholder='Search' value={query} onChange={(e) => setQuery(e.target.value)} className={styles['input']} />
    </div>
  )
}

export default Search;
