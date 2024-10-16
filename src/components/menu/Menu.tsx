import styles from './Menu.module.css'
import Link from "next/link";
import { BiHeart, BiHomeAlt, BiSearch, BiUserCircle } from "react-icons/bi";

export const Menu = () => {
    return (
        <nav className={styles.styled_nav}>
            <ul className={styles.styled_ul}>
                <li className={styles.styled_li}>
                    <BiHomeAlt size="1.5rem" color="#38aede" />
                    <Link href="/" className={styles.styled_link}>Início</Link>
                </li>
                <li className={styles.styled_li}>
                    <BiSearch size="1.5rem" color="#38aede" />
                    <Link href="/busca" className={styles.styled_link}>Buscar</Link>
                </li>
                <li className={styles.styled_li}>
                    <BiHeart size="1.5rem" color="#38aede" />
                    <Link href="/favoritos" className={styles.styled_link}>Favoritos</Link>
                </li>
                <li className={styles.styled_li}>
                    <BiUserCircle size="1.5rem" color="#38aede" />
                    <Link href="/perfil" className={styles.styled_link}>Perfil</Link>
                </li>
            </ul>
        </nav>
    )
}