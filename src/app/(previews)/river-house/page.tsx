"use client";
import "./page.css";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";

const MAPS =
  "https://www.google.com/maps/search/?api=1&query=River%20House%20725%20River%20Rd%2C%20Edgewater%2C%20NJ%2007020%2C%20USA";
const TEL = "tel:+12019175550";
const PHONE = "(201) 917-5550";

const PHOTOS = {
  sign: "https://lh3.googleusercontent.com/grass-cs/AABkmLcoF2hD4lk4td_ccsjfxQuA2qjidvhOT_EBpnYrMe-q58rMtureb-ODIB-Pi3S2NfVeKgd3cLCVMo6R0HD_dxeHKQoJwPMOlf_4tGgyJC08z9v1OixPalpd1ofWvIzRQjYu9KGi=s4800-w1600-h1200",
  hero: "https://lh3.googleusercontent.com/grass-cs/AABkmLfyBTXROoC386yVrkesptA-t56ztjYWogDDNZwtse0P3Kk5e3q62Yfx-mDz6_JD1eSLW1AS4Vq2cD8hVtEvz0q-VI_9sdX8sFkYfEl6teb72M3nic2Oh5XGHImB6LvDu4ssvqSEErjfHAkX=s4800-w1600-h1200",
  noodles:
    "https://lh3.googleusercontent.com/grass-cs/AABkmLccTBNq1taBi3Dg9t6hEJ2-z2g2q3OgcwHkFv1qK0I2JOQag-d6BarWq8Bu4UHTLI0UleDLkeZz5QvYLtDhQTaS0DqEIEZwxRWw32URObbOVRz6pNRIvvasC5iOJWVi-oqvWFci2Br8S4Y=s4800-w1600-h1200",
  shrimp:
    "https://lh3.googleusercontent.com/grass-cs/AABkmLfDvIPX1jInN97wh6cAxxpBFBCSciHprhvLaz7dpR7UFiq8DyU33EUjDr7ps2zcgdHeLdJCGKx7A3sDcya4dgE4h2VYqxKCXLp7S8UQuij0YaIVdMPmeCBhoonwKn0Jt7W5RGj9ujIAxW7S=s4800-w1600-h1200",
};

type Slot = {
  key: string;
  days: string;
  short: string;
  dow: number[];
  open: number;
  close: number;
  from: string;
  to: string;
};

const HOURS: Slot[] = [
  { key: "mon-thu", days: "Monday to Thursday", short: "Mon to Thu", dow: [1, 2, 3, 4], open: 705, close: 1275, from: "11:45 AM", to: "9:15 PM" },
  { key: "fri-sat", days: "Friday and Saturday", short: "Fri and Sat", dow: [5, 6], open: 705, close: 1305, from: "11:45 AM", to: "9:45 PM" },
  { key: "sun", days: "Sunday", short: "Sun", dow: [0], open: 750, close: 1275, from: "12:30 PM", to: "9:15 PM" },
];

const WEEK = [1, 2, 3, 4, 5, 6, 0].map((d) => ({
  dow: d,
  name: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][d],
  slot: HOURS.find((h) => h.dow.includes(d)) ?? HOURS[0],
}));

const DISHES = [
  "Hot and Pepper Shrimp",
  "Szechuan Pork Dumpling",
  "Hunan Pork",
  "Crispy Seabass Hunan Style",
  "Shredded Beef and Hot Pepper",
  "Mixed Seafood Noodle Soup",
  "Orange chicken",
  "General’s chicken",
  "Hot-n-Sour Soup",
  "Pork belly sticky bun",
];

const QUOTES: { name: string; stars: number; text: string }[] = [
  { name: "Steve", stars: 5, text: "“This is legit the best Chinese food I’ve had in years.”" },
  {
    name: "Pedro Martinez",
    stars: 4,
    text: "“There’s access to the deck right by the river…”",
  },
  { name: "Brad Hayes", stars: 4, text: "“Very fast very fresh very good. Extra spicy… YUM!!!”" },
  { name: "Massiel Jerez", stars: 5, text: "“…they have outside seating overlooking nyc.”" },
];

