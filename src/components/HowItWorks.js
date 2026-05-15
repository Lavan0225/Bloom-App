"use client";
import { useState, useEffect } from "react";

import { IMAGE_SOURCES } from "../lib/imageSources";

export default function HowItWorks() {
    const [activeIndex, setActiveIndex] = useState(0);

    const steps = [
        {
            title: "Choose How You Feel",
            desc: "Start by selecting your current mood—calm, stressed, or in need of focus. Bloom curates the perfect session for you."
        },
        {
            title: "Listen, Breathe, and Unwind",
            desc: "Whether it's a guided meditation, soothing soundscape, or deep breathing session, Bloom helps you find your balance."
        },
        {
            title: "Follow Your Progress",
            desc: "Build a mindfulness habit with personalized streaks, mood tracking, and insights to help you grow."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % steps.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [steps.length]);

    return (
        <section className="how-it-works" id="how-it-works">
            <div className="how-header">
                <h2>How it works</h2>
                <p>A few mindful moments can change your day. Bloom helps you reset, relax, and grow with ease.</p>
            </div>
            
            <div className="how-content">
                <div className="how-steps">
                    {steps.map((step, index) => (
                        <div 
                            key={index} 
                            className={`step-card ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="how-visual">
                    <div className="phones-mockup-single">
                        <img src={IMAGE_SOURCES.howItWorksMockup} alt="How It Works Mockup" className="img-parallax img-large-how" />
                    </div>
                </div>
            </div>
        </section>
    );
}
