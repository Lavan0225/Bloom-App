import { IMAGE_SOURCES } from "../lib/imageSources";

export default function Journal() {
    return (
        <section className="journal">
            <div className="journal-header">
                <h2>The Bloom Journal</h2>
                <p>Discover expert insights, mindful tips, and guided practices to help you find balance and inner peace—one breath at a time.</p>
            </div>

            <div className="featured-article">
                <div className="f-article-img">
                    <img src={IMAGE_SOURCES.journalFeatured} alt="Featured Article - Calm Mind" className="img-pulse" />
                </div>
                <div className="f-article-content">
                    <span className="article-badge">LATEST ARTICLE</span>
                    <h3>A Simple Habit for a Calmer Mind</h3>
                    <a href="#" className="btn-article">Read article</a>
                </div>
            </div>

            <div className="article-grid">
                {IMAGE_SOURCES.journalArticles.map((article) => (
                    <div key={article.alt} className="article-card">
                        <img src={article.src} alt={article.alt} />
                        <div className="article-text">
                            <h3>{article.alt === 'Sleep Meditation' ? 'How to Use Meditation for Better Sleep' : article.alt === 'Morning Routine' ? 'How to Create a Mindful Morning Routine' : 'How to Release Stress and Find Inner Peace'}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
