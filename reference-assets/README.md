# Reference Assets

The original EVA METACHEM flyers supplied as brand/content reference during
design are kept here for context. They are **not** imported into the build
— the live site uses the CrystalGlyph SVG component
(`src/components/CrystalGlyph.tsx`) for product visuals instead of these
flyer images, to avoid bundling low-resolution marketing graphics and to
keep the site license-clean. Swap in real product photography here and
wire it into `src/data/products.ts` (`image` field) whenever it's ready.
