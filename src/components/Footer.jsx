import '../styles/footer.css';
import FacebookLogo from '../assets/shared/desktop/icon-facebook.svg?react';
import TwitterLogo from '../assets/shared/desktop/icon-twitter.svg?react';
import InstagramLogo from '../assets/shared/desktop/icon-instagram.svg?react';

export default function Footer() {
    return (
        <footer className="footer">
            <nav className="footer-nav">
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
            </nav>
            <div className="footer-info">
                <p className="footer-info-mission-statement">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                <ul className="socials-list">
                    <li>
                        <a href="https://www.facebook.com" target="_blank"><FacebookLogo/></a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank"><TwitterLogo/></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" target="_blank"><InstagramLogo/></a>
                    </li>
                </ul>
            </div>
            <p className="footer-legal-copyright">Copyright 2021. All Rights Reserved</p>
        </footer>
    )
}