"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./CityLongContent.module.css";

export function CityLongContent({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();
  const container = useRef<HTMLDivElement>(null);

  function toggle() {
    const returnToContent = expanded && container.current && container.current.getBoundingClientRect().top < 0;
    setExpanded(current => !current);
    if (returnToContent) {
      requestAnimationFrame(() => container.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        block: "start",
      }));
    }
  }

  return <div ref={container} className={styles.container}>
    <div id={contentId} className={`${styles.preview} ${expanded ? styles.expanded : ""}`} onFocusCapture={() => setExpanded(true)}>
      {children}
      {!expanded && <div className={styles.fade} aria-hidden="true" />}
    </div>
    <div className={styles.actions}>
      <button type="button" className={styles.button} aria-expanded={expanded} aria-controls={contentId} onClick={toggle}>
        {expanded ? "Read Less" : "Read More"}
        <ChevronDown size={14} strokeWidth={2} aria-hidden="true" className={expanded ? styles.up : ""} />
      </button>
    </div>
  </div>;
}
