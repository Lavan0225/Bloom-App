import { IMAGE_SOURCES } from "../lib/imageSources";

export default function Testimonials() {
    return (
        <section className="testimonials" id="testimonials">
            <h2>Hear it from our users</h2>
            <div className="testimonial-grid">
                <div className="testimonial-card featured-testimonial">
                    <img src={IMAGE_SOURCES.testimonialBg} alt="Makayla Johnson" className="testimonial-bg" />
                    <div className="testimonial-overlay">
                        <p className="testimonial-quote">&quot;Bloom has transformed the way I think about my life. Highly recommend!&quot;</p>
                        <span className="testimonial-name">Makayla Johnson</span>
                    </div>
                </div>
                
                {IMAGE_SOURCES.testimonialAvatars.map((avatar) => (
                    <div key={avatar.name} className="testimonial-card">
                        <img src={avatar.src} alt={avatar.name} className="testimonial-avatar" />
                        <p className="testimonial-quote">
                            {avatar.name === 'Christina Matthews'
                                ? "Bloom has completely transformed my daily routine. The guided meditations are exactly what I need to start my mornings with clarity and focus."
                                : "I've tried many meditation apps, but Bloom stands out with its personalized programs and calming design. It feels like it was made just for me."
                            }
                        </p>
                        <span className="testimonial-name">{avatar.name}</span>
                    </div>
                ))}

                <div className="carousel-nav">
                    <button className="nav-prev">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    </button>
                    <button className="nav-next">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-9-6"/></svg>
                    </button>
                </div>
            </div>
            <div className="pagination">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </section>
    );
}
