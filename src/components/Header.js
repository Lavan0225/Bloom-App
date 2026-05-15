import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <Link href="/" className="logo">bloom</Link>
            
            <nav>
                <Link href="/#hero">Features</Link>
                <Link href="/#testimonials">Testimonials</Link>
                <Link href="/#how-it-works">How it works</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/get-started" className="btn-try">Get Started</Link>
            </nav>

            <Link href="/get-started" className="btn-try">Try for free</Link>
        </header>
    );
}
