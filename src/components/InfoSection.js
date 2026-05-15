import { IMAGE_SOURCES } from "../lib/imageSources";

export default function InfoSection() {
    return (
        <section className="info-section">
            <div className="info-header">
                <h2>Find your calm,<br/>Anytime, Anywhere</h2>
                <div className="info-description">
                    <p>Whether you need a quick mental reset or a deep meditation session, Bloom helps you slow down, breathe, and feel at ease—whenever life gets overwhelming.</p>
                </div>
            </div>
            <div className="info-cards">
                <div className="info-card">
                    <img src={IMAGE_SOURCES.infoSpots} alt="Meditation Spots" />
                </div>
                <div className="info-card">
                    <img src={IMAGE_SOURCES.infoCommunity} alt="Community Community Avatars" />
                </div>
            </div>
        </section>
    );
}
