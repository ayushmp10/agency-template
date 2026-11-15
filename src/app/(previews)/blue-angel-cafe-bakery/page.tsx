"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, MapPin, ExternalLink, X } from "lucide-react";
import { Archivo, Instrument_Sans } from "next/font/google";

const ArchivoFont = Archivo({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const InstrumentSansFont = Instrument_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const PHONE_DISPLAY = "(201) 648-0234";
const PHONE_TEL = "tel:2016480234";
const ADDRESS = "79 Hudson St 1st Floor, Hoboken, NJ 07030";
const DIRECTIONS =
  "https://www.google.com/maps/search/?api=1&query=Blue%20Angel%20Cafe%20%26%20Bakery%2079%20Hudson%20St%201st%20Floor%2C%20Hoboken%2C%20NJ%2007030%2C%20USA";

const PHOTO_STOREFRONT =
  "https://lh3.googleusercontent.com/grass-cs/AABkmLfJaKdKyDyA8m-llPQZrrRlVvIInpQpiLLYKlxdq7K6SOCSDZaDGlUmwRecbX91RJocwDrX_Q95VdELklu4JvK-9pJmhzeViDOiKuy6tOAyQMrwh4UM0MZX5h5oWk59tkliq7oKAn96IAGo=s4800-w1600-h1200";
const PHOTO_CASE =
  "https://lh3.googleusercontent.com/grass-cs/AABkmLe5G5pKBBhhmJBuPXnTUygOB8-wf8m7fz-ji8iekmJgckOo6VX_N8G5sNRcgEDls2xwtuqHeB_7mbIq4sDO2znNxVsHvX6zD0mUcXQPLTWDAuHFL2WKBd1ISZaMeUrvlljcpvcAljOHPz4=s4800-w1600-h1200";
const PHOTO_TRAYS =
  "https://lh3.googleusercontent.com/grass-cs/AABkmLeRicomA17jl_fyuTsAb7c4U2ptLVQwBY3N2y69xg8MbwCBu3uVV0dStyEbP0Y38VBHyVz0p8n01yVcqmm0vyeVpnHAWdZEzdF46HKgEzQgEkhyjGXsOGcSQz8qyJsESUdphQWSOXNbNp35=s4800-w1600-h1200";
const PHOTO_INSIDE =
  "https://lh3.googleusercontent.com/grass-cs/AABkmLf6mhiPvi54oPrcXKeq7rvYRHa9JhOtIZ9DtJWtcB6IiDN2jo874V2QRkROXb-0N07dF6wxcpEFWKW9p4u2xWo33idqrMnm-uBhmGI3EWdwyOAcN90sZ7y0sYRWGdXXxy1VpwA4xd3iTf7I=s4800-w1600-h1200";

const CASE_ITEMS = [
  "Red bean bread",
  "Dubai chocolate cream bread",
  "Almond cookies",
  "Almost Chestnut Pastry",
  "Brown sugar shaken espresso latte",
  "Iced brown sugar latte",
  "Flat white",
  "White chocolate mocha",
  "Matcha",
];

const COMPARE_POINTS = [
  "On a phone, the first screen is mostly empty white space with a small logo and three social icons (Yelp, Facebook, Instagram). There is no Order, Call, menu link or Hoboken address in view.",
  "The menu button is three thin red lines inside a white box at the screen edge, so it is easy to miss, and a black chat bubble sits over the corner of the first screen.",
  "The photo strip just below the fold is blurry and low-resolution, so the food and the shop (which look good in person) don't come across.",
  "The menu has unfinished labels: two 'My New Option' entries, 'NewNew', 'Bluberry Fresh Cake', a category called 'DESERT', and a garbled 'premiumCOFFEE' line.",
  "The Hoboken phone number (201) 648-0234 only appears on the About page, so someone who wants to call from the homepage can't.",
  "Nothing on the menu has a price, and most items have no description, so people can't decide before they arrive. Pastry and Croissant sections hide more items behind 'Show More'.",
  "Opening hours aren't published on the site, and it isn't clear whether Fort Lee and Hoboken have the same menu.",
  "Online ordering exists, but the 'Order Online' buttons aren't on the first screen, so the people who find the site on a phone have to hunt for it.",
];

const btn =
  "inline-flex items-center justify-center gap-2 min-h-[52px] lg:min-h-[48px] px-6 py-4 lg:py-3 rounded-[4px] text-[17px] leading-[1.2] font-semibold font-[family-name:var(--font-body)] transition-colors duration-[120ms] no-underline text-center";
const btnPrimary =
  btn +
  " bg-[var(--color-primary)] text-[var(--color-on-primary)] hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)]";
const btnSecondary =
  btn +
  " bg-[var(--color-background)] text-[var(--color-text)] border-2 border-[var(--color-text)] hover:bg-[var(--color-surface)]";
const quiet =
  "inline-flex items-center gap-2 min-h-[44px] text-[17px] leading-[1.2] font-semibold text-[var(--color-primary)] underline decoration-2 underline-offset-4 hover:decoration-[3px] hover:text-[var(--color-primary-hover)] transition-colors duration-[120ms]";
const inlineLink =
  "text-[var(--color-primary)] underline decoration-2 underline-offset-[3px] hover:text-[var(--color-primary-hover)]";
const h2 =
  "font-[family-name:var(--font-display)] text-[32px] leading-[1.15] font-bold text-[var(--color-text)]";
const h3 =
  "font-[family-name:var(--font-display)] text-[22px] leading-[1.25] font-semibold text-[var(--color-text)]";
const wrap = "mx-auto w-full max-w-[1120px] px-4 sm:px-6";
const small = "text-[15px] leading-[1.45] text-[var(--color-muted-text)]";

function HexStrip() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="100%"
      height="24"
      className="block bg-[var(--color-background)]"
    >
      <defs>
        <pattern id="hex-dots" width="24" height="24" patternUnits="userSpaceOnUse">
          <polygon points="12,5 18,8.5 18,15.5 12,19 6,15.5 6,8.5" fill="#231A12" />
        </pattern>
      </defs>
      <rect width="100%" height="24" fill="url(#hex-dots)" />
    </svg>
  );
}

