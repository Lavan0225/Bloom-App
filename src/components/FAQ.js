"use client";

import { useState } from "react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Is Bloom free to use?",
            answer: "Bloom offers a free plan with access to essential meditations and features. For full access to all programs, personalized plans, and advanced features, you can upgrade to Bloom Premium."
        },
        {
            question: "Do I need experience with meditation to use Bloom?",
            answer: "Not at all! Bloom is designed for everyone — from complete beginners to experienced meditators. Our guided sessions walk you through each exercise step by step."
        },
        {
            question: "How long should I meditate each day?",
            answer: "Even just 5 minutes a day can make a meaningful difference. Bloom offers sessions ranging from 3 to 30 minutes so you can fit mindfulness into any schedule."
        },
        {
            question: "What kind of support do you offer?",
            answer: "We offer 24/7 in-app support, a comprehensive help centre, and a friendly community forum where our team and other users are always ready to help."
        },
        {
            question: "How do I cancel my subscription?",
            answer: "You can cancel your subscription at any time directly from your account settings — no hidden fees, no complicated steps. Your access continues until the end of the billing period."
        },
        {
            question: "Can I use Bloom on multiple devices?",
            answer: "Yes! Your Bloom account syncs seamlessly across all your devices — iPhone, Android, iPad, and web. Your progress, streaks, and favorites follow you everywhere."
        }
    ];

    return (
        <section className="faq" id="faq">
            <div className="faq-inner">
                <div className="faq-left">
                    <span className="faq-eyebrow">GOT QUESTIONS?</span>
                    <h2>Frequently<br/><em>asked</em> questions</h2>
                    <p>Can&apos;t find what you&apos;re looking for? We&apos;re always happy to help.</p>
                    <a href="#" className="btn-faq-contact">Contact us</a>
                </div>

                <div className="faq-right">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                            <button className="faq-question" onClick={() => toggleFaq(index)}>
                                <span>{faq.question}</span>
                                <div className="faq-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </div>
                            </button>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
