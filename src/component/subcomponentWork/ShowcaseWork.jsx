// src/components/subcomponentWork/ShowcaseWork.jsx
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createPortal } from "react-dom";
import ModalPortal from "../common/ModalPortal";
import "./css/ShowcaseWork.css";
import sw1 from "../../assets/images/showcasework/sw1.png";
import sw1_1 from "../../assets/images/showcasework/sw1_1.png";

// Enable these imports when the backend endpoints are ready.
// import {
//   getBlogs,
//   incrementBlogView,
// } from "../../adminServices/AdminShowcase";
// import { getFullUrl } from "../../utils/apiUrl";

const DUMMY_PROJECTS = [
  {
    id: 1,
    slug: "full-stack-ecommerce-platform",
    title: "Full-Stack E-commerce Platform",
    category: "Web Development",
    created_at: "2026-06-18T09:15:00Z",
    excerpt:
      "A complete commerce experience with product management, secure checkout, online payment, order tracking, and a role-based administration dashboard.",
    cover: {
      type: "image",
      src: sw1_1,
      alt: "E-commerce storefront displayed on a laptop",
    },
    client: "Retail Growth Company",
    duration: "12 weeks",
    year: "2026",
    services: [
      "Product strategy",
      "UI/UX design",
      "Frontend development",
      "Backend API",
      "Payment integration",
      "Deployment",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Stripe",
      "Cloud Storage",
    ],
    results: [
      { value: "34%", label: "Faster checkout flow" },
      { value: "99.9%", label: "Target service uptime" },
      { value: "3 roles", label: "Customer, staff and admin" },
      { value: "100%", label: "Responsive core pages" },
    ],
    sections: [
      {
        type: "lead",
        content:
          "The client needed more than an attractive online shop. They needed a reliable sales system connecting discovery, inventory, payment, fulfilment, customer communication, and business reporting.",
      },
      {
        type: "heading",
        content: "The challenge",
      },
      {
        type: "paragraph",
        content:
          "The previous process depended on manual order confirmation and disconnected spreadsheets. Customers could browse products, but staff had no dependable way to manage stock, promotions, payments, delivery status, or customer history from one place.",
      },
      {
        type: "image",
        src: sw1,
        alt: "Commerce analytics dashboard",
        caption:
          "The Rainz Lifestyle landing page brings featured collections, promotions, categories, and products together in one seamless shopping experience.",
      },
      {
        type: "heading",
        content: "How we designed the customer experience",
      },
      {
        type: "paragraph",
        content:
          "We mapped the buying journey before designing screens. The interface guides customers from category discovery to product comparison, cart review, payment, and order confirmation with minimal interruption.",
      },
      {
        type: "gallery",
        title: "Storefront UI",
        items: [
          {
            src: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=85",
            alt: "Product catalogue interface",
            caption: "Product discovery and category browsing",
          },
          {
            src: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=85",
            alt: "Online shopping experience",
            caption: "Responsive product presentation",
          },
          {
            src: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1200&q=85",
            alt: "Checkout and payment concept",
            caption: "Clear cart and checkout decisions",
          },
        ],
      },
      {
        type: "longImage",
        src: sw1,
        alt: "Full-page fashion e-commerce website interface",
        title: "Complete storefront interface",
        caption:
          "A full-page presentation of the e-commerce experience, including the hero area, product collections, promotional campaigns, and category sections. Select the image to inspect the complete interface in full-screen mode.",
      },
      {
        type: "heading",
        content: "System mechanism and workflow",
      },
      {
        type: "workflow",
        steps: [
          {
            title: "Product discovery",
            description:
              "Customers search, filter, compare, and open detailed product pages.",
          },
          {
            title: "Cart validation",
            description:
              "The API validates stock, price, discount, delivery rules, and the final payable amount.",
          },
          {
            title: "Secure payment",
            description:
              "The payment provider processes the transaction without exposing sensitive card information to the application.",
          },
          {
            title: "Order creation",
            description:
              "A verified payment creates the order and records products, quantities, customer details, and fulfilment status.",
          },
          {
            title: "Operations",
            description:
              "Staff manage inventory, orders, returns, delivery updates, and customer communication.",
          },
          {
            title: "Reporting",
            description:
              "Administrators review sales performance, order trends, inventory movement, and customer activity.",
          },
        ],
      },
      {
        type: "video",
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        poster:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=85",
        caption:
          "Replace this sample with a screen recording of the storefront, checkout, payment confirmation, and administration workflow.",
      },
      {
        type: "heading",
        content: "What the platform includes",
      },
      {
        type: "list",
        content: [
          "Responsive storefront, category, search, product, cart, and checkout pages",
          "Secure registration, sign-in, password recovery, and role-based access",
          "Product, category, inventory, coupon, order, customer, and content management",
          "Payment initiation, verification, webhook handling, refunds, and transaction history",
          "Order status notifications and customer order tracking",
          "Analytics-ready event structure and deployment configuration",
        ],
      },
      {
        type: "quote",
        content:
          "We build the operational system behind the storefront—not only the visible interface.",
        author: "Theatives project principle",
      },
      {
        type: "heading",
        content: "What we offer clients",
      },
      {
        type: "paragraph",
        content:
          "We can deliver the entire product or join an existing team for a specific phase. Engagements can cover discovery, interface design, frontend implementation, API development, payment integration, quality assurance, deployment, maintenance, or ongoing product improvement.",
      },
      {
        type: "cta",
        title: "Planning an e-commerce product?",
        content:
          "Tell us about your catalogue, customers, fulfilment process, payment requirements, and launch target. We will recommend a practical scope and implementation plan.",
        buttonLabel: "Discuss a similar project",
      },
    ],
  },
  {
    id: 2,
    slug: "nimbus-brand-system",
    title: "Nimbus Brand System",
    category: "Branding",
    created_at: "2026-05-20T10:00:00Z",
    excerpt:
      "A unified identity system covering brand strategy, visual language, digital templates, and practical usage guidelines.",
    cover: {
      type: "image",
      src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=85",
      alt: "Brand identity materials arranged on a desk",
    },
    client: "Nimbus Studio",
    duration: "6 weeks",
    year: "2026",
    services: ["Brand strategy", "Identity design", "Design system"],
    technologies: ["Figma", "Illustrator", "After Effects"],
    results: [
      { value: "1 system", label: "Across every channel" },
      { value: "40+", label: "Reusable brand assets" },
      { value: "6 weeks", label: "Strategy to delivery" },
    ],
    sections: [
      {
        type: "lead",
        content:
          "Nimbus needed a visual identity that looked consistent across campaigns, presentations, social media, and its product experience.",
      },
      {
        type: "heading",
        content: "A flexible visual language",
      },
      {
        type: "paragraph",
        content:
          "We created a modular identity rather than a single logo treatment, allowing the brand to remain recognizable while adapting to different formats.",
      },
      {
        type: "gallery",
        title: "Selected identity applications",
        items: [
          {
            src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=85",
            alt: "Brand stationery mockup",
          },
          {
            src: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1200&q=85",
            alt: "Graphic design composition",
          },
        ],
      },
      {
        type: "list",
        content: [
          "Primary and responsive logo suite",
          "Colour, typography, illustration, and photography direction",
          "Social, presentation, and campaign templates",
          "Clear brand implementation guidelines",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "product-launch-film",
    title: "Product Launch Film",
    category: "Video",
    created_at: "2026-04-02T14:30:00Z",
    excerpt:
      "A concise launch story combining product footage, motion graphics, sound design, and platform-specific delivery.",
    cover: {
      type: "video",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      poster:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=85",
      alt: "Video production camera and monitor",
    },
    client: "Technology Product Team",
    duration: "4 weeks",
    year: "2026",
    services: ["Creative direction", "Editing", "Motion design"],
    technologies: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    results: [
      { value: "4 formats", label: "Platform-ready exports" },
      { value: "60 sec", label: "Primary launch film" },
      { value: "12 clips", label: "Campaign cut-downs" },
    ],
    sections: [
      {
        type: "lead",
        content:
          "The launch film explains the product through a focused narrative instead of presenting a list of features.",
      },
      {
        type: "video",
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        poster:
          "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=85",
        caption: "Sample video placeholder—replace it with the final project film.",
      },
      {
        type: "heading",
        content: "Production workflow",
      },
      {
        type: "workflow",
        steps: [
          {
            title: "Message",
            description: "Define the audience, promise, and key product story.",
          },
          {
            title: "Pre-production",
            description: "Create the script, storyboard, shot list, and production plan.",
          },
          {
            title: "Post-production",
            description: "Edit footage, add motion graphics, colour, music, and sound.",
          },
          {
            title: "Delivery",
            description: "Export platform-specific master and campaign versions.",
          },
        ],
      },
    ],
  },
];

const SKELETON_COUNT = 6;

function getProjectId(project, fallback) {
  return project?._id || project?.id || project?.slug || fallback;
}

function getSectionSource(section) {
  return section?.src || section?.content || "";
}

function getProjectCover(project) {
  if (project?.cover?.src) return project.cover;

  const firstMedia = project?.sections?.find(
    (section) => section.type === "image" || section.type === "video"
  );

  if (!firstMedia) return null;

  return {
    type: firstMedia.type,
    src: getSectionSource(firstMedia),
    poster: firstMedia.poster,
    alt: firstMedia.alt || project.title,
  };
}

function formatDate(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

function LoadingIndicator({ label = "Loading media" }) {
  return (
    <span className="sw-media-loader" role="status" aria-label={label}>
      <span className="sw-media-spinner" />
    </span>
  );
}

function LoadedImage({
  src,
  alt,
  className = "",
  eager = false,
  onClick,
}) {
  const [status, setStatus] = useState("loading");

  return (
    <span
      className={`sw-loaded-media ${className} is-${status}`}
      aria-busy={status === "loading"}
      onClick={onClick}
    >
      {status === "loading" && <LoadingIndicator />}

      {status === "error" ? (
        <span className="sw-media-error">
          <span aria-hidden="true">⌁</span>
          Image unavailable
        </span>
      ) : (
        <img
          src={src}
          alt={alt || ""}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      )}
    </span>
  );
}

function LoadedVideo({
  src,
  poster,
  className = "",
  controls = true,
  preview = false,
}) {
  const [status, setStatus] = useState("loading");

  return (
    <span
      className={`sw-loaded-media sw-loaded-video ${className} is-${status}`}
      aria-busy={status === "loading"}
    >
      {status === "loading" && <LoadingIndicator label="Loading video" />}

      {status === "error" ? (
        <span className="sw-media-error">
          <span aria-hidden="true">▶</span>
          Video unavailable
        </span>
      ) : (
        <video
          src={src}
          poster={poster}
          controls={controls}
          muted={preview}
          playsInline
          preload={preview ? "metadata" : "metadata"}
          tabIndex={preview ? -1 : 0}
          onLoadedData={() => setStatus("loaded")}
          onCanPlay={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      )}

      {preview && status !== "error" && (
        <span className="sw-card-play" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M8 5.5v13l10-6.5z" />
          </svg>
        </span>
      )}
    </span>
  );
}

function ProjectCardSkeleton() {
  return (
    <article className="sw-project-card sw-project-card--skeleton" aria-hidden="true">
      <div className="sw-skeleton sw-skeleton-media" />
      <div className="sw-project-card__content">
        <div className="sw-skeleton sw-skeleton-pill" />
        <div className="sw-skeleton sw-skeleton-title" />
        <div className="sw-skeleton sw-skeleton-line" />
        <div className="sw-skeleton sw-skeleton-line sw-skeleton-line--short" />
        <div className="sw-skeleton sw-skeleton-button" />
      </div>
    </article>
  );
}

function ProjectCard({ project, index, onOpen }) {
  const cover = getProjectCover(project);

  const openProject = () => onOpen(project);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject();
    }
  };

  return (
    <article
      className="sw-project-card"
      style={{ "--sw-card-order": index }}
      role="button"
      tabIndex={0}
      aria-label={`Open case study: ${project.title}`}
      onClick={openProject}
      onKeyDown={handleKeyDown}
    >
      <div className="sw-project-card__media">
        {cover?.type === "video" ? (
          <LoadedVideo
            src={cover.src}
            poster={cover.poster}
            preview
            controls={false}
            className="sw-project-card__media-item"
          />
        ) : cover?.src ? (
          <LoadedImage
            src={cover.src}
            alt={cover.alt || project.title}
            className="sw-project-card__media-item"
          />
        ) : (
          <span className="sw-media-error">No preview available</span>
        )}
      </div>

      <div className="sw-project-card__content">
        <div className="sw-project-card__meta">
          <span className="sw-project-card__category">{project.category}</span>
          {project.year && <span>{project.year}</span>}
        </div>

        <h3>{project.title}</h3>

        <p>{project.excerpt}</p>

        {!!project.technologies?.length && (
          <div className="sw-project-card__tags" aria-label="Technologies">
            {project.technologies.slice(0, 3).map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
            {project.technologies.length > 3 && (
              <span>+{project.technologies.length - 3}</span>
            )}
          </div>
        )}

        <button
          type="button"
          className="sw-project-card__button"
          onClick={(event) => {
            event.stopPropagation();
            openProject();
          }}
        >
          View case study
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  );
}

function ProjectOverview({ project }) {
  const facts = [
    ["Client", project.client],
    ["Duration", project.duration],
    ["Year", project.year],
    ["Category", project.category],
  ].filter(([, value]) => Boolean(value));

  return (
    <>
      {!!facts.length && (
        <dl className="sw-case-facts">
          {facts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      )}

      {!!project.services?.length && (
        <section className="sw-case-overview-group">
          <h3>What we delivered</h3>
          <div className="sw-case-chip-list">
            {project.services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </section>
      )}

      {!!project.technologies?.length && (
        <section className="sw-case-overview-group">
          <h3>Technology</h3>
          <div className="sw-case-chip-list sw-case-chip-list--technology">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </section>
      )}

      {!!project.results?.length && (
        <section className="sw-case-results" aria-label="Project results">
          {project.results.map((result) => (
            <div className="sw-case-result" key={`${result.value}-${result.label}`}>
              <strong>{result.value}</strong>
              <span>{result.label}</span>
            </div>
          ))}
        </section>
      )}
    </>
  );
}


const SW_MIN_ZOOM = 0.5;
const SW_MAX_ZOOM = 4;
const SW_ZOOM_STEP = 0.25;

function clampZoom(value) {
  return Math.min(SW_MAX_ZOOM, Math.max(SW_MIN_ZOOM, value));
}

function LongScreenshotViewer({ image, onClose }) {
  const [zoom, setZoom] = useState(1);

  const updateZoom = useCallback((nextZoom) => {
    setZoom((currentZoom) => {
      const resolvedZoom =
        typeof nextZoom === "function"
          ? nextZoom(currentZoom)
          : nextZoom;

      return Number(clampZoom(resolvedZoom).toFixed(2));
    });
  }, []);

  useEffect(() => {
    if (!image) return undefined;

    const previousHtmlOverflow =
      document.documentElement.style.overflow;
    const previousBodyOverflow =
      document.body.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        updateZoom((current) => current + SW_ZOOM_STEP);
        return;
      }

      if (event.key === "-") {
        event.preventDefault();
        updateZoom((current) => current - SW_ZOOM_STEP);
        return;
      }

      if (event.key === "0") {
        event.preventDefault();
        updateZoom(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow =
        previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [image, onClose, updateZoom]);

  if (!image) return null;

  const handleViewerWheel = (event) => {
    /*
     * Normal wheel movement scrolls the long screenshot.
     * Ctrl/Cmd + wheel changes the zoom level.
     */
    if (!event.ctrlKey && !event.metaKey) return;

    event.preventDefault();

    updateZoom((current) =>
      current + (event.deltaY < 0 ? SW_ZOOM_STEP : -SW_ZOOM_STEP)
    );
  };

  const toggleDoubleClickZoom = () => {
    updateZoom((current) => (current > 1 ? 1 : 2));
  };

  return createPortal(
    <div
      className="sw-image-viewer"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt || "Full-screen project screenshot"}
    >
      <header className="sw-image-viewer__toolbar">
        <div className="sw-image-viewer__details">
          <span>Project screenshot</span>
          <strong>{image.title || image.alt || "Full interface"}</strong>
        </div>

        <div
          className="sw-image-viewer__controls"
          aria-label="Screenshot zoom controls"
        >
          <button
            type="button"
            onClick={() =>
              updateZoom((current) => current - SW_ZOOM_STEP)
            }
            disabled={zoom <= SW_MIN_ZOOM}
            aria-label="Zoom out"
            title="Zoom out (-)"
          >
            −
          </button>

          <button
            type="button"
            className="sw-image-viewer__zoom-value"
            onClick={() => updateZoom(1)}
            aria-label="Reset zoom to 100 percent"
            title="Reset zoom (0)"
          >
            {Math.round(zoom * 100)}%
          </button>

          <button
            type="button"
            onClick={() =>
              updateZoom((current) => current + SW_ZOOM_STEP)
            }
            disabled={zoom >= SW_MAX_ZOOM}
            aria-label="Zoom in"
            title="Zoom in (+)"
          >
            +
          </button>

          <button
            type="button"
            className="sw-image-viewer__fit"
            onClick={() => updateZoom(1)}
          >
            Fit width
          </button>

          <button
            type="button"
            className="sw-image-viewer__close"
            onClick={onClose}
            aria-label="Close full-screen screenshot"
            title="Close (Escape)"
          >
            ×
          </button>
        </div>
      </header>

      <div
        className="sw-image-viewer__viewport"
        onWheel={handleViewerWheel}
      >
        <div
          className="sw-image-viewer__canvas"
          style={{ width: `${zoom * 100}%` }}
          onDoubleClick={toggleDoubleClickZoom}
        >
          <LoadedImage
            src={image.src}
            alt={image.alt || "Full project screenshot"}
            eager
            className="sw-image-viewer__media"
          />
        </div>
      </div>

      <footer className="sw-image-viewer__hint">
        Scroll to explore · Ctrl/Cmd + wheel or the buttons to zoom ·
        Double-click to toggle zoom
      </footer>
    </div>,
    document.body
  );
}

function ProjectSection({ section, projectTitle, index, onContact, onOpenImage }) {
  const key = `${section.type}-${index}`;

  switch (section.type) {
    case "lead":
      return (
        <p key={key} className="sw-case-lead">
          {section.content}
        </p>
      );

    case "heading":
      return <h2 key={key}>{section.content}</h2>;

    case "paragraph":
      return <p key={key}>{section.content}</p>;

    case "list":
      return (
        <section key={key} className="sw-case-list-section">
          {section.title && <h3>{section.title}</h3>}
          <ul>
            {(section.content || []).map((item, itemIndex) => (
              <li key={`${item}-${itemIndex}`}>{item}</li>
            ))}
          </ul>
        </section>
      );

    case "image": {
      const src = getSectionSource(section);
      const imageData = {
        src,
        alt: section.alt || `${projectTitle} project image`,
        title: section.title || projectTitle,
      };

      return (
        <figure key={key} className="sw-case-figure">
          <button
            type="button"
            className="sw-case-zoomable-image"
            onClick={() => onOpenImage(imageData)}
            aria-label={`Open ${imageData.alt} in full-screen mode`}
          >
            <LoadedImage
              src={src}
              alt={imageData.alt}
              className="sw-case-figure__media"
            />
            <span className="sw-case-image-action">
              <span aria-hidden="true">⌕</span>
              View full screen
            </span>
          </button>

          {section.caption && <figcaption>{section.caption}</figcaption>}
        </figure>
      );
    }

    case "longImage": {
      const src = getSectionSource(section);
      const imageData = {
        src,
        alt: section.alt || `${projectTitle} full-page screenshot`,
        title: section.title || projectTitle,
      };

      return (
        <figure key={key} className="sw-case-long-image">
          {section.title && (
            <div className="sw-case-long-image__heading">
              <span>Full-page interface</span>
              <h3>{section.title}</h3>
            </div>
          )}

          <button
            type="button"
            className="sw-case-long-image__preview"
            onClick={() => onOpenImage(imageData)}
            aria-label={`Open ${imageData.alt} in full-screen mode`}
          >
            <LoadedImage
              src={src}
              alt={imageData.alt}
              className="sw-case-long-image__media"
            />

            <span className="sw-case-long-image__fade" />

            <span className="sw-case-long-image__open">
              <span aria-hidden="true">⛶</span>
              Open complete screenshot
            </span>
          </button>

          {section.caption && <figcaption>{section.caption}</figcaption>}
        </figure>
      );
    }

    case "gallery":
      return (
        <section key={key} className="sw-case-gallery-section">
          {section.title && <h3>{section.title}</h3>}

          <div
            className={`sw-case-gallery ${
              section.items?.length === 2 ? "sw-case-gallery--two" : ""
            }`}
          >
            {(section.items || []).map((item, itemIndex) => (
              <figure key={`${item.src}-${itemIndex}`}>
                <button
                  type="button"
                  className="sw-case-gallery__button"
                  onClick={() =>
                    onOpenImage({
                      src: item.src,
                      alt:
                        item.alt ||
                        `${projectTitle} gallery image`,
                      title:
                        item.title ||
                        section.title ||
                        projectTitle,
                    })
                  }
                  aria-label={`Open ${
                    item.alt || `${projectTitle} gallery image`
                  } in full-screen mode`}
                >
                  <LoadedImage
                    src={item.src}
                    alt={
                      item.alt ||
                      `${projectTitle} gallery image`
                    }
                    className="sw-case-gallery__media"
                  />
                  <span className="sw-case-gallery__zoom">
                    <span aria-hidden="true">⌕</span>
                    Zoom
                  </span>
                </button>
                {item.caption && <figcaption>{item.caption}</figcaption>}
              </figure>
            ))}
          </div>
        </section>
      );

    case "video": {
      const src = getSectionSource(section);

      return (
        <figure key={key} className="sw-case-figure sw-case-video-figure">
          <LoadedVideo
            src={src}
            poster={section.poster}
            className="sw-case-figure__media"
          />
          {section.caption && <figcaption>{section.caption}</figcaption>}
        </figure>
      );
    }

    case "workflow":
      return (
        <section key={key} className="sw-case-workflow">
          {section.title && <h3>{section.title}</h3>}

          <ol>
            {(section.steps || []).map((step, stepIndex) => (
              <li key={`${step.title}-${stepIndex}`}>
                <span className="sw-case-workflow__number">
                  {String(stepIndex + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      );

    case "metrics":
      return (
        <section key={key} className="sw-case-results">
          {(section.items || []).map((item) => (
            <div className="sw-case-result" key={`${item.value}-${item.label}`}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>
      );

    case "quote":
      return (
        <figure key={key} className="sw-case-quote">
          <blockquote>{section.content}</blockquote>
          {section.author && <figcaption>— {section.author}</figcaption>}
        </figure>
      );

    case "cta":
      return (
        <section key={key} className="sw-case-cta">
          <div>
            <span>Start a project</span>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>

          <button type="button" onClick={onContact}>
            {section.buttonLabel || "Discuss your project"}
            <span aria-hidden="true">↗</span>
          </button>
        </section>
      );

    default:
      return null;
  }
}

function ProjectCaseStudy({ project, onClose }) {
  const cover = getProjectCover(project);
  const [viewerImage, setViewerImage] = useState(null);

  return (
    <>
    <div
      className="sw-case-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="sw-case-title"
    >
      <div className="sw-case-shell">
        <button
          type="button"
          className="sw-case-close"
          onClick={onClose}
          aria-label="Close case study"
        >
          ×
        </button>

        <article className="sw-case-article">
          <header className="sw-case-header">
            <div className="sw-case-header__copy">
              <span className="sw-case-eyebrow">Project case study</span>
              <h1 id="sw-case-title">{project.title}</h1>
              <p>{project.excerpt}</p>

              <div className="sw-case-header__meta">
                <span>{project.category}</span>
                {project.created_at && <span>{formatDate(project.created_at)}</span>}
              </div>
            </div>

            {cover && (
              <div className="sw-case-hero">
                {cover.type === "video" ? (
                  <LoadedVideo
                    src={cover.src}
                    poster={cover.poster}
                    className="sw-case-hero__media"
                  />
                ) : (
                  <LoadedImage
                    src={cover.src}
                    alt={cover.alt || project.title}
                    eager
                    className="sw-case-hero__media"
                  />
                )}
              </div>
            )}
          </header>

          <div className="sw-case-layout">
            <aside className="sw-case-sidebar">
              <ProjectOverview project={project} />
            </aside>

            <main className="sw-case-body">
              {(project.sections || []).map((section, index) => (
                <ProjectSection
                  key={`${section.type}-${index}`}
                  section={section}
                  projectTitle={project.title}
                  index={index}
                  onOpenImage={setViewerImage}
                  onContact={() => {
                    onClose();

                    window.setTimeout(() => {
                      const contactButton = document.querySelector(
                        ".contact-toggle, [data-contact-toggle]"
                      );

                      if (contactButton instanceof HTMLElement) {
                        contactButton.click();
                        return;
                      }

                      window.dispatchEvent(new CustomEvent("open-contact"));
                    }, 0);
                  }}
                />
              ))}

              <div className="sw-case-footer">
                <button type="button" onClick={onClose}>
                  ← Back to all projects
                </button>
              </div>
            </main>
          </div>
        </article>
      </div>
    </div>

      {viewerImage && (
        <LongScreenshotViewer
          image={viewerImage}
          onClose={() => setViewerImage(null)}
        />
      )}
    </>
  );
}

export default function ShowcaseWork() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const loadProjects = useCallback(async () => {
    setIsLoading(true);
    setLoadError("");

    try {
      // REAL BACKEND:
      // const response = await getBlogs();
      // const data = Array.isArray(response) ? response : response?.data;
      // setProjects(Array.isArray(data) ? data : []);

      // DUMMY DATA:
      await Promise.resolve();
      setProjects(DUMMY_PROJECTS);
    } catch (error) {
      console.error("Failed to fetch showcase projects:", error);
      setLoadError("We could not load the projects. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedProject]);

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(projects.map((project) => project.category).filter(Boolean))
      ),
    ],
    [projects]
  );

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory, projects]
  );

  const openProject = async (project) => {
    setSelectedProject(project);

    try {
      // Enable when the backend is ready:
      // await incrementBlogView(getProjectId(project));
    } catch (error) {
      console.warn("Could not increment project views:", error);
    }
  };

  return (
    <>
      <section className="section_showcase" aria-labelledby="showcase-heading">
        <div className="sw-section-heading">
          <span>Selected work</span>
          <h2 id="showcase-heading">How we turn ideas into working products</h2>
          <p>
            Explore the interface, system design, workflow, and business thinking
            behind our completed projects.
          </p>
        </div>

        {!isLoading && !loadError && categories.length > 1 && (
          <div className="sw-category-list" aria-label="Filter projects">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={activeCategory === category ? "is-active" : ""}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {loadError ? (
          <div className="sw-load-state sw-load-state--error" role="alert">
            <span aria-hidden="true">!</span>
            <h3>Projects could not be loaded</h3>
            <p>{loadError}</p>
            <button type="button" onClick={loadProjects}>
              Try again
            </button>
          </div>
        ) : (
          <div
            className="sw-project-grid"
            aria-live="polite"
            aria-busy={isLoading}
          >
            {isLoading
              ? Array.from({ length: SKELETON_COUNT }, (_, index) => (
                  <ProjectCardSkeleton key={index} />
                ))
              : filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={getProjectId(project, index)}
                    project={project}
                    index={index}
                    onOpen={openProject}
                  />
                ))}
          </div>
        )}

        {!isLoading && !loadError && filteredProjects.length === 0 && (
          <div className="sw-load-state">
            <h3>No projects in this category yet</h3>
            <p>Choose another category to explore our work.</p>
          </div>
        )}
      </section>

      {selectedProject && (
        <ModalPortal onClose={() => setSelectedProject(null)}>
          <ProjectCaseStudy
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </ModalPortal>
      )}
    </>
  );
}
