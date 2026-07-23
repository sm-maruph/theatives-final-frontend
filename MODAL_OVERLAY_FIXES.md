# Modal Overlay Fixes

## Corrected behavior

- Blog details no longer render below the blog cards.
- Every public modal is rendered through a React portal under `document.body`.
- All modal overlays use a document-level maximum stacking layer and stay centered in the viewport.
- The underlying section scroll container is frozen while a modal is open.
- Desktop modal backdrops retain animated `tsparticles` effects.
- Mobile and touch devices use an opaque, static glass-style gradient instead of a particle canvas.
- The mobile background fully covers About, Services, Works, and News content while the modal is open.
- Works video, Works showcase, Blog, Gallery, Client, and Service Inquiry modals now share the same overlay behavior.
- Escape closes every modal; clicking the backdrop also closes it.

## Main files

- `src/component/common/ModalPortal.jsx`
- `src/component/animationSubcomponent/ParticlesComponent.jsx`
- `src/App.css`
- `src/component/subcomponentBlog/Blogs.jsx`
- `src/component/subcomponentWork/ShowcaseWork.jsx`
- `src/component/subcomponentWork/WorksSection.jsx`
- `src/component/subcomponentAbout/GallerySection.jsx`
- `src/component/subcomponentAbout/ClientsSection.jsx`
- `src/component/subComponentService/ServiceInquiryModal.jsx`
