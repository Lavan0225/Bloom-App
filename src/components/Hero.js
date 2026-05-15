import { IMAGE_SOURCES } from "../lib/imageSources";

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="badge">TRUSTED BY 100 000+ USERS</div>
            <h1>Silence the noise<br/>Find Your Peace</h1>
            <p className="subheading">Short, simple meditations to help you reset, unwind, and feel present—whenever you need a break.</p>
            <a href="#" className="btn-main">Get started</a>
            
            <div className="phone-mockup">
                <img src={IMAGE_SOURCES.heroPhone} alt="Bloom App Interface" />
            </div>
        </section>
    );
}
