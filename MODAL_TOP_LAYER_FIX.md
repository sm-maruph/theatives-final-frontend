# Modal top-layer correction

The previous overlay rules still depended on each section modal's own CSS. In browsers where those rules were reordered or cached, the modal could remain inside the page flow, allowing Services cards, Blog lists, Works cards, the page close button, or the contact control to appear over it.

## Final structural correction

- `ModalPortal` now creates a dedicated `.app-modal-root` element and appends it directly to `document.body`.
- The root uses an inline-protected, fixed viewport layer at the maximum practical z-index.
- The root contains the only modal background:
  - desktop/fine pointer: animated particle canvas;
  - mobile/coarse pointer/reduced motion: fully opaque static glass gradient.
- Page scrolling is locked at the document level and restored to the exact previous scroll position after closing.
- Each existing modal overlay is forced into the viewport-centering stage without changing the modal card design or its content.
- Only the modal card scrolls when its content exceeds the viewport height.
- Particle components were removed from individual modal components to avoid nested backgrounds and partial-size particle canvases.

## Modals covered

- Service and micro-service inquiry
- Works 3D-card video
- Works showcase details
- Blog/news details
- Client details
- Gallery details

Desktop page design, the Works rotating 3D carousel, cards, and section layout are otherwise unchanged.
