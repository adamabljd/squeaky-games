import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="site-header">
            <nav aria-label="Main navigation">
                <Link href="/" className="site-wordmark">Squeaky Games</Link>
            </nav>
        </header>
    );
}