const POINTS = [
  "On a phone the page is not responsive. The address line, the nav bar and the ‘Online’ button run off the right edge, so a visitor cannot read the address or reach the order button.",
  "A ‘NOTICE’ modal about delivery distance covers the top of the page on load, before anything else is seen. It holds one fact (the fee is adjusted beyond 3 miles) that belongs in a normal line of text.",
  "The notice and headlines are in a script face that is hard to read at phone size. The main tiles are washed out, so the page looks faded.",
  "There is a large ‘Online Order’ tile but no ordering link that could be found. The scraped text has no ordering or booking link, so a visitor is sent to a tile with nowhere to go.",
  "No menu, dish names with prices or lunch special details could be read from the pages. Six dishes are only named in the welcome text, so a hungry visitor cannot see what to order.",
  "Hours and the phone number are not visible in the phone screenshot, and the page uses stock-style food images, not the restaurant’s own photos.",
  "The riverside deck that guests praise in three reviews, and the parking lot, are not shown or mentioned in what was captured. The page looks weaker than a 4.2 rating from 405 reviews.",
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function nowInNJ() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return { dow: DAYS.indexOf(get("weekday")), minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

function statusNow() {
  const { dow, minutes } = nowInNJ();
  const slot = HOURS.find((h) => h.dow.includes(dow)) ?? HOURS[0];
  if (minutes >= slot.open && minutes < slot.close) return { key: slot.key, dow, text: `Open now, until ${slot.to}` };
  if (minutes < slot.open) return { key: slot.key, dow, text: `Closed, opens ${slot.from} today` };
  const next = HOURS.find((h) => h.dow.includes((dow + 1) % 7)) ?? HOURS[0];
  return { key: slot.key, dow, text: `Closed, opens ${next.from} tomorrow` };
}

export default function ClientSitePage() {
  const [live, setLive] = useState<{ key: string; dow: number; text: string } | null>(null);
  const dlg = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    setLive(statusNow());
    const id = window.setInterval(() => setLive(statusNow()), 60000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    (window as unknown as { hallmarkSlots?: (m: Record<string, string>) => void }).hallmarkSlots = (m) => {
      for (const [k, v] of Object.entries(m)) {
        const img = document.querySelector<HTMLImageElement>(`[data-slot="${k}"] > img`);
        if (img) img.src = v;
      }
    };
    const imgs = document.querySelectorAll<HTMLImageElement>("[data-slot] > img");
    const hide = (e: Event) => {
      (e.currentTarget as HTMLImageElement).hidden = true;
    };
    imgs.forEach((i) => i.addEventListener("error", hide, { once: true }));
    return () => imgs.forEach((i) => i.removeEventListener("error", hide));
  }, []);

  const closeMenu = (e: ReactMouseEvent<HTMLElement>) => {
    (e.currentTarget.closest("details") as HTMLDetailsElement | null)?.removeAttribute("open");
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="stylesheet"
        precedence="default"
        href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@100..900&family=Newsreader:wght@200..800&family=IBM+Plex+Mono:wght@300;400;500;600;700&display=swap"
      />
      <div className="page" id="top">
        <a className="skip" href="#main">
          Skip to content
        </a>

        <div className="preview-bar">
          <div className="container preview-bar__in">
            <p>Concept preview for River House by Apex Digital</p>
            <button type="button" className="linkbtn" onClick={() => dlg.current?.showModal()}>
              Compare with current site
            </button>
          </div>
        </div>

        <header className="nav">
          <div className="container nav__in">
            <a className="wordmark" href="#top" aria-label="River House, back to the top">
              River House
            </a>
            <p className="status status--nav" role="status">
              {live ? live.text : "Open daily"}
            </p>
            <nav className="nav__links" aria-label="Sections">
              <ul>
                <li><a href="#getting-there">Getting there</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#guests">Guests</a></li>
                <li><a href="#delivery">Delivery</a></li>
              </ul>
            </nav>
            <a className="btn btn--quiet nav__call" href={TEL}>
              Call {PHONE}
            </a>
            <details className="nav__menu">
              <summary>Sections</summary>
              <ul onClick={closeMenu}>
                <li><a href="#getting-there">Getting there</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#guests">Guests</a></li>
                <li><a href="#delivery">Delivery</a></li>
              </ul>
            </details>
          </div>
        </header>

        <main id="main">
          <section className="hero" aria-labelledby="hero-title">
            <div className="container hero__grid">
              <div className="hero__text">
                <h1 id="hero-title">Chinese food at the river&rsquo;s edge</h1>
                <p className="lead">Open daily at 725 River Rd, Edgewater, with a riverside deck.</p>
                <div className="actions">
                  <a className="btn btn--primary" href={MAPS} target="_blank" rel="noopener noreferrer">
                    Get directions
                  </a>
                  <a className="btn btn--quiet" href={TEL}>
                    Call
                  </a>
                </div>
              </div>
              <div className="hero__stack">
                <div
                  className="photo hero__photo"
                  data-slot="hero"
                  data-alt="Fried rice, noodles and two stir-fried dishes in blue bowls, shared at one table"
                >
                  <img
                    src={PHOTOS.hero}
                    width={1600}
                    height={1200}
                    alt="Fried rice, noodles and two stir-fried dishes in blue bowls, shared at one table"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="sheet hours">
                <div className="hours__head">
                  <h2 className="hours__title">Hours</h2>
                  <p className="hours__note">
                    <span className="hours__daily">Open daily</span>
                    <span className="hours__live">{live ? live.text : "Open daily"}</span>
                  </p>
                </div>
                <ul className="week" aria-label="Opening hours">
                  {WEEK.map((d) => {
                    const today = live?.dow === d.dow;
                    return (
                      <li key={d.dow} className={today ? "week__day is-today" : "week__day"} aria-current={today ? "date" : undefined}>
                        <span className="week__name">{d.name}</span>
                        <span className="week__time num">{d.slot.from}</span>
                        <span className="week__time num">to {d.slot.to}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </section>

          <section className="gt" id="getting-there" aria-labelledby="gt-title">
            <div className="container gt__grid">
              <div className="gt__text">
                <h2 id="gt-title">Getting there</h2>
                <address className="sheet addr">
                  <p className="addr__line">
                    <span>725 River Rd,</span>
                    <span>Edgewater, NJ 07020</span>
                  </p>
                  <a className="btn btn--quiet" href={MAPS} target="_blank" rel="noopener noreferrer">
                    Open in Google Maps
                  </a>
                </address>
              </div>
              <figure className="gt__figure">
                <div
                  className="photo gt__photo"
                  data-slot="sign"
                  data-alt="The maroon River House sign over the door, with Chinese Cuisine beneath"
                >
                  <img
                    src={PHOTOS.sign}
                    width={1600}
                    height={1200}
                    alt="The maroon River House sign over the door, with a Chinese Cuisine plate beneath"
                    loading="lazy"
                  />
                </div>
                <figcaption>The maroon sign over the door. A shared parking lot with plenty of spaces, and a deck on the river for when the weather is nice.</figcaption>
              </figure>
            </div>
          </section>

          <section className="menu" id="menu" aria-labelledby="menu-title">
            <div className="container menu__grid">
              <div className="menu__side">
                <h2 id="menu-title">On the menu, by name</h2>
                <p className="menu__line">Six dishes the restaurant names itself, and four that guests named in their reviews.</p>
                <figure className="tbl__fig">
                  <div
                    className="photo"
                    data-slot="table-1"
                    data-alt="Shrimp, squid and broccoli over pan-fried noodles"
                  >
                    <img
                      src={PHOTOS.noodles}
                      width={1600}
                      height={1200}
                      alt="Shrimp, squid and broccoli over pan-fried noodles in a white bowl, with serving tongs"
                      loading="lazy"
                    />
                  </div>
                  <figcaption>Shrimp, squid and broccoli over pan-fried noodles.</figcaption>
                </figure>
                <figure className="tbl__fig">
                  <div
                    className="photo"
                    data-slot="table-2"
                    data-alt="Shrimp with snow peas, carrot and yellow fruit in a light sauce"
                  >
                    <img
                      src={PHOTOS.shrimp}
                      width={1600}
                      height={1200}
                      alt="A white bowl of shrimp with snow peas, carrot and yellow fruit in a light sauce"
                      loading="lazy"
                    />
                  </div>
                  <figcaption>Shrimp with snow peas, carrot and yellow fruit.</figcaption>
                </figure>
              </div>
              <div className="sheet">
                <table className="ledger ledger--menu">
                  <caption className="visually-hidden">Dishes named by the restaurant and by guests</caption>
                  <tbody>
                    {DISHES.map((d) => (
                      <tr key={d}>
                        <th scope="row">{d}</th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="guests" id="guests" aria-labelledby="guests-title">
            <div className="container guests__grid">
              <div className="guests__lead">
                <h2 id="guests-title">What guests say</h2>
                <p className="guests__score">4.2</p>
                <p className="guests__cap">Google rating, from 405 reviews</p>
              </div>
              <table className="quotes">
                <caption className="visually-hidden">Guest reviews from Google</caption>
                <tbody>
                  {QUOTES.map((q) => (
                    <tr key={q.name}>
                      <th scope="row">
                        <span className="quotes__name">{q.name}</span>
                        <span className="quotes__stars">{q.stars} stars</span>
                      </th>
                      <td>{q.text}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="deliv" id="delivery" aria-labelledby="deliv-title">
            <div className="container">
              <div className="deliv__grid">
                <div className="deliv__text">
                  <h2 id="deliv-title">Delivery and takeaway</h2>
                  <ul className="terms">
                    <li>Free delivery with a $15 minimum, within 3 miles.</li>
                    <li>Beyond 3 miles the fee is adjusted automatically.</li>
                  </ul>
                </div>
                <div className="deliv__call">
                  <a className="phone" href={TEL}>
                    {PHONE}
                  </a>
                  <a className="btn btn--primary" href={TEL}>
                    Call to order
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="foot">
          <div className="container">
            <div className="foot__cols">
              <div className="foot__col">
                <p className="foot__h">Visit</p>
                <p>
                  725 River Rd
                  <br />
                  Edgewater, NJ 07020
                </p>
                <p>
                  <a href={TEL}>{PHONE}</a>
                </p>
                <p>
                  <a href={MAPS} target="_blank" rel="noopener noreferrer">
                    Get directions
                  </a>
                </p>
              </div>
            </div>
            <div className="foot__base">
              <p>River House, Chinese Cuisine</p>
              <p>Concept page by Apex Digital, not yet the restaurant&rsquo;s own site.</p>
              <p data-credits>
                Photographs: Charlie Batilo, MI-1978 and Herrard Costales, via Google Maps.
              </p>
            </div>
          </div>
        </footer>

        <div className="dock">
          <a className="btn btn--quiet" href={TEL}>
            Call
          </a>
          <a className="btn btn--primary" href={MAPS} target="_blank" rel="noopener noreferrer">
            Get directions
          </a>
        </div>

        <dialog
          ref={dlg}
          className="dlg"
          aria-labelledby="dlg-title"
          onClick={(e) => {
            if (e.target === dlg.current) dlg.current?.close();
          }}
        >
          <div className="dlg__body">
            <div className="dlg__head">
              <h2 id="dlg-title" className="dlg__title">
                Compare with current site
              </h2>
              <button type="button" className="btn btn--quiet" onClick={() => dlg.current?.close()}>
                Close
              </button>
            </div>
            <p className="dlg__lead">What a visitor meets on riverhousecc.com today.</p>
            <ul className="dlg__points">
              {POINTS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </dialog>
      </div>
    </>
  );
}
