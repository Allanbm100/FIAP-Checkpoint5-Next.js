import styles from './Layout.module.css'
import { Menu } from "../../components/menu/Menu";

interface LayoutProps {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.StyledLayout}>
            <main>{children}</main>
            <Menu />
        </div>
    )
}