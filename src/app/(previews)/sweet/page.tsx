"use client";
import "./page.css";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent as ReactKeyboardEvent } from "react";

const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Sweet%20343%20Garden%20St%2C%20Hoboken%2C%20NJ%2007030%2C%20USA";
const CURRENT_SITE = "http://www.sweethoboken.com/";
const NB = " ";

const PHOTO_1 =
  "https://lh3.googleusercontent.com/grass-cs/AABkmLeiGJnsf8A9h2iDjwIwzHEx-RiNf5xSOqqMeFF9X19rKbCykn1rQXmmh3a7upXcOknkOM95PsTV15jhtTu9ICrSeXDAFQ-qRLgydP7kInmveRurolCKgybtxhWMGM2NVXT15-_4=s4800-w1600-h1200";
const PHOTO_2 =
  "https://lh3.googleusercontent.com/grass-cs/AABkmLfhuCTWMCaFCT0j6qGQQMuxcCunyaZAFKmmDGrg9dxunvYn-r37sh-lxWFDKZcJ6Q_vOxelVPnqQsWhK2mpCe8PJMLxdxpc7GjetvmS8ioHJijAkETRXfIvQgnnR8pcJbDuNukX=s4800-w1260-h945";
const PHOTO_3 =
  "https://lh3.googleusercontent.com/grass-cs/AABkmLeZWkZNnQHh2gLlgl6y1-EvdYbm3xkDpJlxqr69szfOnD3Ohjf3-HgkIo5ulvmQS6t7-KmAExnwtLQfSxu_kkN8UbWhNpioKSvDws4XrZ1ObgRPJOaxCYgahmBNf5BT5XU5rSLr=s4800-w1600-h1200";
const PHOTO_4 =
  "https://lh3.googleusercontent.com/grass-cs/AABkmLckA6H9sKuaq9JjXO1iJrlxYTq-BwkUjMiTRYRlRRlT216iPdGwDGhALtDu_rIL9ffsUtJiVjF9hKtdIO5zxiw6bjRqG0MQkdvCu0_4XP161RoDp3_PyqpuPzduTS04XEWdjoA=s4800-w1600-h1200";

/* Google listing hours, 24h, by day index (0 = Sunday). */
const HOURS: Record<number, [number, number] | null> = {
  0: [9, 16],
  1: null,
  2: [10, 18],
  3: [10, 18],
  4: [10, 18],
  5: [10, 18],
  6: [9, 17],
};
const DAY_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DAY_LONG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const ROWS: { label: string; days: number[]; hours: string | null }[] = [
  { label: "Tuesday to Friday", days: [2, 3, 4, 5], hours: `10${NB}AM to 6${NB}PM` },
  { label: "Saturday", days: [6], hours: `9${NB}AM to 5${NB}PM` },
  { label: "Sunday", days: [0], hours: `9${NB}AM to 4${NB}PM` },
  { label: "Monday", days: [1], hours: null },
];

const fmt = (h: number) => `${h % 12 === 0 ? 12 : h % 12}${NB}${h >= 12 ? "PM" : "AM"}`;

function readDoor(now: Date): { line: string; day: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "0";
  const day = Math.max(0, DAY_SHORT.indexOf(get("weekday")));
  const minutes = (Number(get("hour")) % 24) * 60 + Number(get("minute"));
  const today = HOURS[day];
  if (today && minutes < today[0] * 60) return { day, line: `Opens today at ${fmt(today[0])}` };
  if (today && minutes < today[1] * 60) return { day, line: `Open now, until ${fmt(today[1])}` };
  for (let d = 1; d <= 7; d++) {
    const idx = (day + d) % 7;
    const h = HOURS[idx];
    if (h) {
      return { day, line: `Closed now. Opens ${d === 1 ? "tomorrow" : DAY_LONG[idx]} at ${fmt(h[0])}` };
    }
  }
  return { day, line: "Closed now" };
}

const POINTS = [
  "The phone view of sweethoboken.com looks like a 2012 build: the footer reads “© 2012 sweethoboken.com”, the navigation is a plain-text wrapped row (About, Menus, Gallery, Ideas, FAQs, Hours Location, Blog), and the type is large and unstyled.",
  "There is no way to start an order. The site has no online ordering, no custom-cake enquiry form and no “order” button, though the 156 reviews are mostly about custom cakes (a baby shower cake, a wedding cake, a bridesmaid proposal cake, birthday cupcakes).",
  "Hours and location are hidden: “Hours Location” is one wrapped link in the nav, so a visitor with a phone cannot see whether the shop is open or find the address without tapping into another page.",
  "The hours the shop shows are inconsistent: the window sign in the Google photo reads “open everyday” from 7:30 AM Monday to Friday, while the Google listing says closed Monday and opens at 10 AM Tuesday to Friday. Customers can’t tell which is right.",
  "The homepage shows only one stock photo of stacked kraft boxes, with a cupcake or two on top, and one tagline. None of the real work (the sheet cakes, the wedding cakes, the cupcake case) appears on the first screen.",
  "The social links are tiny icons for networks that have changed (Google+ style icon, old Twitter bird), and the line “Check out our Sweet pages” sends people away from the site to places that aren’t named.",
  "The menu page may be an image or a PDF; we did not inspect it. Either would make it hard to read, search or share on a phone, and no prices or item descriptions were captured anywhere.",
];

