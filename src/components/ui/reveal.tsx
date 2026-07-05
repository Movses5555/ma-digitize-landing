"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export const CARD_STAGGER_MS = 90;

export function cardRevealDelay(index: number): number {
  return index * CARD_STAGGER_MS;
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  /** Play on mount (hero) instead of on scroll */
  immediate?: boolean;
  once?: boolean;
  style?: CSSProperties;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 700,
  y = 24,
  immediate = false,
  once = true,
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setReduceMotion(prefersReduced);

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    if (immediate) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
      return () => cancelAnimationFrame(frame);
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate, once]);

  const motionStyle: CSSProperties = reduceMotion
    ? {}
    : {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity ${duration}ms ${EASE} ${delay}ms, transform ${duration}ms ${EASE} ${delay}ms`,
        willChange: visible ? "auto" : "opacity, transform",
      };

  return (
    <div ref={ref} className={className} style={{ ...motionStyle, ...style }}>
      {children}
    </div>
  );
}

type RevealCardProps = {
  index: number;
  children: ReactNode;
  className?: string;
};

/** Same staggered fade-up used on Features grid cards. */
export function RevealCard({ index, children, className = "" }: RevealCardProps) {
  return (
    <Reveal delay={cardRevealDelay(index)} className={className}>
      {children}
    </Reveal>
  );
}
