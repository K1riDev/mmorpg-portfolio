import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initCommonAnimations() {
  // Animate mmorpg cards
  gsap.from(".mmorpg-card", {
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".mmorpg-card",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
}

export function initSkillAnimations() {
  // Animate skill bars
  gsap.from(".skill-item", {
    duration: 1,
    x: -50,
    opacity: 0,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".skill-item",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });
}

export function initTimelineAnimations() {
  // Animate timeline items
  gsap.from('[class*="border-l-2"]', {
    duration: 0.8,
    x: -30,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: '[class*="border-l-2"]',
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
}

export function initProjectAnimations() {
  const projectCards = document.querySelectorAll("[data-project]");

  if (projectCards.length > 0) {
    gsap.fromTo(
      projectCards,
      {
        opacity: 0,
        y: 30,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: projectCards[0],
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }
}

export function initStatsAnimations() {
  // Animate stats counters
  const statNumbers = document.querySelectorAll(".stat-number");

  statNumbers.forEach((stat) => {
    const target = parseInt(stat.textContent || "0");
    const duration = 2;

    gsap.fromTo(
      stat,
      { textContent: 0 },
      {
        textContent: target,
        duration: duration,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: stat,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}
