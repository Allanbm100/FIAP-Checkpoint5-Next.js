"use client"

import styles from './Header.module.css'
import UserContext from "../../context/UserContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

interface HeaderProps {
    title: string;
    userName: string;
}

export const Header = ({ title, userName }: HeaderProps) => {
    const router = useRouter();
    const { setUserName } = useContext(UserContext);

    const handleLogin = () => {
        router.push('/login');
    };

    const handleLogout = () => {
        sessionStorage.removeItem('userToken');
        setUserName(null);
        router.push('/login');
    };

    return (
        <header className={styles.styled_header}>
            <h1 className={styles.styled_h1}>{title}</h1>
            <div>
                {userName ? (
                    <div className={styles.styled_div}>
                        <span>{userName}</span>
                        <button className={styles.styled_button} onClick={handleLogout}>
                            Sair
                        </button>
                    </div>
                ) : (
                    <button className={styles.styled_button} onClick={handleLogin}>
                        Login
                    </button>
                )}
            </div>
        </header>
    );
};