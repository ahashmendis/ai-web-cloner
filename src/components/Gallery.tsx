"use client";

import { cn } from "@/lib/utils";

/* ── Inline PlayIcon (icons.tsx not yet in this branch) ── */

function PlayIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

/* ── Data ── */

interface GalleryTile {
  id: number;
  thumbnail: string;
  video: string;
}

const ROW_1_TILES: readonly GalleryTile[] = [
  { id: 1, thumbnail: "/images/GALLERY - v1/LC 1.jpg", video: "/videos/gallery/video1.mp4" },
  { id: 2, thumbnail: "/images/GALLERY - v1/LC 2.jpg", video: "/videos/gallery/video2.mp4" },
  { id: 3, thumbnail: "/images/GALLERY - v1/frame 4.png", video: "/videos/gallery/video3.mp4" },
  { id: 4, thumbnail: "/images/GALLERY - v1/14.png", video: "/videos/gallery/video4.mp4" },
];

const ROW_2_TILES: readonly GalleryTile[] = [
  { id: 5, thumbnail: "/images/GALLERY - v1/12.png", video: "/videos/gallery/video5.mp4" },
  { id: 6, thumbnail: "/images/GALLERY - v1/11.png", video: "/videos/gallery/video6.mp4" },
  { id: 7, thumbnail: "/images/GALLERY - v1/13.png", video: "/videos/gallery/video7.mp4" },
  { id: 8, thumbnail: "/images/GALLERY - v1/201-elira-aaa-luxury-handbag-brand-identity-1920.png", video: "/videos/gallery/video8.mp4" },
];

const ROW_3_TILES: readonly GalleryTile[] = [
  { id: 9, thumbnail: "/images/GALLERY - v1/193-elira-aaa-luxury-handbag-brand-identity-1920.png", video: "/videos/gallery/video9.mp4" },
  { id: 10, thumbnail: "/images/GALLERY - v1/105-elira-aaa-luxury-handbag-brand-identity-1920.png", video: "/videos/gallery/video10.mp4" },
  { id: 11, thumbnail: "/images/GALLERY - v1/81-elira-aaa-luxury-handbag-brand-identity-1920.png", video: "/videos/gallery/video11.mp4" },
  { id: 12, thumbnail: "/images/GALLERY - v1/1.png", video: "/videos/gallery/video12.mp4" },
];

/* ── Tile component ── */

function GalleryTileButton({
  tile,
}: {
  tile: GalleryTile;
}) {
  return (
    <button
      type="button"
      className="gallery-tile group"
      aria-label={`Play video ${tile.id}`}
    >
      {/* Thumbnail */}
      <img
        src={tile.thumbnail}
        alt={`Video thumbnail ${tile.id}`}
        className="gallery-tile-media"
        draggable={false}
      />

      {/* Gradient overlay */}
      <span className="gallery-tile-shade" />

      {/* Play icon */}
      <span className="play-icon">
        <PlayIcon width={28} height={28} className="drop-shadow-lg" />
      </span>
    </button>
  );
}

/* ── Marquee row ── */

function GalleryRow({
  tiles,
  animationClass,
}: {
  tiles: readonly GalleryTile[];
  animationClass: string;
}) {
  // Duplicate tiles for seamless infinite scroll
  const duplicated = [...tiles, ...tiles];

  return (
    <div className="gallery-row-wrapper">
      <div className={cn("gallery-row", animationClass)}>
        {duplicated.map((tile, i) => (
          <GalleryTileButton
            key={`${tile.id}-${i}`}
            tile={tile}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Main Gallery component ── */

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-viewport">
        {/* Radial glow effect */}
        <div className="gallery-glow" aria-hidden />

        {/* Header */}
        <div className="gallery-header">
          <p className="section-label">Gallery</p>
          <h2 className="gallery-title">
            Systems, brands, and work built to move.
          </h2>
          <p className="gallery-description">
            A moving wall of web builds, brand systems, AI workflows,
            and digital experiences — engineered to perform before you even click.
          </p>
        </div>

        {/* Marquee rows */}
        <div className="gallery-marquee-container">
          <GalleryRow tiles={ROW_1_TILES} animationClass="animate-gallery-marquee" />
          <GalleryRow tiles={ROW_2_TILES} animationClass="animate-gallery-marquee-reverse" />
          <GalleryRow tiles={ROW_3_TILES} animationClass="animate-gallery-marquee-slow" />
        </div>
      </div>

      {/* Scoped styles — includes marquee keyframes + all gallery layout */}
      <style>{`
        /* ── Marquee keyframes ── */
        @keyframes gallery-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes gallery-marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-gallery-marquee {
          animation: gallery-marquee 40s linear infinite;
        }
        .animate-gallery-marquee-reverse {
          animation: gallery-marquee-reverse 45s linear infinite;
        }
        .animate-gallery-marquee-slow {
          animation: gallery-marquee 55s linear infinite;
        }

        /* ── Section ── */
        .gallery-section {
          background: linear-gradient(rgb(3,3,3) 0%, rgb(10,10,9) 50%, rgb(2,2,2) 100%);
          padding: 120px 0;
          overflow: hidden;
          position: relative;
        }

        /* ── Viewport ── */
        .gallery-viewport {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── Radial glow ── */
        .gallery-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 600px;
          background: radial-gradient(circle, rgba(255,255,255,0.08), rgba(0,0,0,0) 50%);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Header ── */
        .gallery-header {
          text-align: center;
          margin-bottom: 64px;
          position: relative;
          z-index: 1;
        }

        .gallery-title {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.15;
          color: #f7f7f2;
          margin: 16px auto;
          max-width: 640px;
        }

        .gallery-description {
          font-size: clamp(14px, 1.6vw, 17px);
          line-height: 1.6;
          color: rgba(247, 247, 242, 0.56);
          max-width: 560px;
          margin: 0 auto;
        }

        /* ── Marquee container ── */
        .gallery-marquee-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        /* ── Row wrapper (full-bleed overflow hidden) ── */
        .gallery-row-wrapper {
          overflow: hidden;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
        }

        /* ── Row track ── */
        .gallery-row {
          display: flex;
          gap: 16px;
          width: max-content;
        }

        /* ── Tile ── */
        .gallery-tile {
          width: 280px;
          height: 400px;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          flex-shrink: 0;
          border: none;
          padding: 0;
          background: none;
          transition: transform 0.3s ease;
        }

        .gallery-tile:hover {
          transform: scale(1.03);
        }

        /* ── Tile media (thumbnail img) ── */
        .gallery-tile-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          display: block;
        }

        /* ── Tile shade (gradient overlay) ── */
        .gallery-tile-shade {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(0,0,0,0.06), rgba(0,0,0,0.5)),
            linear-gradient(90deg, rgba(0,0,0,0.3), rgba(0,0,0,0) 60%);
          z-index: 1;
        }

        /* ── Play icon ── */
        .play-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          color: #f7f7f2;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-tile:hover .play-icon {
          opacity: 1;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .gallery-section {
            padding: 80px 0;
          }
          .gallery-tile {
            width: 200px;
            height: 280px;
            border-radius: 16px;
          }
          .gallery-header {
            margin-bottom: 40px;
          }
        }

        @media (max-width: 480px) {
          .gallery-section {
            padding: 60px 0;
          }
          .gallery-tile {
            width: 160px;
            height: 224px;
            border-radius: 14px;
          }
        }
      `}</style>
    </section>
  );
}
