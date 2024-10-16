import styles from './Button.module.css'

interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
};

export const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <button className={styles.styled_button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
