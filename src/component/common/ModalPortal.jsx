import {
  cloneElement,
  isValidElement,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import ParticlesComponent from "../animationSubcomponent/ParticlesComponent";
import "./ModalPortal.css";

/**
 * True application-level modal portal.
 *
 * A dedicated element is appended directly to document.body. The fixed host,
 * opaque background and centering stage are therefore never affected by a
 * section's transform, overflow, perspective, animation or stacking context.
 */
export default function ModalPortal({ children, onClose, theme = "dark" }) {
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  const [portalNode] = useState(() => {
    if (typeof document === "undefined") return null;

    const node = document.createElement("div");
    node.className = "app-modal-root";
    node.tabIndex = -1;
    return node;
  });

  useLayoutEffect(() => {
    if (!portalNode) return undefined;

    const html = document.documentElement;
    const body = document.body;
    const previousActiveElement = document.activeElement;
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    const previous = {
      htmlOverflow: html.style.overflow,
      htmlOverscroll: html.style.overscrollBehavior,
      bodyOverflow: body.style.overflow,
      bodyOverscroll: body.style.overscrollBehavior,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyLeft: body.style.left,
      bodyRight: body.style.right,
      bodyWidth: body.style.width,
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeRef.current?.();
      }
    };

    portalNode.dataset.theme = theme;
    body.appendChild(portalNode);

    html.classList.add("modal-open");
    body.classList.add("modal-open");

    /* Lock the actual document at its current visual position. This also
       prevents touch-scroll from reaching section-owned scroll containers. */
    html.style.overflow = "hidden";
    html.style.overscrollBehavior = "none";
    body.style.overflow = "hidden";
    body.style.overscrollBehavior = "none";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = `-${scrollX}px`;
    body.style.right = "0";
    body.style.width = "100%";

    window.addEventListener("keydown", handleKeyDown, true);
    requestAnimationFrame(() => portalNode.focus({ preventScroll: true }));

    return () => {
      window.removeEventListener("keydown", handleKeyDown, true);

      html.classList.remove("modal-open");
      body.classList.remove("modal-open");

      html.style.overflow = previous.htmlOverflow;
      html.style.overscrollBehavior = previous.htmlOverscroll;
      body.style.overflow = previous.bodyOverflow;
      body.style.overscrollBehavior = previous.bodyOverscroll;
      body.style.position = previous.bodyPosition;
      body.style.top = previous.bodyTop;
      body.style.left = previous.bodyLeft;
      body.style.right = previous.bodyRight;
      body.style.width = previous.bodyWidth;

      portalNode.remove();
      window.scrollTo(scrollX, scrollY);

      if (previousActiveElement instanceof HTMLElement) {
        previousActiveElement.focus({ preventScroll: true });
      }
    };
  }, [portalNode, theme]);

  if (!portalNode) return null;

  /* Inline positioning is deliberate. It protects the modal from stale or
     component-local CSS in deployed builds. Component CSS can still control
     the visual design of the inner modal card. */
  const forcedOverlay = isValidElement(children)
    ? cloneElement(children, {
        style: {
          ...children.props.style,
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          minHeight: 0,
          margin: 0,
          display: "grid",
          placeItems: "center",
          overflow: "hidden",
          background: "transparent",
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
          transform: "none",
          zIndex: 2,
        },
      })
    : children;

  return createPortal(
    <div className={`app-modal-shell app-modal-shell--${theme}`}>
      <ParticlesComponent theme={theme} />
      <div className="app-modal-stage">{forcedOverlay}</div>
    </div>,
    portalNode
  );
}
