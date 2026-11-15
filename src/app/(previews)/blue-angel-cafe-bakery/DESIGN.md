# DESIGN.md - Blue Angel Cafe & Bakery

## Direction
A bright, tiled, clean-lined look taken from the Hoboken shop itself: white subway tile, black-and-white hex floor, the blocky tile lettering on the wall, and the red brick storefront on Hudson St. White backgrounds, near-black brown text from the logo, and one brick-red action color. It fits an inexpensive neighborhood bakery where customers praise how fresh and clean it is, so the page stays plain, fast and photo-led rather than polished or boutique.

Taken from: Photo 4: white subway tile wall with 'BLUE ANGEL HOBOKEN' in black mosaic block letters and a black-and-white hex floor, which gives the white background, black text and the hex-tile divider. Photo 1: red brick facade, gray awnings labeled CAFE and BAKERY, and a green cornice, which gives the brick-red primary and copper-green accent. Logo: dark brown script with gold wheat, which gives the text color #231A12. Photos 2 and 3: bread in wood trays under glass with warm pendant light, so photos show real trays and cases with no stock imagery. Reviews: 'Korean-standard clean', 'not too sweet', 'none of these are frozen', 'plenty of sitting'.

Mode: light

## Color
| Token | Value | Role |
|---|---|---|
| --color-background | #FFFFFF | Page background, the white of the tile wall |
| --color-surface | #F2F1EE | Alternate section bands, review cards, sticky mobile bar background |
| --color-text | #231A12 | Headings and body text (the logo's dark brown) |
| --color-muted-text | #5E5249 | Captions, addresses, secondary lines (7.6:1 on white, 6.8:1 on surface) |
| --color-border | #D9D6D0 | Card outlines, dividers, input borders, disabled button fill |
| --color-primary | #8C3A2B | Order and primary buttons, text links, focus-adjacent emphasis (brick red, 7.6:1 against white) |
| --color-on-primary | #FFFFFF | Text on primary buttons |
| --color-accent | #2F6B57 | Only for the small 'Open on Google Maps' status text and the location pin icon (copper green from the cornice, 6.2:1 on white). Never used for buttons. |

## Typography
Display: Archivo (--font-display). Body: Instrument Sans (--font-body).

| Step | Font | Size | Line height | Weight | Use |
|---|---|---|---|---|---|
| display | display | 44px | 1.05 | 700 | Hero headline on desktop (36px on phones under 480px wide) |
| h2 | display | 32px | 1.15 | 700 | Section headings |
| h3 | display | 22px | 1.25 | 600 | Sub-headings, review attribution names, visit card titles |
| body-lg | body | 19px | 1.5 | 400 | Hero support line, pull-quote review |
| body | body | 17px | 1.55 | 400 | All paragraphs; keep lines to 60-72 characters |
| button | body | 17px | 1.2 | 600 | Button labels |
| small | body | 15px | 1.45 | 400 | Photo captions, footer legal line, review dates. Not used for essential info. |

## Spacing
Base unit 8px. Sections: 56px between sections on phone, 96px on desktop (1024px and up). Inside a section, 24px between heading and content on phone, 32px on desktop.. Content width: 1120px.

## Shape and depth
Radius: 4px for buttons, inputs and small tags; 8px for photos and cards; 0 for full-width bands. No pill shapes anywhere.

Shadows: none. Depth comes from 1px #D9D6D0 borders and the #F2F1EE surface band. The sticky mobile action bar uses a 1px #D9D6D0 top border only.

## Components
- Buttons: All buttons 52px tall on phone (48px minimum on desktop), 16px/24px padding, 4px radius, 17px/600 label, sentence case. Primary: #8C3A2B fill, #FFFFFF text; hover #6F2D21; active #5C241A; focus-visible 3px outline #231A12 with 2px offset; disabled #D9D6D0 fill with #5E5249 text and no pointer. Secondary: #FFFFFF fill, 2px #231A12 border, #231A12 text; hover fill #F2F1EE; same focus ring; disabled 2px #D9D6D0 border with #5E5249 text. Quiet: no fill or border, #8C3A2B text, 2px underline offset 4px; hover underline thickens to 3px; same focus ring. Buttons that call or open maps use tel: and Google Maps links.
- Links: Inline links use #8C3A2B, always underlined (2px, offset 3px). Hover color #6F2D21. Visited state unchanged. Focus uses the same 3px #231A12 outline. The phone number is always a tel: link.
- Cards and surfaces: Review cards: #F2F1EE fill, 1px #D9D6D0 border, 8px radius, 24px padding, left-aligned, no shadow. Photos sit directly on the page with an 8px radius and no frame. Visit panel: white with 1px #D9D6D0 border and 8px radius. No cards with an icon in a circle.
- Navigation: Phone: slim 64px top bar with the Blue Angel logo image (link to top) on the left and a visible text link 'Menu' plus a 'Call' text link on the right (no hamburger). A fixed bottom action bar on phones (surface fill, 1px top border, 64px tall) holds three equal buttons: 'Order online' (primary), 'Call' (secondary), 'Directions' (secondary); it hides at the Visit section. Desktop: the top bar is 72px with logo left; links 'Menu', 'Reviews', 'Visit' and a primary 'Order online' button right. No chat widget. Social links go in the footer only.
- Footer: Surface #F2F1EE band under a 24px-tall hex-tile strip (inline SVG, black #231A12 hexagon dots on white, the only decorative element on the page). Left: logo, '79 Hudson St 1st Floor, Hoboken, NJ 07030', phone as tel link. Middle: links to Menu, Order online, About, Directions. Right: Instagram, Facebook and Yelp as text links with the one icon set. Bottom line in small text: 'Blue Angel also has a Fort Lee location. See About for the address.' Site credit line 'Concept by Apex Digital'.

## Imagery and icons
Use the real photos only. Hero: storefront photo-1 at 4:3 crop on phone (full bleed, 8px radius from 16px margin), 5:6 on desktop right column. In-the-case section: photo-2 and photo-3 portrait at 3:4, side by side on desktop, stacked with 16px gap on phone. Seating: photo-4 at 3:4 portrait next to text on desktop, 4:3 crop on phone. Use object-fit cover, loading=lazy except the hero, explicit width/height, descriptive alt text (e.g. 'Blue Angel storefront on Hudson St with CAFE and BAKERY awnings'). Pick from the other photos for the closing band if useful, crop tightly and never upscale blurry shots. Icon set: Lucide only, 20px, 1.75px stroke, #231A12, used just for phone, map pin, clock-less external link and the three social links, never next to headings.

## Motion
Nearly none. Buttons change color over 120ms. Photos fade in over 200ms when loaded. Anchor links scroll smoothly. With prefers-reduced-motion: reduce, remove the fade and smooth scroll; nothing else moves.

## Avoid
- No chat bubble or floating widget over the content
- No hidden hamburger menu; nav links stay visible
- No script or handwritten display font in headings; the logo image is the only script
- No cream or beige page background; the white tile is the base
- No gold (#C9972E-style logo color) for text, since it fails contrast on white
- No stock food photos and no blurred or upscaled images
- No invented prices, hours, item descriptions, dish names or badges; item names come only from the reviews
- No 'artisan', 'handcrafted' or 'premium' filler words and no 'premiumCOFFEE' style fragments
- No rows of three identical cards; the review section mixes one large quote with smaller ones
- No centered-everything layout; hero, reviews and visit are left-aligned
- No tile-pattern backgrounds behind text; the hex strip appears once, above the footer
- No placeholder or typo labels from the old site (My New Option, NewNew, Bluberry, DESERT)
