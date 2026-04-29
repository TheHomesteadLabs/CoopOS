# Image assets

Drop images into the matching subfolder. Filenames must match the `image:` field in `src/data/catalog.ts`.

If an image is missing, a designed placeholder shows automatically. The site never breaks from a missing image.

## Folder structure

```
public/images/
├── products/        # Product hero shots (referenced by product.image)
├── suites/          # Suite hero images (referenced by suite.image)
├── teams/           # Brad portrait, leadership photos
└── og/              # Open Graph social share images
```

## Required filenames

### Products (`public/images/products/`)
- `coopos.jpg`
- `homesteadhq.jpg`
- `peckperformance.jpg`
- `coopcam.jpg`
- `eggwatch.jpg`
- `thedoorman.jpg`
- `coopair.jpg`
- `growguard.jpg`
- `canopycontrol.jpg`
- `trailscout.jpg`
- `drivewatch.jpg`
- `runcam.jpg`
- `pondpulse.jpg`
- `weatherwatch.jpg`

### Suites (`public/images/suites/`)
- `coopops.jpg`
- `vegeops.jpg`
- `perimeterops.jpg`
- `aquaops.jpg`

### Team (`public/images/teams/`)
- `brad.jpg` — square portrait for About page
- `brad-portrait.jpg` — taller 3/4 portrait for homepage thesis section

### OG (`public/images/og/`)
- `og-image.png` — 1200×630 social share image (used in BaseLayout.astro)

## Image specs

- **Product images:** ~1600×1200px (4:3) or ~1600×2000px (4:5 for hero versions). JPG, ~80% quality.
- **Suite images:** ~2400×1350px (16:9) for hero, ~1920×840px (21:9) for full-bleed. JPG.
- **Team images:** square or 3:4 portrait, 1200×1200 or 1200×1600. JPG.
- **OG image:** exactly 1200×630px. PNG preferred for sharp text.

## Workflow

1. Generate or shoot the image
2. Resize/optimize (TinyPNG or Squoosh both work)
3. Save with the exact filename from the list above
4. Drop it in the right subfolder
5. Commit + push — Cloudflare auto-rebuilds in 30 seconds
6. Image appears on the site automatically
