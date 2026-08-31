import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { site, r2 } from "../data/site.js";
import { getFeaturedProducts, getHeroProduct, products } from "../data/products.js";
import { Button } from "../components/Button.jsx";
import { WatchImage } from "../components/WatchImage.jsx";
import { CornerOrnaments, FiligreeRule } from "../components/Ornaments.jsx";
import { ProductCard } from "../components/ProductCard.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { usePageTitle } from "../hooks/usePageTitle.js";

gsap.registerPlugin(useGSAP);

export function Home() {
  usePageTitle("WAAQT");
  const heroRef = useRef(null);
  const hero = getHeroProduct();
  const featured = getFeaturedProducts();
  const teaser = products.slice(0, 6);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      if (reduce) {
        gsap.set([".hero-watch", ".hero-word", ".hero-kicker", ".hero-cta", ".hero-side"], {
          autoAlpha: 1,
        });
        return;
      }
      gsap.set([".hero-watch", ".hero-word", ".hero-kicker", ".hero-cta", ".hero-side"], {
        autoAlpha: 0,
      });
      tl.fromTo(
        ".hero-watch",
        { autoAlpha: 0, scale: 0.97 },
        { autoAlpha: 1, scale: 1, duration: 1.35 },
        0.15
      )
        .fromTo(
          ".hero-word",
          { autoAlpha: 0, y: 28 },
          { autoAlpha: 1, y: 0, duration: 1.1 },
          0.55
        )
        .fromTo(
          ".hero-kicker",
          { autoAlpha: 0, y: 12 },
          { autoAlpha: 1, y: 0, duration: 0.8 },
          0.85
        )
        .fromTo(
          ".hero-cta",
          { autoAlpha: 0, y: 10 },
          { autoAlpha: 1, y: 0, duration: 0.7 },
          1.05
        )
        .fromTo(".hero-side", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, 0.9);
    },
    { scope: heroRef }
  );

  return (
    <main className="page home">
      <section className="hero" ref={heroRef}>
        <CornerOrnaments />
        <p className="hero-watermark" aria-hidden="true">
          WAAQT
        </p>
        <div className="hero-side">
          <span>WAAQT</span>
          <span>Pakistan</span>
        </div>
        <div className="hero-layout">
          <div className="hero-stage">
            <div className="hero-rings" aria-hidden="true" />
            <WatchImage
              src={r2(hero.images.hero)}
              alt={`${hero.name} — ${hero.overline}`}
              className="hero-watch"
              eager
            />
          </div>
          <div className="hero-copy">
            <p className="overline hero-kicker">Time, made visible</p>
            <h1 className="hero-word">WAAQT</h1>
            <FiligreeRule className="hero-kicker" />
            <Button to="/collection" variant="ghost" className="hero-cta">
              Explore the collection
            </Button>
          </div>
        </div>
        <p className="hero-scroll overline">Scroll</p>
      </section>

      <section className="statement">
        <Reveal>
          <p className="overline">The hour</p>
          <h2>Some hours are jewelry.</h2>
          <p className="statement-sub">
            A Pakistani house of timepieces — gold, light, and a quiet wrist.
          </p>
        </Reveal>
      </section>

      <section className="featured">
        {featured.map((product, i) => (
          <article
            key={product.id}
            className={`feature ${i % 2 === 1 ? "feature-reverse" : ""}`}
          >
            <Reveal className="feature-media">
              <WatchImage
                src={r2(product.images.hero)}
                alt={`${product.name} — ${product.overline}`}
                className="feature-img"
              />
            </Reveal>
            <Reveal className="feature-copy" delay={0.1}>
              <p className="overline">{product.overline}</p>
              <h2>{product.name}</h2>
              <p>{product.short}</p>
              <Button to={`/product/${product.slug}`} variant="ghost">
                Discover
              </Button>
            </Reveal>
          </article>
        ))}
      </section>

      <section className="still">
        <CornerOrnaments />
        <div className="still-word" aria-hidden="true">
          <span>WAAQT</span>
          <span>Pakistan</span>
        </div>
        <Reveal className="still-frame">
          <WatchImage
            src={site.stillLifeImage}
            alt="WAAQT timepieces on midnight navy"
            className="still-img"
            ratio="16 / 9"
          />
        </Reveal>
        <Reveal className="still-copy">
          <p className="overline">The collection</p>
          <h2>Chosen, not stocked.</h2>
          <p>Every piece is a salon object. Gold against navy. Diamonds against quiet.</p>
          <Button to="/collection">View all timepieces</Button>
        </Reveal>
      </section>

      <section className="teaser">
        <div className="wrap teaser-head">
          <Reveal>
            <p className="overline">Atelier</p>
            <h2>On the tray</h2>
          </Reveal>
        </div>
        <div className="wrap teaser-grid">
          {teaser.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="house">
        <Reveal className="wrap house-inner">
          <p className="overline">The house of WAAQT</p>
          <h2>Craft, gold, patience.</h2>
          <p>
            We make jewelry that happens to keep hours — for Pakistan, and for the wrist that wants
            to be seen in a darker room.
          </p>
          <Button to="/about" variant="ghost">
            The house of WAAQT
          </Button>
        </Reveal>
      </section>
    </main>
  );
}
