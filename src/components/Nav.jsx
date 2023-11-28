import '../styles/nav.css'


export default function Nav() {
    return (
        <nav className="nav">
            <span className="nav-logo"></span>
            <ul className="nav-list">
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Headphones</a>
                </li>
                <li>
                    <a href="">Speakers</a>
                </li>
                <li>
                    <a href="">Earphones</a>
                </li>
            </ul>
            <span className="cart-icon"></span>
        </nav>
    )
}