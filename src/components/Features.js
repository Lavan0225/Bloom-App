import { IMAGE_SOURCES } from "../lib/imageSources";

export default function Features() {
    return (
        <>
            <section className="features-grid">
                <div className="feature-card leaderboard-card">
                    <div className="leaderboard-ui">
                        {IMAGE_SOURCES.leaderboardAvatars.map((user, index) => (
                            <div key={user.name} className={`leaderboard-item ${index === IMAGE_SOURCES.leaderboardAvatars.length - 1 ? 'fade' : ''}`}>
                                <div className="user-info">
                                    <img src={user.src} alt={user.name} />
                                    <div>
                                        <span className="name">{user.name}</span>
                                        <span className="stats">{user.stats}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="card-content">
                        <h3>Climb in leaderboards</h3>
                        <p>Track your meditation streaks and climb the leaderboards. Earn milestones and build a consistent practice.</p>
                    </div>
                </div>

                <div className="feature-card phones-card">
                    <div className="phones-mockup-single">
                        <img src="/assets/phones_mockup.png" alt="Daily Meditations Mockup" className="img-parallax" />
                    </div>
                    <div className="card-content">
                        <h3>Daily meditations tailored for you</h3>
                        <p>Choose from structured programs designed for better sleep, stress relief, or focus. Each program evolves with your progress.</p>
                    </div>
                </div>
            </section>

            <section className="features-grid">
                <div className="feature-card programs-card">
                    <div className="phones-mockup-single">
                        <img src="/assets/programs_mockup.png" alt="Personalised Programs Mockup" className="img-parallax img-large" />
                    </div>
                    <div className="card-content">
                        <h3>Personalised programs</h3>
                        <p>Save your favorite meditation spots, whether it’s your cozy reading nook, a quiet park, or a peaceful beach.</p>
                    </div>
                </div>

                <div className="feature-card nudge-card">
                    <div className="nudge-ui">
                        <div className="notification-item">
                            <div className="notif-icon" style={{background: 'rgba(142, 68, 173, 0.1)', color: '#8e44ad'}}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                            </div>
                            <div className="notif-text">
                                <span className="notif-title">Yoga class near you!</span>
                                <span className="notif-sub">Cafe Yoga has a class near you.</span>
                            </div>
                            <span className="notif-time">12:41 AM</span>
                        </div>
                        <div className="notification-item">
                            <div className="notif-icon" style={{background: 'rgba(46, 204, 113, 0.1)', color: '#27ae60'}}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            </div>
                            <div className="notif-text">
                                <span className="notif-title">Perfect time for relaxation</span>
                                <span className="notif-sub">Take 5 minutes for yourself</span>
                            </div>
                            <span className="notif-time">10:41 AM</span>
                        </div>
                        <div className="notification-item">
                            <div className="notif-icon" style={{background: 'rgba(52, 152, 219, 0.1)', color: '#2980b9'}}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                            </div>
                            <div className="notif-text">
                                <span className="notif-title">Congratulate yourself</span>
                                <span className="notif-sub">You&apos;ve had the most meditations today</span>
                            </div>
                            <span className="notif-time">20:41 AM</span>
                        </div>
                    </div>
                    <div className="card-content">
                        <h3>A nudge when you need it most.</h3>
                        <p>Get soft, mindful reminders to pause, breathe, and take a moment for yourself—without the pressure.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