export default function ClientSitePage() {
  const [open, setOpen] = useState(false);
  const [shotFailed, setShotFailed] = useState(false);
  const [atVisit, setAtVisit] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const visitRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key === "Tab") {
        const root = dialogRef.current;
        if (!root) return;
        const f = Array.from(
          root.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
        );
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        const active = document.activeElement;
        if (e.shiftKey && (active === first || !root.contains(active))) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && (active === last || !root.contains(active))) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      prev?.focus();
    };
  }, [open]);

  useEffect(() => {
    const el = visitRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => setAtVisit(en.isIntersecting));
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      id="top"
      className={`${ArchivoFont.variable} ${InstrumentSansFont.variable} font-[family-name:var(--font-body)] text-[17px] leading-[1.55] bg-[var(--color-background)] text-[var(--color-text)] pb-[64px] lg:pb-0 max-w-full [overflow-x:clip]`}
    >
      <style>{`
:root {
  --color-background: #FFFFFF;
  --color-surface: #F2F1EE;
  --color-text: #231A12;
  --color-muted-text: #5E5249;
  --color-border: #D9D6D0;
  --color-primary: #8C3A2B;
  --color-on-primary: #FFFFFF;
  --color-accent: #2F6B57;
}
body { background: var(--color-background); color: var(--color-text); }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; } }
`}</style>
      <style>{`
:root { --color-primary-hover: #6F2D21; --color-primary-active: #5C241A; }
html { scroll-padding-top: 88px; }
@media (prefers-reduced-motion: no-preference) { html { scroll-behavior: smooth; } }
@keyframes ba-fade { from { opacity: 0; } to { opacity: 1; } }
.ba-img { animation: ba-fade 200ms ease-out both; }
a:focus-visible, button:focus-visible { outline: 3px solid var(--color-text); outline-offset: 2px; }
`}</style>

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-[4px] focus:bg-[var(--color-background)] focus:px-4 focus:py-3 focus:text-[var(--color-text)] focus:border-2 focus:border-[var(--color-text)]"
      >
        Skip to content
      </a>

      {/* Preview bar */}
      <div className="bg-[var(--color-text)] text-[var(--color-background)]">
        <div className={`${wrap} flex flex-wrap items-center justify-between gap-x-4 gap-y-0 py-1 text-[15px] leading-[1.45]`}>
          <p>Concept preview for Blue Angel Cafe &amp; Bakery by Apex Digital</p>
          <button
            type="button"
            onClick={() => {
              setShotFailed(false);
              setOpen(true);
            }}
            className="min-h-[44px] underline decoration-2 underline-offset-4 hover:decoration-[3px] font-semibold focus-visible:outline-[var(--color-background)]"
            style={{ outlineColor: "var(--color-background)" }}
          >
            Compare with current site
          </button>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-background)]">
        <div className={`${wrap} flex h-16 lg:h-[72px] items-center justify-between gap-3`}>
          <a
            href="#top"
            className="flex shrink-0 whitespace-nowrap gap-2 min-h-[44px] items-center font-[family-name:var(--font-display)] text-[22px] leading-[1.25] font-bold text-[var(--color-text)] no-underline"
            aria-label="Blue Angel Cafe & Bakery, back to top"
          >
            Blue Angel
            <span className="hidden lg:inline font-[family-name:var(--font-body)] text-[15px] font-normal text-[var(--color-muted-text)]">
              Hoboken
            </span>
          </a>
          <nav aria-label="Main" className="flex min-w-0 items-center gap-5 lg:gap-8">
            <a href="#menu" className={quiet}>
              Menu
            </a>
            <a href="#reviews" className={`${quiet} hidden lg:inline-flex`}>
              Reviews
            </a>
            <a href="#visit" className={`${quiet} hidden lg:inline-flex`}>
              Visit
            </a>
            <a href={PHONE_TEL} className={`${quiet} md:hidden`}>
              Call
            </a>
            <a href={PHONE_TEL} className={`${btnPrimary} hidden md:inline-flex !min-h-[44px] !py-2 whitespace-nowrap`}>
              <Phone size={20} strokeWidth={1.75} aria-hidden="true" />
              Call to order
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section aria-labelledby="hero-title" className="pt-8 lg:pt-16">
          <div className={`${wrap} grid gap-6 lg:grid-cols-12 lg:gap-12 lg:items-start`}>
            <div className="min-w-0 lg:col-span-7">
              <h1
                id="hero-title"
                className="font-[family-name:var(--font-display)] text-[36px] min-[480px]:text-[44px] lg:text-[52px] leading-[1.05] font-bold text-[var(--color-text)]"
              >
                Fresh Korean-style bread and coffee on Hudson St
              </h1>
              <p className="mt-4 max-w-[34rem] text-[19px] leading-[1.5]">
                Pastries baked in-house, lattes, matcha and plenty of seats. Call to order, or walk in at 79 Hudson St.
              </p>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6 lg:mt-8">
                <a href={PHONE_TEL} className={btnPrimary}>
                  <Phone size={20} strokeWidth={1.75} aria-hidden="true" />
                  Call to order
                </a>
                <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className={quiet}>
                  <MapPin size={20} strokeWidth={1.75} aria-hidden="true" />
                  Directions
                </a>
              </div>
              <p className={`mt-4 ${small}`}>
                {ADDRESS}
                <br />
                <a href={PHONE_TEL} className={inlineLink}>
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>
            <div className="min-w-0 lg:col-span-5">
              <img
                src={PHOTO_STOREFRONT}
                alt="Blue Angel storefront on Hudson St with CAFE and BAKERY awnings"
                width={1200}
                height={900}
                referrerPolicy="no-referrer"
                className="ba-img w-full rounded-[8px] object-cover object-[50%_75%] aspect-[16/10] md:aspect-[16/7] lg:aspect-[4/5]"
              />
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" aria-labelledby="reviews-title" className="pt-14 lg:pt-24">
          <div className={wrap}>
            <h2 id="reviews-title" className={h2}>
              Rated 4.5 on Google
            </h2>
            <p className={`mt-1 ${small}`}>82 reviews</p>

            {/* TODO before sending: confirm 4.5 rating and 82 reviews against the live Google listing and note the date. */}
            <div className="mt-6 lg:mt-8 grid gap-6 lg:gap-10">
              <div className="min-w-0">
                <figure className="border-l-[3px] border-[var(--color-primary)] pl-5 lg:pl-8">
                  <blockquote className="text-[19px] leading-[1.5]">
                    <p>
                      &ldquo;I&apos;ve traveled to many cafes. Camilla made the best Iced Brown Sugar Latte I&apos;ve ever had! Gave me a sample of a pastry, fresh and amazing. Looking forward to making this my go-to cafe whenever I&apos;m in Hoboken and you should too!&rdquo;
                    </p>
                  </blockquote>
                  <figcaption className="mt-4">
                    <h3 className={h3}>Steven P</h3>
                    <p className={small}>5 stars on Google</p>
                  </figcaption>
                </figure>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
                {[
                  {
                    name: "J",
                    stars: "5 stars",
                    when: "a week ago",
                    text: "Its actually better because none of these are frozen baked! … I love this because these dont taste too sweet like franchised bakeries and everything is so fresh!",
                  },
                  {
                    name: "Vanshika Mehta",
                    stars: "5 stars",
                    when: "a month ago",
                    text: "We had the Almost Chestnut Pastry, Flatwhite coffee and a white chocolate mocha. All of them tasted really good! Staff is really friendly and helpful.",
                  },
                  {
                    name: "Aishwarya Mandya Yogananda",
                    stars: "5 stars",
                    when: "a month ago",
                    text: "Love this place! Would definitely visit again. Julie is a sweet lady who has maintained the place really well. Their matcha was perfect!",
                  },
                  {
                    name: "Kumar",
                    stars: "4 stars",
                    when: "4 months ago",
                    text: "Decent lattes and really good pastries!",
                  },
                ].map((r, i) => (
                  <figure
                    key={r.name}
                    className={`${i >= 2 ? "hidden md:block" : ""} min-w-0 rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 lg:p-6 text-[17px]`}
                  >
                    <blockquote>
                      <p>&ldquo;{r.text}&rdquo;</p>
                    </blockquote>
                    <figcaption className="mt-3">
                      <h3 className={h3}>{r.name}</h3>
                      <p className={small}>
                        {r.stars} on Google
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <div className="mt-4 lg:mt-6">
              <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className={quiet}>
                Read all reviews on Google
                <ExternalLink size={20} strokeWidth={1.75} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Menu / case */}
        <section id="menu" aria-labelledby="menu-title" className="pt-14 lg:pt-24">
          <div className={wrap}>
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <h2 id="menu-title" className={h2}>
                  Fresh bread, pastries and coffee
                </h2>
                <p className="mt-6 lg:mt-8 max-w-[34rem]">
                  Everything is baked in-house every morning. The bar adds lattes, tea and matcha, so there is more than one reason to stop in.
                </p>
                <h3 className={`${h3} mt-8`}>Mentioned in our reviews</h3>
                <ul className="mt-3 max-w-[30rem] border-t border-[var(--color-border)]">
                  {CASE_ITEMS.map((item) => (
                    <li key={item} className="border-b border-[var(--color-border)] py-2">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                  <a href={PHONE_TEL} className={btnPrimary}>
                    <Phone size={20} strokeWidth={1.75} aria-hidden="true" />
                    Call to order
                  </a>
                  <a href="#visit" className={quiet}>
                    Hours and directions
                  </a>
                </div>
                <p className={`mt-6 max-w-[30rem] ${small}`}>
                  Gluten-free, dairy-free, egg-free and sourdough options are available. Call to check what&apos;s in the case today.
                </p>
              </div>

              <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2 sm:gap-4 lg:gap-6 content-start">
                <figure>
                  <img
                    src={PHOTO_CASE}
                    alt="Bread and pastries on trays in the glass case at Blue Angel Hoboken"
                    width={900}
                    height={1200}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="ba-img w-full rounded-[8px] object-cover aspect-[3/4]"
                  />
                  <figcaption className={`mt-2 ${small}`}>The case at Blue Angel Hoboken. Photo by J on Google Maps.</figcaption>
                </figure>
                <figure className="sm:mt-10">
                  <img
                    src={PHOTO_TRAYS}
                    alt="Wooden trays of buns and pastries under warm pendant lights"
                    width={900}
                    height={1200}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="ba-img w-full rounded-[8px] object-cover aspect-[3/4]"
                  />
                  <figcaption className={`mt-2 ${small}`}>Trays of buns and pastries. Photo by Jonathan Kim on Google Maps.</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Inside */}
        <section
          id="inside"
          aria-labelledby="inside-title"
          className="mt-14 lg:mt-24 bg-[var(--color-surface)] py-14 lg:py-24"
        >
          <div className={`${wrap} grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-center`}>
            <div className="lg:col-span-5 lg:order-1 order-2">
              <h2 id="inside-title" className={h2}>
                Seats for one or a big group
              </h2>
              <div className="mt-6 lg:mt-8 max-w-[34rem] space-y-4">
                <p>Stay for a coffee and a pastry, or take it with you. There is room to sit whether you come alone or with a crowd.</p>
                <p>
                  Blue Angel started in 2017 and bakes in-house every morning.
                </p>
              </div>
              <figure className="mt-6 max-w-[34rem] border-l-[3px] border-[var(--color-primary)] pl-5">
                <blockquote className="text-[19px] leading-[1.5]">
                  <p>&ldquo;Place has plenty of sitting for a large group to solo sitting and it&apos;s Korean-standard clean.&rdquo;</p>
                </blockquote>
                <figcaption className={`mt-2 ${small}`}>J, 5 stars on Google</figcaption>
              </figure>
              <div id="about" className="mt-8 max-w-[34rem] scroll-mt-24">
                <h3 className={h3}>About us</h3>
                <p className="mt-2">
                  Established in 2017 from our passion for the highest quality baked goods. We bake our products in-house every morning, and we offer gluten-free, dairy-free, egg-free and sourdough options.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7 lg:order-2 order-1 lg:flex lg:justify-end">
              <img
                src={PHOTO_INSIDE}
                alt="Inside Blue Angel Hoboken: white tile wall with BLUE ANGEL HOBOKEN in black block letters, with tables below"
                width={1200}
                height={900}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="ba-img w-full lg:max-w-[520px] rounded-[8px] object-cover aspect-[4/3] lg:aspect-[3/4]"
              />
            </div>
          </div>
        </section>

        {/* Visit */}
        <section id="visit" ref={visitRef} aria-labelledby="visit-title" className="pt-14 lg:pt-24">
          <div className={wrap}>
            <h2 id="visit-title" className={h2}>
              Find us on Hudson St
            </h2>
            <div className="mt-6 lg:mt-8 grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start">
              <div className="lg:col-span-5">
                <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-background)] p-6">
                  <h3 className={h3}>Blue Angel Cafe &amp; Bakery</h3>
                  <address className="mt-3 not-italic">
                    79 Hudson St 1st Floor
                    <br />
                    Hoboken, NJ 07030
                  </address>
                  <p className="mt-2">
                    <a href={PHONE_TEL} className={`${inlineLink} font-semibold`}>
                      {PHONE_DISPLAY}
                    </a>
                  </p>
                  <h3 className={`${h3} mt-6`}>Hours</h3>
                  <dl className="mt-2">
                    <div className="flex justify-between gap-4 border-b border-[var(--color-border)] py-2">
                      <dt>Monday to Friday</dt>
                      <dd>7:00 AM – 7:00 PM</dd>
                    </div>
                    <div className="flex justify-between gap-4 py-2">
                      <dt>Saturday and Sunday</dt>
                      <dd>8:00 AM – 6:00 PM</dd>
                    </div>
                  </dl>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                    <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                      <MapPin size={20} strokeWidth={1.75} aria-hidden="true" />
                      Get directions
                    </a>
                    <a href={PHONE_TEL} className={btnSecondary}>
                      <Phone size={20} strokeWidth={1.75} aria-hidden="true" />
                      Call
                    </a>
                  </div>
                </div>
                <p className="mt-4">
                  <a
                    href={DIRECTIONS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 text-[15px] leading-[1.45] font-semibold text-[var(--color-accent)] underline decoration-2 underline-offset-[3px]"
                  >
                    <MapPin size={20} strokeWidth={1.75} aria-hidden="true" />
                    Open now? Check today&apos;s hours on Google Maps
                  </a>
                </p>
                <p className={`mt-2 ${small}`}>
                  Blue Angel also has a Fort Lee location. This page covers the Hoboken shop.
                </p>
              </div>
              <div className="lg:col-span-7">
                <img
                  src={PHOTO_STOREFRONT}
                  alt="Red brick storefront of Blue Angel Cafe & Bakery at 79 Hudson St, Hoboken"
                  width={1200}
                  height={900}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="ba-img w-full rounded-[8px] object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section aria-labelledby="closing-title" className="py-14 lg:py-24">
          <div className={wrap}>
            <h2 id="closing-title" className={h2}>
              Order from Blue Angel Hoboken
            </h2>
            <p className="mt-6 lg:mt-8 max-w-[34rem]">
              Call {PHONE_DISPLAY} to order, or walk in at 79 Hudson St.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-8">
              <a href={PHONE_TEL} className={btnPrimary}>
                <Phone size={20} strokeWidth={1.75} aria-hidden="true" />
                Call to order
              </a>
              <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className={btnSecondary}>
                <MapPin size={20} strokeWidth={1.75} aria-hidden="true" />
                Directions
              </a>
            </div>
          </div>
        </section>
      </main>

      <HexStrip />
      <footer className="bg-[var(--color-surface)] py-12">
        <div className={`${wrap} grid gap-8 md:grid-cols-3`}>
          <div>
            <p className="font-[family-name:var(--font-display)] text-[22px] leading-[1.25] font-bold">Blue Angel</p>
            <p className="mt-2">{ADDRESS}</p>
            <p className="mt-1">
              <a href={PHONE_TEL} className={inlineLink}>
                {PHONE_DISPLAY}
              </a>
            </p>
          </div>
          <nav aria-label="Footer">
            <h2 className={h3}>Links</h2>
            <ul className="mt-2">
              <li>
                <a href="#menu" className={quiet}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#reviews" className={quiet}>
                  Reviews
                </a>
              </li>
              <li>
                <a href="#about" className={quiet}>
                  About
                </a>
              </li>
              <li>
                <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className={quiet}>
                  Directions
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <h2 className={h3}>Hours</h2>
            <p className="mt-2">Monday to Friday: 7:00 AM – 7:00 PM</p>
            <p>Saturday and Sunday: 8:00 AM – 6:00 PM</p>
          </div>
        </div>
        <div className={`${wrap} mt-8 border-t border-[var(--color-border)] pt-4 ${small}`}>
          <p>Blue Angel also has a Fort Lee location.</p>
          <p className="mt-1">Concept by Apex Digital</p>
        </div>
      </footer>

      {/* Mobile bottom bar */}
      {!atVisit && (
        <div className="fixed inset-x-0 bottom-0 z-30 h-16 border-t border-[var(--color-border)] bg-[var(--color-surface)] lg:hidden">
          <div className="mx-auto grid h-full w-full max-w-[560px] grid-cols-3 items-center gap-2 px-3 box-border">
            <a href="#menu" className={`${btnPrimary} !min-h-[48px] !py-2 !px-1 !text-[15px] min-w-0 max-w-full`}>
              Menu
            </a>
            <a href={PHONE_TEL} className={`${btnSecondary} !min-h-[48px] !py-2 !px-1 !text-[15px] min-w-0 max-w-full`}>
              Call
            </a>
            <a
              href={DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnSecondary} !min-h-[48px] !py-2 !px-1 !text-[15px] min-w-0 max-w-full`}
            >
              Directions
            </a>
          </div>
        </div>
      )}

      {/* Compare modal */}
      {open && (
        <div
          className="fixed inset-0 z-[70] overflow-y-auto bg-[var(--color-surface)] px-4 py-6 sm:px-6"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="compare-title"
            className="mx-auto w-full max-w-[1000px] rounded-[8px] border border-[var(--color-border)] bg-[var(--color-background)] p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 id="compare-title" className={h2}>
                Compare with current site
              </h2>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close comparison"
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] border-2 border-[var(--color-text)] bg-[var(--color-background)] text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors duration-[120ms]"
              >
                <X size={20} strokeWidth={1.75} aria-hidden="true" />
              </button>
            </div>
            <div className={`mt-6 grid gap-6 ${shotFailed ? "" : "md:grid-cols-[minmax(0,320px)_1fr]"}`}>
              {!shotFailed && (
                <img
                  src="/previews/blue-angel-cafe-bakery/current-site.png"
                  alt="Screenshot of the current Blue Angel website"
                  width={390}
                  height={844}
                  onError={() => setShotFailed(true)}
                  className="w-full max-w-[320px] rounded-[8px] border border-[var(--color-border)] object-cover object-top"
                />
              )}
              <ul className="space-y-3">
                {COMPARE_POINTS.map((p) => (
                  <li key={p} className="border-b border-[var(--color-border)] pb-3 text-[17px] leading-[1.55]">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
