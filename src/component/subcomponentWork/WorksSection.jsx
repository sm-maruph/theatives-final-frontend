import React, { useState, useEffect } from "react";
import ModalPortal from "../common/ModalPortal";
import "./css/WorkSection.css";
// middle image of the ring — swap for whatever centrepiece you want
import centerImg from "../../assets/images/theatives_logo.png";
// import { getAllWorks } from "../../adminServices/workServices";

/* NOTE: `description` holds the YouTube video ID. */
const DUMMY_WORKS = [
  { id: 1, title: "Brand Film",      description: "dQw4w9WgXcQ" },
  { id: 2, title: "Product Launch",  description: "3JZ_D3ELwOQ" },
  { id: 3, title: "Explainer Video", description: "L_jWHffIx5E" },
  { id: 4, title: "Ad Campaign",     description: "e-ORhEE9VVg" },
  { id: 5, title: "Motion Reel",     description: "kJQP7kiw5Fk" },
  { id: 6, title: "Case Study",      description: "fLexgOxsZu0" },
];

export default function WorksSection() {
  const [works, setWorks] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [pageVisible, setPageVisible] = useState(!document.hidden);
  const [active, setActive] = useState(null); // the work playing in the modal

  useEffect(() => {
    (async () => {
      try {
        // ---- REAL BACKEND (uncomment when ready) ----
        // const data = await getAllWorks();
        // setWorks(data);

        // ---- DUMMY ----
        setWorks(DUMMY_WORKS);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  // Stop compositor work while the browser tab is hidden.
  useEffect(() => {
    const onVisibilityChange = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  const paused = hovered || interacting || Boolean(active) || !pageVisible;

  return (
    <div className="banner">
      <div
        className={`slider ${paused ? "paused" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onPointerDown={() => setInteracting(true)}
        onPointerUp={() => setInteracting(false)}
        onPointerCancel={() => setInteracting(false)}
      >
        {works.map((work, i) => (
          <div
            className="item"
            key={work.id || i}
            style={{ "--angle": `${(360 / works.length) * i}deg` }}
            onClick={() => setActive(work)}
          >
            <div className="video-placeholder">
              <div className="video-thumbnail">
                <img
                  src={`https://img.youtube.com/vi/${work.description}/mqdefault.jpg`}
                  alt={work.title}
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
                <div className="play-icon">▶</div>
              </div>
            </div>
            <h3>{work.title}</h3>
          </div>
        ))}
      </div>

      {/* middle image — kept */}
      <div className="model">
        <img src={centerImg} alt="Theatives" />
      </div>

      {/* Render at document.body so no 3D parent or overflow rule can
          place the modal behind/below the rotating cards on any device. */}
      {active && (
        <ModalPortal onClose={() => setActive(null)}>
          <div
            className="work-modal-overlay"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <div className="work-modal" onClick={(e) => e.stopPropagation()}>
              <button
                className="work-modal-close"
                onClick={() => setActive(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="work-modal-video">
                <iframe
                  src={`https://www.youtube.com/embed/${active.description}?autoplay=1&rel=0&modestbranding=1`}
                  title={active.title}
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="work-modal-title">{active.title}</h3>
            </div>
          </div>
        </ModalPortal>
      )}
    </div>
  );
}