const SLOT_SCRIPT =
  "window.hallmarkSlots = function (m) { Object.keys(m).forEach(function (k) { var v = m[k]; var s = document.querySelector('[data-slot=\"' + k + '\"]'); if (!s) return; var im = new Image(); im.src = typeof v === 'string' ? v : v.src; im.alt = (typeof v === 'object' && v.alt) || s.dataset.alt || ''; s.querySelectorAll(':scope > img').forEach(function (o) { o.remove(); }); s.prepend(im); }); };" +
  "document.querySelectorAll('[data-slot] img').forEach(function (i) { if (i.complete && !i.naturalWidth) i.remove(); else i.addEventListener('error', function () { i.remove(); }, { once: true }); });";

const step = (n: number) => ({ "--i": n }) as CSSProperties;

export default function ClientSitePage() {
  const [door, setDoor] = useState<{ line: string; day: number } | null>(null);
  const [shot, setShot] = useState(true);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tick = () => setDoor(readDoor(new Date()));
    tick();
    const id = window.setInterval(tick, 60000);
    return () => window.clearInterval(id);
  }, []);

  const openDialog = () => dialogRef.current?.showModal();
  const closeDialog = () => dialogRef.current?.close();

  const trapTab = (e: ReactKeyboardEvent<HTMLDialogElement>) => {
    if (e.key !== "Tab" || !dialogRef.current) return;
    const items = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>("button, a[href], [tabindex]:not([tabindex='-1'])"),
    );
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" precedence="default" href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@100..900&display=swap" />
      <link rel="stylesheet" precedence="default" href="https://api.fontshare.com/v2/css?f[]=sentient@300,400,500,600,700&display=swap" />

      <a className="skip" href="#main">Skip to content</a>

      <div className="preview">
        <div className="container preview__in">
          <span>Concept preview for Sweet by Apex Digital</span>
          <button ref={triggerRef} className="preview__btn" type="button" onClick={openDialog}>
            Compare with current site
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="dialog"
        aria-labelledby="compare-title"
        onClose={() => triggerRef.current?.focus()}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeDialog();
        }}
        onKeyDown={trapTab}
      >
        <div className={shot ? "dialog__in" : "dialog__in dialog__in--plain"}>
          <div className="dialog__top">
            <h2 id="compare-title">The current site, point by point</h2>
            <button className="btn" type="button" onClick={closeDialog}>Close</button>
          </div>
          {shot && (
            <img
              className="dialog__shot"
              src="/previews/sweet/current-site.png"
              width={390}
              height={844}
              alt="Screenshot of sweethoboken.com as it looks today"
              loading="lazy"
              onError={() => setShot(false)}
            />
          )}
          <ul className="dialog__points">
            {POINTS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </dialog>

      <header className="site-header">
        <div className="container masthead">
          <nav aria-label="Main">
            <ul className="masthead__links">
              <li><a href="#case">In the case</a></li>
              <li><a href="#cakes">Cakes</a></li>
              <li><a href="#hours">Hours</a></li>
              <li><a href="#find">Find us</a></li>
            </ul>
          </nav>
          <a className="wordmark" href="#top" aria-label="Sweet, back to the top">Sweet</a>
          <a className="btn btn--nav masthead__action" href="#find">Hours and directions</a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="air" aria-hidden="true" />
          <div className="container">
            <div className="grid12 hero__grid">
              <div className="hero__text">
                <h1 className="settle" style={step(0)}>Cupcakes by the box, sheet cakes to order.</h1>
                <p className="lead settle" style={step(1)}>Made from scratch on the premises, in Hoboken.</p>
                <div className="actions settle" style={step(2)}>
                  <a className="btn" href={MAPS} target="_blank" rel="noopener noreferrer">Get directions</a>
                  <a className="link" href="tel:2014200111">Call (201) 420-0111</a>
                </div>
              </div>
              <figure className="stock print hero__print settle" style={step(3)}>
                <div
                  className="print__frame frame--hero"
                  data-slot="hero"
                  data-alt="The shop's storefront: mint frame, the name in script on the window"
                >
                  <img
                    src={PHOTO_1}
                    width={1600}
                    height={1200}
                    alt="The mint green storefront of Sweet on Garden Street, with the name in script on the window"
                    fetchPriority="high"
                  />
                </div>
                <figcaption className="print__label">
                  <span className="pencil">{door ? door.line : "Open Tuesday to Sunday, closed Monday"}</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section" id="case" aria-labelledby="case-title">
          <div className="container">
            <div className="grid12 head">
              <h2 id="case-title" className="short-rule">A box of four, from the case</h2>
            </div>
            <div className="grid12 case__grid">
              <figure className="stock print case__a">
                <div
                  className="print__frame frame--case-a"
                  data-slot="case-1"
                  data-alt="A tray of cupcakes in the case with its card"
                >
                  <img
                    src={PHOTO_3}
                    width={1600}
                    height={1200}
                    alt="A white tray of chocolate cupcakes with chocolate buttercream and rainbow sprinkles, beside a card in the glass"
                    loading="lazy"
                  />
                </div>
                <figcaption className="wall">
                  <span className="obj">The card in the glass</span>
                  &ldquo;Chocolate: choc cake topped with chocolate buttercream&rdquo;
                </figcaption>
              </figure>
              <figure className="stock print case__b">
                <div
                  className="print__frame frame--case-b"
                  data-slot="case-2"
                  data-alt="A box of four cupcakes"
                >
                  <img
                    src={PHOTO_4}
                    width={1600}
                    height={1200}
                    alt="A box of four cupcakes: white, chocolate, purple and a tan swirl, each with sprinkles"
                    loading="lazy"
                  />
                </div>
                <figcaption className="wall">
                  <span className="obj">A box of four</span>
                  white, chocolate, purple and a tan swirl
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section--s band" id="cakes" aria-labelledby="cakes-title">
          <div className="container">
            <h2 id="cakes-title">Cakes made to order</h2>
            <figure className="statement">
              <blockquote>
                <p className="statement__text">&ldquo;Unlike other vendors they did not try to upcharge us for a wedding cake.&rdquo;</p>
              </blockquote>
              <figcaption className="wall">
                <span className="obj">Justine Dilworth</span>
                5 stars on Google
              </figcaption>
            </figure>
            <div className="grid12 cakes__split">
              <figure className="stock print cakes__print">
                <div
                  className="print__frame frame--cake"
                  data-slot="cake-1"
                  data-alt="A custom birthday sheet cake in buttercream"
                >
                  <img
                    src={PHOTO_2}
                    width={1260}
                    height={945}
                    alt="A turquoise sheet cake piped with two characters in buttercream and covered in confetti sprinkles"
                    loading="lazy"
                  />
                </div>
                <figcaption className="wall wall--pencil">Buttercream piping, a birthday sheet cake</figcaption>
              </figure>
              <div className="cakes__text">
                <p className="cakes__note">
                  Customers write about custom work: a baby shower cake, a bridesmaid proposal, cupcakes copied from a vintage heart.
                </p>
                <p className="rating">4.3 on Google, from 156 reviews.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="hours" aria-labelledby="hours-title">
          <div className="container">
            <div className="grid12 week__grid">
              <div className="week__head">
                <h2 id="hours-title">The week at the door</h2>
                <p className="lead">Closed Mondays.</p>
              </div>
              <table className="hours">
                <caption className="visually-hidden">Opening hours</caption>
                <thead>
                  <tr>
                    <th scope="col">Day</th>
                    <th scope="col">Open</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((r) => (
                    <tr key={r.label}>
                      <th scope="row">
                        {r.label}
                        {door && r.days.includes(door.day) && <span className="today">today</span>}
                      </th>
                      <td className={r.hours ? undefined : "is-closed"}>{r.hours ?? "Closed"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section--s band" id="find" aria-labelledby="find-title">
          <div className="container">
            <div className="grid12 find__grid">
              <div className="find__where">
                <h2 id="find-title">Come in Tuesday, or call about a cake</h2>
                <address className="address">
                  343 Garden St<br />Hoboken, NJ 07030
                </address>
                <div className="actions">
                  <a className="btn" href={MAPS} target="_blank" rel="noopener noreferrer">Get directions</a>
                </div>
              </div>
              <div className="stock card">
                <p className="card__name">Ordering a cake</p>
                <p className="card__line">By phone or by email.</p>
                <ul className="card__lines">
                  <li><a href="tel:2014200111">Call (201) 420-0111</a></li>
                  <li><a href="mailto:sweethoboken343@me.com">sweethoboken343@me.com</a></li>
                </ul>
                <p className="card__tip">Bring a picture of what you have in mind.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p className="footer__statement">Baked from scratch, made on premises.</p>
          <div className="footer__cols">
            <a href={CURRENT_SITE}>sweethoboken.com</a>
          </div>
          <p className="credits" data-credits>
            Photographs: Lisa Hoskins, Sweet, Kathy Zucker and Rene Palaguachi (Google Maps). &copy; Sweet{" "}
            <span suppressHydrationWarning>{new Date().getFullYear()}</span>.
          </p>
        </div>
      </footer>

      <nav className="dock" aria-label="Call or get directions">
        <a className="link" href="tel:2014200111">Call</a>
        <a className="btn" href={MAPS} target="_blank" rel="noopener noreferrer">Get directions</a>
      </nav>

      <script dangerouslySetInnerHTML={{ __html: SLOT_SCRIPT }} />
    </>
  );
}
