import '../../styles/nav.css'


export default function Nav() {
    return (
        <nav className="nav">
            <a href="/"><span className="nav-logo"></span></a>
            <ul className="nav-list">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href={`/headphones/`}>Headphones</a>
                </li>
                <li>
                    <a href={`/speakers/`}>Speakers</a>
                </li>
                <li>
                    <a href={`/earphones/`}>Earphones</a>
                </li>
            </ul>
            <a href={`/cart/`}><span className="cart-icon"></span></a>
        </nav>
    )
}