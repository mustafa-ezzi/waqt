import { site, r2 } from "../data/site.js";
import { getHeroProduct } from "../data/products.js";
import { Button } from "../components/Button.jsx";
import { WatchImage } from "../components/WatchImage.jsx";
import { CornerOrnaments } from "../components/Ornaments.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { usePageTitle } from "../hooks/usePageTitle.js";

export function About() {
  usePageTitle("WAAQT · About");
  const close = getHeroProduct();

  return (
    <main className="page about">
      <section className="about-hero">
        <CornerOrnaments />
        <p className="about-water" aria-hidden="true">
          WAAQT
        </p>
        <div className="wrap about-hero-inner">
          <p className="overline">{site.origin}</p>
          <h1>WAAQT</h1>
          <p className="about-lede">A house of jewelry-like timepieces.</p>
        </div>
      </section>

      <section className="about-paper">
        <Reveal className="wrap about-prose">
          <p>
            WAAQT is a Pakistani house of watches that behave like jewels. We work in gold, cream
            dials, black leather, and the kind of light that sits on a diamond bezel after dusk.
          </p>
          <p>
            The pieces are chosen, not manufactured at volume. Each one is meant for an hour that
            already matters — a room, a wrist, a quiet arrival.
          </p>
          <p>
            Origin is not a footnote. It is the room we come from. Pakistan, written small beneath
            a large name, the way it appears on our banners: proud, and unwilling to shout.
          </p>
        </Reveal>
      </section>

      <section className="about-values">
        <div className="wrap values-grid">
          {[
            {
              t: "Craft",
              d: "Metal, leather, and a dial that can be read in a dark salon.",
            },
            {
              t: "Presence",
              d: "A watch that is seen before it is asked the time.",
            },
            {
              t: "Occasion",
              d: "Not every hour. The ones that should be kept.",
            },
          ].map((v) => (
            <Reveal key={v.t} className="value">
              <h2>{v.t}</h2>
              <p>{v.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-close">
        <WatchImage
          src={r2(close.images.hero)}
          alt={`${close.name} against midnight navy`}
          className="about-close-img"
        />
        <Reveal className="about-close-copy">
          <p className="overline">The collection</p>
          <h2>See the pieces.</h2>
          <Button to="/collection" variant="ghost">
            Enter the collection
          </Button>
        </Reveal>
      </section>
    </main>
  );
}
