const Nav = ({ headerNav = true }) => {
    return (
        <nav>
            <ul className="flex justify-between">
                {!headerNav && <li><a>Home</a></li>}
                <li><a>Women's</a></li>
                <li><a>Men's</a></li>
                <li><a>On the Street</a></li>
                <li><a>The Catwalk</a></li>
                <li><a>AdWatch</a></li>
                <li><a>About</a></li>
            </ul>
        </nav>
    )
}



export default Nav;
