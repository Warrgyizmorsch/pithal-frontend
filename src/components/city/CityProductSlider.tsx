"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Boxes } from "lucide-react";
import { products } from "@/data/homeData";
import { ProductCard } from "@/components/common/ProductCard";
import styles from "./CityProductSlider.module.css";

export function CityProductSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new ResizeObserver(() => {
      track.scrollTo({ left: currentRef.current * track.clientWidth, behavior: "auto" });
    });
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  function goTo(index: number) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    let next: number;
    switch (event.key) {
      case "ArrowLeft": next = Math.max(0, activeIndex - 1); break;
      case "ArrowRight": next = Math.min(products.length - 1, activeIndex + 1); break;
      case "Home": next = 0; break;
      case "End": next = products.length - 1; break;
      default: return;
    }
    event.preventDefault();
    goTo(next);
  }

  return <div className={styles.slider} role="region" aria-roledescription="carousel" aria-label="Pithal products" data-city-product-slider>
    <div
      className={styles.track}
      ref={trackRef}
      tabIndex={0}
      aria-label="Swipe products or use the left and right arrow keys"
      onKeyDown={onKeyDown}
      onScroll={event => {
        const track = event.currentTarget;
        const index = Math.min(products.length - 1, Math.max(0, Math.round(track.scrollLeft / (track.clientWidth || 1))));
        currentRef.current = index;
        setActiveIndex(index);
      }}
    >
      {products.map((product, index) => <div className={styles.slide} key={product.href} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${products.length}`}>
        <ProductCard {...product} icon={<span className={styles.icon}><Boxes size={23} aria-hidden /></span>} />
      </div>)}
    </div>
    <div className={styles.dots} aria-label="Choose product slide">
      {products.map((product, index) => <button key={product.href} type="button" className={styles.dot} aria-label={`Show ${product.title}`} aria-current={activeIndex === index ? "true" : undefined} onClick={() => goTo(index)} />)}
    </div>
  </div>;
}
