"use client";

interface BrandLogo {
  name: string;
  src: string;
  hasHoverLogo?: boolean;
  hoverSrc?: string;
  /** Custom image max-width override */
  imgW?: string;
  /** Custom image max-height override */
  imgH?: string;
}

const brandLogos: BrandLogo[] = [
  // 50% larger logos
  { name: "ActiveEdge", src: "/images/brands/activeedge.png", imgW: "150px", imgH: "60px" },
  { name: "Agra", src: "/images/brands/agra.png", imgW: "150px", imgH: "60px" },
  { name: "Comun", src: "/images/brands/comun.png", imgW: "200px", imgH: "110px" },
  { name: "Gearchain", src: "/images/brands/gearchain.png", imgW: "150px", imgH: "60px" },
  { name: "Great Ryrie", src: "/images/brands/greatryrie.png", imgW: "200px", imgH: "110px"  },
  // 2938x6189 — very tall/narrow
  { name: "Hydrant", src: "/images/brands/Hydrant_Logo.png", imgW: "30px", imgH: "56px" },
  { name: "Logo", src: "/images/brands/logo.png" },
  { name: "Peakstate", src: "/images/brands/peakstate.png" },
  { name: "Ranshe", src: "/images/brands/ranshe.png", imgW: "200px", imgH: "56px" },
  { name: "First Lane", src: "/images/brands/first lane.png" },
  // 642x238 — very wide/short
  { name: "Labour Hire", src: "/images/brands/Copy of Labour Hire.png", imgW: "160px", imgH: "44px" },
  // 50% larger logos
  { name: "Main Color", src: "/images/brands/Copy of MAIN COLOR R@2x.png", imgW: "200px", imgH: "110px" },
  { name: "Hover Logo", src: "/images/brands/Copy of HOVER LOGO white.png", imgW: "150px", imgH: "60px" },
  { name: "Copy Logo", src: "/images/brands/Copy of logo.png", imgW: "150px", imgH: "60px" },
];

const DEFAULT_IMG_W = "120px";
const DEFAULT_IMG_H = "48px";

function LogoItem({ logo }: { logo: BrandLogo }) {
  const imgW = logo.imgW ?? DEFAULT_IMG_W;
  const imgH = logo.imgH ?? DEFAULT_IMG_H;

  return (
    <div
      className={`flex-shrink-0 flex items-center justify-center w-[180px] h-[72px] opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer group ${logo.hasHoverLogo ? "has-hover-logo relative" : "grayscale hover:grayscale-0"}`}
    >
      {!logo.hasHoverLogo && (
        <img
          src={logo.src}
          alt={logo.name}
          className="object-contain"
          style={{ maxWidth: imgW, maxHeight: imgH }}
          loading="lazy"
        />
      )}

      {logo.hasHoverLogo && (
        <>
          <img
            src={logo.src}
            alt={logo.name}
            className="object-contain grayscale brightness-[200%] group-hover:opacity-0 transition-opacity duration-300"
            style={{ maxWidth: imgW, maxHeight: imgH }}
            loading="lazy"
          />
          <img
            src={logo.hoverSrc!}
            alt={logo.name}
            className="absolute inset-0 m-auto object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ maxWidth: imgW, maxHeight: imgH }}
            loading="lazy"
          />
        </>
      )}
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="border-t border-[rgba(247,247,242,0.08)] bg-black py-[30px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center gap-[60px]">
        {/* Left label — fixed */}
        <p className="section-label whitespace-nowrap flex-shrink-0 leading-snug">
          Brands we've
          <br />
          engineered
        </p>

        {/* Right marquee — fills remaining space */}
        <div className="overflow-hidden flex-1">
          <div className="marquee-track flex gap-[60px] w-max animate-marquee">
            {brandLogos.map((logo) => (
              <LogoItem key={`a-${logo.name}`} logo={logo} />
            ))}
            {brandLogos.map((logo) => (
              <LogoItem key={`b-${logo.name}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
