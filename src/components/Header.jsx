const links = [
    {
        id: 1,
        href: "#",
        label: "Characters",
        current: false,
    },
    {
        id: 2,
        href: "#",
        label: "Comics",
        current: true,
    },
    {
        id: 3,
        href: "#",
        label: "Movies",
        current: false,
    },
    {
        id: 4,
        href: "#",
        label: "TV",
        current: false,
    },
    {
        id: 4,
        href: "#",
        label: "Games",
        current: false,
    },
    {
        id: 4,
        href: "#",
        label: "Collectibles",
        current: false,
    },
    {
        id: 4,
        href: "#",
        label: "Videos",
        current: false,
    },
    {
        id: 4,
        href: "#",
        label: "Fans",
        current: false,
    },
    {
        id: 4,
        href: "#",
        label: "News",
        current: false,
    },
    {
        id: 4,
        href: "#",
        label: "Shop",
        current: false,
    }
]

const Header = () => {
    return <header className="container">
        <figure>
            <img className="logo" src="./src/assets/img/dc-logo.png" alt="DC Comics Logo" />
        </figure>
        <nav className="navbar">
            <ul className="nav-list">
                {links.map((link) => (
                    <li key={link.id} className={`nav-item ${link.current ? 'active' : ''}`}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
}

export default Header;