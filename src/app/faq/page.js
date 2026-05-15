"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import FramerBadge from "../../components/FramerBadge";
import "./faq.css";

export default function FAQPage() {
    const [activeCat, setActiveCat] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleTabClick = (cat) => {
        setActiveCat(cat);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const isVisible = (cat, itemText) => {
        const inCat = activeCat === "all" || activeCat === cat;
        const matchesSearch = searchQuery === "" || itemText.toLowerCase().includes(searchQuery);
        return inCat && matchesSearch;
    };

    // The FAQ data
    const faqData = [
        {
            group: "general",
            title: "General",
            items: [
                {
                    q: "What is Bloom?",
                    a: "Bloom is a mindful meditation app designed to help you find calm, focus, and inner peace. With guided sessions ranging from 3 to 30 minutes, it adapts to your schedule and mental state so you can practice mindfulness anytime, anywhere."
                },
                {
                    q: "Is Bloom free to use?",
                    a: "Yes! Bloom offers a free plan with access to essential meditations, basic programs, and progress tracking. For full access — including all programs, personalized plans, advanced analytics, and offline listening — you can upgrade to Bloom Premium."
                },
                {
                    q: "Do I need meditation experience to use Bloom?",
                    a: "Not at all! Bloom is designed for everyone — from complete beginners to seasoned meditators. Our guided sessions walk you through every exercise step by step, and our onboarding quiz personalizes the experience to your level."
                },
                {
                    q: "How long should I meditate each day?",
                    a: "Even just 5 minutes a day can make a meaningful difference. Bloom offers sessions ranging from 3 to 30 minutes so you can fit mindfulness into any schedule — morning, lunch break, or bedtime."
                }
            ]
        },
        {
            group: "account",
            title: "Account",
            items: [
                {
                    q: "Can I use Bloom on multiple devices?",
                    a: "Yes! Your Bloom account syncs seamlessly across all your devices — iPhone, Android, iPad, and web. Your progress, streaks, and favorites follow you everywhere."
                },
                {
                    q: "How do I reset my password?",
                    a: "Go to the login screen, tap \"Forgot password\", and enter your email address. You'll receive a reset link within a few minutes. Check your spam folder if it doesn't arrive."
                },
                {
                    q: "How do I delete my account?",
                    a: "You can delete your account from Settings → Account → Delete Account. Please note that this action is irreversible and all your data, including streaks and progress, will be permanently removed."
                }
            ]
        },
        {
            group: "premium",
            title: "Premium",
            items: [
                {
                    q: "What's included in Bloom Premium?",
                    a: "Premium includes: unlimited access to all guided sessions and programs, offline listening, personalized daily plans, advanced mood tracking, sleep soundscapes, and priority customer support."
                },
                {
                    q: "How do I cancel my subscription?",
                    a: "You can cancel anytime from your account settings — no hidden fees, no complicated steps. Your Premium access continues until the end of the current billing period."
                },
                {
                    q: "Is there a free trial for Premium?",
                    a: "Yes — new users get a 7-day free trial of Bloom Premium. No credit card required. After the trial, you can choose to subscribe or continue on the free plan."
                }
            ]
        },
        {
            group: "privacy",
            title: "Privacy",
            items: [
                {
                    q: "Is my data safe with Bloom?",
                    a: "Absolutely. We use industry-standard encryption for all data in transit and at rest. We never sell your personal data to third parties. You can read our full Privacy Policy for complete details."
                },
                {
                    q: "Does Bloom share data with third parties?",
                    a: "We do not sell, rent, or trade your personal data. We may use anonymized, aggregated analytics to improve our service, but your individual data stays private and secure."
                }
            ]
        },
        {
            group: "technical",
            title: "Technical",
            items: [
                {
                    q: "Which devices and platforms does Bloom support?",
                    a: "Bloom is available on iOS (iPhone & iPad), Android, and modern web browsers. We recommend keeping the app updated to the latest version for the best experience."
                },
                {
                    q: "Can I use Bloom offline?",
                    a: "Yes, with a Premium subscription you can download sessions for offline use. Simply tap the download icon next to any session when connected to Wi-Fi, and it'll be available even without internet."
                },
                {
                    q: "The app isn't loading — what should I do?",
                    a: "Try these steps: 1) Force-close and reopen the app. 2) Check your internet connection. 3) Update the app to the latest version. 4) Restart your device. If the issue persists, contact our support team."
                }
            ]
        }
    ];

    let anyVisible = false;

    // Scroll reveal logic
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.style.opacity = '1';
                    e.target.style.transform = 'translateY(0)';
                    observer.unobserve(e.target);
                }
            });
        }, { threshold: 0.08 });

        document.querySelectorAll('.faq-group, .faq-cta-inner').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(28px)';
            el.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div style={{ background: '#fcf8f6', color: '#2b0c0c', minHeight: '100vh' }}>
            <Header />

            {/* Hero */}
            <section className="faq-hero">
                <div className="faq-hero-inner">
                    <span className="eyebrow" style={{letterSpacing: '2px', fontWeight: 700, fontSize: '0.8rem', opacity: 0.8, display: 'block', marginBottom: '16px'}}>HELP CENTER</span>
                    <h1 style={{fontFamily: "'Instrument Serif', serif", fontSize: '4.5rem', fontWeight: 400, lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-1.5px'}}>
                        How can we<br /><em style={{fontStyle: 'italic', paddingRight: '6px'}}>help you?</em>
                    </h1>
                    <p style={{fontSize: '1.15rem', opacity: 0.8, color: '#6a5050', maxWidth: '400px', margin: '0 auto 40px', lineHeight: 1.5}}>
                        Browse our most frequently asked questions below, or search for a specific topic.
                    </p>

                    <div className="search-bar">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                        <input type="text" id="faq-search" placeholder="Search questions…" autoComplete="off" value={searchQuery} onChange={handleSearch} />
                    </div>
                </div>
            </section>

            {/* Category Tabs */}
            <section className="faq-tabs-section">
                <div className="faq-tabs" id="faq-tabs">
                    {["all", "general", "account", "premium", "privacy", "technical"].map((cat) => (
                        <button key={cat} className={`tab ${activeCat === cat ? "active" : ""}`} onClick={() => handleTabClick(cat)}>
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>
            </section>

            {/* FAQ Grid */}
            <main className="faq-main">
                <div className="faq-grid" id="faq-grid">
                    {faqData.map((group, gIndex) => {
                        const inCat = activeCat === "all" || activeCat === group.group;
                        let groupVisible = false;

                        const items = group.items.map((item, iIndex) => {
                            const combinedText = item.q + " " + item.a;
                            const visible = inCat && combinedText.toLowerCase().includes(searchQuery);
                            if (visible) { groupVisible = true; anyVisible = true; }

                            const absoluteIndex = gIndex * 100 + iIndex;
                            const isOpen = openIndex === absoluteIndex;

                            return visible ? (
                                <div key={iIndex} className={`faq-item ${isOpen ? 'open' : ''}`}>
                                    <button className="faq-q" onClick={() => toggle(absoluteIndex)}>
                                        <span>{item.q}</span>
                                        <div className="faq-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
                                    </button>
                                    <div className="faq-a">
                                        <p>{item.a}</p>
                                    </div>
                                </div>
                            ) : null;
                        });

                        return groupVisible ? (
                            <div key={gIndex} className="faq-group">
                                <h2 className="group-title">{group.title}</h2>
                                {items}
                            </div>
                        ) : null;
                    })}
                </div>

                {!anyVisible && (
                    <div className="no-results" id="no-results">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                        <h3>No results found</h3>
                        <p>Try a different search term or browse by category above.</p>
                    </div>
                )}
            </main>

            {/* CTA Banner */}
            <section className="faq-cta">
                <div className="faq-cta-inner">
                    <span className="eyebrow" style={{color: 'rgba(255,255,255,0.6)'}}>STILL NEED HELP?</span>
                    <h2>We&apos;re here for you,<br/><em>always</em></h2>
                    <p>Our support team is available 24/7 to answer any questions you have.</p>
                    <div className="cta-buttons">
                        <a href="#" className="btn-cta-primary">Contact support</a>
                        <a href="#" className="btn-cta-ghost">Join community</a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <div className="footer-inner">
                    <Link href="/" className="footer-logo">bloom</Link>
                    <p>© 2025 Bloom. All rights reserved.</p>
                    <div className="footer-links" style={{display: 'flex', gap: '24px'}}>
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </footer>
            
            <FramerBadge />
        </div>
    );
}
