import Link from "next/link";
import { BiHeart, BiHomeAlt, BiSearch, BiUserCircle } from "react-icons/bi";

export const Menu = () => {
    return (
        <nav className="styled_nav">
            <ul className="styled_ul">
                <li className="styled_li">
                    <BiHomeAlt size="1.5rem" color="#38aede" />
                    <Link href="/" className="styled_link">Início</Link>
                </li>
                <li className="styled_li">
                    <BiSearch size="1.5rem" color="#38aede" />
                    <Link href="/busca" className="styled_link">Buscar</Link>
                </li>
                <li className="styled_li">
                    <BiHeart size="1.5rem" color="#38aede" />
                    <Link href="/favoritos" className="styled_link">Favoritos</Link>
                </li>
                <li className="styled_li">
                    <BiUserCircle size="1.5rem" color="#38aede" />
                    <Link href="/perfil" className="styled_link">Perfil</Link>
                </li>
            </ul>
        </nav>
    )
}