interface HeaderProps {
    title: string;
    userName: string;
}

export const Header = ({ title, userName }: HeaderProps) => { //TERMINAR ISSO
    const navigate = useNavigate();
    const { setUserName } = useContext(UserContext);

    const handleLogin = () => {
        navigate('/login');
    };

    const handleLogout = () => {
        sessionStorage.removeItem('userToken');
        setUserName(null);
        navigate('/login');
    };

    return (
        <header className="styled_header">
            <h1 className="styled_h1">{title}</h1>
            <div>
                {userName ? (
                    <div className="styled_div">
                        <span>{userName}</span>
                        <button className="styled_button" onClick={handleLogout}>
                            Sair
                        </button>
                    </div>
                ) : (
                    <button className="styled_button" onClick={handleLogin}>
                        Login
                    </button>
                )}
            </div>
        </header>
    );
};