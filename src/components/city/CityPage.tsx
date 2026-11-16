import Image from "next/image";
import pithalLogo from "../../../public/images/brand/pithal-logo.png";
import { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { CityContent } from "@/lib/city-content";
import { getCityProduct, cityPagePath } from "@/lib/city-products";
import { resolveCityContent } from "@/lib/city-content";
import { getCitySections } from "@/data/cityPageData";
import { CityFAQs, CityMobileMenu, CityQuoteForm } from "./CityInteractions";
import styles from "./CityPage.module.css";
import { CityProductSlider } from "./CityProductSlider";

const productImages = ["/images/products/prime-jaw-crusher.png", "/images/products/prime-cone-crusher.png", "/images/products/prime-vsi-crusher.png", "/images/products/prime-m-sand-plant.png", "/images/products/prime-vibrating-screen.png", "/images/products/prime-complete-plant.png"];
const productLinks = ["/products/jaw-crushers", "/products/cone-crushers", "/products/vsi-crushers", "/products/m-sand-plant", "/products/vibrating-screens", "/products/complete-plants"];

export function CityPage({ city: record, sourcePage, cities }: { city: CityContent; sourcePage: string; cities: CityContent[] }) {
  const content = resolveCityContent(record);
  const product = getCityProduct(record.productSlug)!;
  const general = product.slug === "stone-crusher";
  const city = record.name;
  const state = record.state;
  const { reasons, products, industries, projects, steps, factors } = getCitySections(city);
  const nearby = city === "Jaipur" ? ["Ajmer", "Alwar", "Sikar", "Tonk", "Dausa", "Kishangarh", "Bhilwara", "Kota"] : cities.filter(c => c.citySlug !== record.citySlug && c.state === state && c.productSlug === record.productSlug).map(c => c.name);
  const nearbyLinks = Object.fromEntries(cities.filter(c => c.productSlug === record.productSlug).map(c => [c.name, cityPagePath(c)]));
  return (
<div className={`${styles.page} ${styles.s0}`}>

{/* HEADER */}
<header className={styles.s1}>
<div className={styles.s2}>
<a href="/" className={styles.s3}>
<Image
  src={pithalLogo}
  alt="Pithal Machines Ltd."
  className="h-auto w-[160px] min-[380px]:w-[180px] sm:w-[210px] xl:w-[230px] 2xl:w-[240px]"
  preload
/>
</a>
<nav data-city-nav="desktop" aria-label="Main" className={styles.s7}>
<a href="/" className={styles.s8}>Home</a>
<a href="#products" className={styles.s9}>Products <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"></path></svg></a>
<a href="/solutions" className={styles.s8}>Solutions</a>
<a href="/become-a-dealer" className={styles.s8}>Become a Dealer</a>
<a href="/blog" className={styles.s8}>Blog</a>
<a href="/about" className={styles.s8}>About Us</a>
</nav>
<a data-city-nav="cta" href="#quote" className={styles.s10}>Contact Us <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg></a>
<CityMobileMenu />
</div>
</header>

{/* BREADCRUMB */}
<div className={styles.s11}>
<nav aria-label="Breadcrumb" className={styles.s12}>
<a href="/" className={styles.s13}>Home</a><span aria-hidden="true">›</span>
<a href="/city" className={styles.s13}>Locations</a><span aria-hidden="true">›</span>
<span className={styles.s14}>{product.name} Manufacturer in {city}</span>
</nav>
</div>

{/* HERO */}
<section id="top" className={styles.s15}>
<div className={styles.s16}>
<div className={styles.s17}>
<span className={styles.s18}>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21z" stroke="#0C2862" strokeWidth="2"></path><circle cx="12" cy="9.5" r="2.5" stroke="#0C2862" strokeWidth="2"></circle></svg>
Supplying &amp; servicing in {city}{state && `, ${state}`}</span>
<h1 className={styles.s19}>{content.h1.split("\n").map((line, index) => <Fragment key={index}>{index > 0 && <br />}{index === 1 ? <span style={{ color: "#8A8F00" }}>{line}</span> : line}</Fragment>)}</h1>
<p className={styles.s20}>{content.subheading.split(/(150 TPH to 600 TPH)/).map((part, index) => part === "150 TPH to 600 TPH" ? <strong key={index} className={styles.capacity}>{part}</strong> : part)}</p>
<div className={styles.s21}>
<a href="#quote" className={styles.s22}>Get {city} Price Quote <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"></path></svg></a>
<a href="#products" className={styles.s23}>Explore Products <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"></path></svg></a>
</div>
<div className={styles.s24}>
<div className={styles.s25}><div className={styles.s26}>{content.capacityValue}</div><div className={styles.s27}>{content.capacityLabel}</div></div>
<div className={styles.s25}><div className={styles.s26}>10</div><div className={styles.s27}>Prime product lines</div></div>
<div className={styles.s25}><div className={styles.s26}>24x7</div><div className={styles.s27}>Support</div></div>
<div><div className={styles.s26}>Udaipur</div><div className={styles.s27}>Factory-direct, RJ</div></div>
</div>
</div>
<div className={styles.s28}>
<Image src={product.image} alt={general ? "Pithal crushing plant" : product.name} fill priority sizes="(max-width: 960px) 100vw, 600px" className={general ? styles.heroImage : `${styles.heroImage} ${styles.heroProductImage}`} />
<CityQuoteForm city={city} productName={product.name} sourcePage={sourcePage} quick />
</div>
</div>
</section>

{/* TRUST BADGES */}
<section className={styles.s30}>
<div className={styles.s31}>
<div className={styles.s32}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3z" stroke="#0C2862" strokeWidth="1.6"></path><path d="M9 12l2 2 4-4" stroke="#8A8F00" strokeWidth="1.8" strokeLinecap="round"></path></svg><div><div className={styles.s33}>BEST</div><div className={styles.s34}>Quality commitment</div></div></div>
<div className={styles.s32}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="9" cy="8" r="3" stroke="#0C2862" strokeWidth="1.6"></circle><circle cx="17" cy="9" r="2.4" stroke="#0C2862" strokeWidth="1.6"></circle><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 14.5c3 0 5.5 2 5.5 5" stroke="#8A8F00" strokeWidth="1.6" strokeLinecap="round"></path></svg><div><div className={styles.s33}>SKILLED</div><div className={styles.s34}>Engineering team</div></div></div>
<div className={styles.s32}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 13v-1a8 8 0 0116 0v1" stroke="#0C2862" strokeWidth="1.6"></path><rect x="3" y="13" width="4" height="6" rx="1.5" stroke="#8A8F00" strokeWidth="1.6"></rect><rect x="17" y="13" width="4" height="6" rx="1.5" stroke="#8A8F00" strokeWidth="1.6"></rect></svg><div><div className={styles.s33}>24x7</div><div className={styles.s34}>Support &amp; reliability</div></div></div>
<div className={styles.s32}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z" stroke="#0C2862" strokeWidth="1.6" strokeLinejoin="round"></path></svg><div><div className={styles.s33}>INNOVATIVE</div><div className={styles.s34}>Machine design</div></div></div>
</div>
</section>

{/* WHY CHOOSE */}
<section className={styles.s15}>
<div className={styles.s35}>
<div className={styles.s36}>
<h2 className={styles.s37}>Why {city} buyers choose <span className={styles.s38}>Pithal Machines</span></h2>
<p className={styles.s39}>One manufacturer for the full crushing line — from the first site visit to commissioning and spares — built in Rajasthan and backed by our own engineers.</p>
</div>
<div className={styles.s40}>
{reasons.map((r, index) => <div key={index} className={styles.s41}>
<div className={styles.s42}>{r.n}</div>
<h3 className={styles.s43}>{r.t}</h3>
<p className={styles.s44}>{r.d}</p>
</div>
)}
</div>
</div>
</section>

{/* PRODUCTS */}
<section id="products" className={styles.s45}>
<div className={styles.s35}>
<div className={styles.s46}>
<h2 className={styles.s37}>Stone crushers &amp; plants <span className={styles.s38}>available in {city}</span></h2>
<p className={styles.s39}>Primary, secondary and sand-making equipment — sold as single machines or as a complete, matched crushing plant.</p>
</div>
<CityProductSlider />
<div className={styles.s47}>
{products.map((p, index) => <article key={index} className={styles.s48}>
<h3 className={styles.s49}>{p.t}</h3>
<div className={styles.s50}></div>
<div className={styles.s51}><Image src={productImages[index]} alt={p.t} width={400} height={220} className={styles.productImage} /></div>
<p className={styles.s52}>{p.d}</p>
<span className={styles.s53}>{p.tag}</span>
<a href={productLinks[index]} className={styles.s54}>View Details <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"></path></svg></a>
</article>
)}
</div>
<div className={styles.s55}><a href="/products" className={styles.s56}>View all 10 Prime products →</a></div>
</div>
</section>

{/* INDUSTRIES */}
<section className={styles.s57}>
<div className={styles.s35}>
<div className={styles.s58}>
<div className={styles.s59}>
<h2 className={styles.s60}>Industries we serve <span className={styles.s61}>in {city}</span></h2>
</div>
<p className={styles.s62}>From quarry operators to highway and real-estate contractors, our plants are configured around the material you crush and the product you sell.</p>
</div>
<div className={styles.s63}>
{industries.map((i, index) => <div key={index} className={styles.s64}>
<div className={styles.s65}><Image src={`/images/industries/${i.t.toLowerCase()}.jpg`} alt={i.t} width={420} height={150} className={styles.industryImage} /></div>
<div className={styles.s66}>
<h3 className={styles.s67}>{i.t}</h3>
<p className={styles.s68}>{i.d}</p>
</div>
</div>
)}
</div>
</div>
</section>

{/* PROJECTS */}
<section className={styles.s15}>
<div className={styles.s35}>
<div className={styles.s69}>
<div className={styles.s70}>
<h2 className={styles.s37}>Crushing plants<br /><span className={styles.s38}>built for performance</span></h2>
<p className={styles.s71}>Complete plants we design and supply — sized to your output target, rock type and final product mix.</p>
</div>
<div className={styles.s72}>
<div><div className={styles.s73}>High reliability</div><div className={styles.s74}>Built for continuous running in tough conditions.</div></div>
<div><div className={styles.s73}>Maximum productivity</div><div className={styles.s74}>Higher output, better efficiency per tonne.</div></div>
<div><div className={styles.s73}>Local support</div><div className={styles.s74}>Service team reachable from Udaipur.</div></div>
</div>
</div>
<div className={styles.s40}>
{projects.map((pr, index) => <div key={index} className={styles.s75}>
<div className={styles.s76}><Image src={["/images/projects/rajasthan.jpg", "/images/projects/madhya-pradesh.jpg", "/images/projects/karnataka.jpg"][index]} alt={`${pr.cap} crushing plant`} width={420} height={220} className={styles.projectImage} /></div>
<div className={styles.s77}>
<div className={styles.s78}>
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21z" stroke="#0C2862" strokeWidth="1.8"></path><circle cx="12" cy="9.5" r="2.5" stroke="#0C2862" strokeWidth="1.8"></circle></svg>
<div className={styles.s79}><div className={styles.s80}>{pr.cap} Crushing Plant</div><div className={styles.s81}>Plant configurations for your project</div></div>
</div>
<div className={styles.s82}><div className={styles.s83}>Capacity</div><div className={styles.s84}>{pr.cap}</div></div>
</div>
</div>
)}
</div>
</div>
</section>

{/* PROCESS */}
<section className={styles.s45}>
<div className={styles.s35}>
<div className={styles.s36}>
<h2 className={styles.s37}>How we deliver your {general ? "plant" : "equipment"} <span className={styles.s38}>in {city}</span></h2>
<p className={styles.s39}>A clear six-step path from enquiry to a running plant.</p>
</div>
<ol className={styles.s85}>
{steps.map((s, index) => <li key={index} className={styles.s86}>
<div className={styles.s87}>{s.n}</div>
<div className={styles.s88}></div>
<h3 className={styles.s89}>{s.t}</h3>
<p className={styles.s90}>{s.d}</p>
</li>
)}
</ol>
</div>
</section>

{/* PRICE FACTORS */}
<section className={styles.s15}>
<div className={styles.s91}>
<div className={styles.s92}>
<h2 className={styles.s37}>{product.name} price in {city}: <span className={styles.s38}>what decides the cost</span></h2>
<p className={styles.s93}>{general ? "There is no single price list for a crushing plant. These six factors set your final quotation:" : "Equipment specifications, site requirements and installation scope determine your final quotation:"}</p>
<div className={styles.s94}>
{factors.map((f, index) => <div key={index} className={styles.s95}>
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.s96}><circle cx="12" cy="12" r="9" stroke="#8A8F00" strokeWidth="1.8"></circle><path d="M8 12l3 3 5-6" stroke="#0C2862" strokeWidth="2" strokeLinecap="round"></path></svg>
<div><div className={styles.s80}>{f.t}</div><div className={styles.s97}>{f.d}</div></div>
</div>
)}
</div>
</div>
<aside className={styles.s98}>
<div className={styles.s99}>Get an exact quote <span className={styles.s61}>for {city}</span></div>
<p className={styles.s100}>Tell us your capacity, material and final sizes. Our team will prepare a plant layout and itemised quotation for your project.</p>
<a href="#quote" className={styles.s101}>Request Quote</a>
<a href="tel:+919887537129" className={styles.s102}>
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"></path></svg>+91 98875 37129</a>
<div className={styles.s103}>Prefer to see the machines first? Visit our factory at RIICO Kaladwas, Udaipur.</div>
</aside>
</div>
</section>

{/* SERVICE AREA */}
<section className={styles.s104}>
<div className={styles.s105}>
<div className={styles.s106}>
<h2 className={styles.s107}>We also supply <span className={styles.s38}>near {city}</span></h2>
<p className={styles.s108}>Same machines, same installation and service team for projects across the surrounding districts.</p>
</div>
<div className={styles.s109}>
{nearby.map((c, index) => <a key={index} href={nearbyLinks[c] || `/contact?city=${encodeURIComponent(c)}`} className={styles.s110}>
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21z" stroke="#8A8F00" strokeWidth="2.2"></path></svg>{product.name} in {c}</a>
)}
</div>
</div>
</section>

{/* FAQ */}
<section className={styles.s15}>
<div className={styles.s111}>
<div className={styles.s112}>
<h2 className={styles.s37}>{product.name} FAQs <span className={styles.s38}>for {city}</span></h2>
</div>
<div className={styles.s113}>
<CityFAQs faqs={content.faqs} />
</div>
</div>
</section>

{/* BUYER GUIDE (SEO copy) */}
<section className={styles.s104}>
<div className={styles.s114}>
<h2 className={styles.s115}>Buying {general ? "a stone crusher" : product.name} in {city}: a quick guide</h2>
<div className={styles.longContent}><ReactMarkdown remarkPlugins={[remarkGfm]}>{content.longContent}</ReactMarkdown></div>
<a href="/blog" className={styles.s116}>Read the full buyer's guide →</a>
</div>
</section>

{/* LEAD FORM */}
<section id="quote" className={styles.s117}>
<div className={styles.s91}>
<div className={styles.s118}>
<h2 className={styles.s119}>Request a quote for your <span className={styles.s61}>{city} project</span></h2>
<p className={styles.s120}>Share your requirement and our crushing specialist will get back with the right configuration and price.</p>
<div className={styles.s121}>
<a href="tel:+919887537129" className={styles.s122}><span className={styles.s123}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" stroke="#ABB000" strokeWidth="1.8" strokeLinejoin="round"></path></svg></span>+91 98875 37129</a>
<a href="mailto:info@pithalmachine.com" className={styles.s122}><span className={styles.s123}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#ABB000" strokeWidth="1.8"></rect><path d="M3 7l9 6 9-6" stroke="#ABB000" strokeWidth="1.8"></path></svg></span>info@pithalmachine.com</a>
<div className={styles.s124}><span className={styles.s125}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21z" stroke="#ABB000" strokeWidth="1.8"></path><circle cx="12" cy="9.5" r="2.5" stroke="#ABB000" strokeWidth="1.8"></circle></svg></span>Plot G1-232, RIICO Industrial Area, Kaladwas, Udaipur, Rajasthan 313003</div>
</div>
</div>
<CityQuoteForm city={city} productName={product.name} sourcePage={sourcePage} />
</div>
</section>

{/* FOOTER */}
<footer className={styles.s15}>
<div className={styles.s126}>
<div className={styles.s127}>
<span className={styles.s128}>PITHAL <span className={styles.s129}>MACHINES LTD</span></span>
<p className={styles.s130}>Engineering world-class crushing solutions that power industries and build infrastructure.</p>
</div>
<div><div className={styles.s131}>Products</div>
<div className={styles.s132}><a href="/products/jaw-crushers" className={styles.s133}>› Prime Jaw Crushers</a><a href="/products/cone-crushers" className={styles.s133}>› Prime Cone Crushers</a><a href="/products/vsi-crushers" className={styles.s133}>› Prime VSI Crushers</a><a href="/products/m-sand-plant" className={styles.s133}>› Prime M-Sand Crusher Plant</a><a href="/products/complete-plants" className={styles.s133}>› Prime Complete Plants</a></div></div>
<div><div className={styles.s131}>Quick links</div>
<div className={styles.s132}><a href="/about" className={styles.s133}>› About Us</a><a href="/blog" className={styles.s133}>› Blog</a><a href="/careers" className={styles.s133}>› Careers</a><a href="/become-a-dealer" className={styles.s133}>› Become a Dealer</a><a href="/contact" className={styles.s133}>› Contact Us</a></div></div>
<div className={styles.s134}>
<div className={styles.s135}>Crushing strength,<br /><span className={styles.s38}>delivering results.</span></div>
</div>
</div>
<div className={styles.s136}>
<div className={styles.s137}>
<span>© 2026 Pithal Machines Ltd. All Rights Reserved.</span>
<span className={styles.s138}><span className={styles.s139}>Privacy Policy</span><span className={styles.s139}>Terms &amp; Conditions</span><a href="/sitemap.xml" className={styles.s140}>Sitemap</a></span>
</div>
</div>
</footer>

</div>
);
}
