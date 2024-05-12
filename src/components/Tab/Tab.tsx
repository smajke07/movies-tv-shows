import styles from './Tab.module.css';

interface TabProps {
  label: string;
  active: boolean;
  withLeftBorder: boolean;
  onClick: () => void;
}

const Tab = ({ label, active, withLeftBorder, onClick }: TabProps) => {
  return (
    <div
      className={`${styles['wrapper']} ${active && styles['active']} ${withLeftBorder && styles['with--left--border']}`}
      onClick={onClick}
    >
      <span className={styles['label']}>{label}</span>
    </div>
  )
}

export default Tab;
