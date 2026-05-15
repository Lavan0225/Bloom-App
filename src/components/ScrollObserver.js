"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Select elements to animate
        const upElements = document.querySelectorAll('.hero > *, .info-header > *, .journal-header > *, .featured-article, .faq-left, .get-started > *');
        const scaleElements = document.querySelectorAll('.info-card, .feature-card, .testimonial-card, .article-card, .faq-item');
        
        upElements.forEach(el => {
            el.classList.add('reveal', 'reveal-up');
            observer.observe(el);
        });

        scaleElements.forEach(el => {
            el.classList.add('reveal', 'reveal-scale');
            observer.observe(el);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return null;
}
