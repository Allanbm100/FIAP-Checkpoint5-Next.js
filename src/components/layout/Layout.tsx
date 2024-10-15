import { Menu } from "../../components/menu/Menu";

interface LayoutProps {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="StyledLayout">
            <main>{children}</main>
            <Menu />
        </div>
    )
}