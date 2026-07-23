# Mobile 3D Rendering Fixes

## Preserved exactly

- Desktop About, Services, Works, and News designs.
- Desktop Works rotating 3D carousel.
- Mobile Works rotating circular 3D carousel.
- Card click opens the same centered YouTube modal.
- Existing Home overlay navigation structure.

## Main corrections

1. Corrected About, Works, and Blog hero class names so each component uses its own namespaced CSS instead of Services CSS.
2. Changed fixed section-scene stacking from negative `z-index` to an isolated `z-index: 0` background layer, with content explicitly above it.
3. Paused and hid the covered Home HUD only while a mobile section is open. This prevents two animated full-screen interfaces from rendering simultaneously.
4. Replaced unstable mobile `100dvh` overlay sizing with stable `100svh` sizing.
5. Disabled nested backdrop blur on mobile section pages; desktop blur remains unchanged.
6. Reduced only secondary mobile background effects while retaining responsive 3D objects.
7. Kept the Works carousel fully 3D and rotating on mobile, with responsive card/radius sizing.
8. Rendered the Works video modal through a React portal into `document.body`, guaranteeing that it appears above the 3D carousel rather than below or inside its stacking context.
9. Paused the carousel during touch interaction, while the modal is open, and while the browser tab is hidden.
10. Disabled mobile testimonial autoplay to avoid periodic repaint flashes on the About page.
11. Repaired the malformed Blog grid keyframe.
12. Fixed the Services micro icon typo from `1666px` to `166px`.
13. Fixed direct-route and browser back/forward synchronization.

## Validation completed

- All CSS files parsed without top-level syntax errors.
- All relative source imports resolved.
- All 57 JavaScript/JSX files parsed without syntax errors.
- `git diff --check` passed.

A full Vite build could not be run in the sandbox because both available npm registries failed during dependency installation (`503 Service Temporarily Unavailable` and `EAI_AGAIN`). Run locally:

```bash
npm install
npm run build
npm run dev
```
