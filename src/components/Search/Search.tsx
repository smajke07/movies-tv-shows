import styles from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/pro-light-svg-icons";
import { useRef } from "react";

interface SearchProps {
  query: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Search = ({ query, onChange }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  
  return (
    <div className={styles['wrapper']}>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={styles['search--icon']}
        onClick={focusInput}
      />

      <input
        ref={inputRef}
        placeholder='Search'
        value={query}
        onChange={onChange}
        className={styles['input']}
      />
    </div>
  )
}

export default Search;
