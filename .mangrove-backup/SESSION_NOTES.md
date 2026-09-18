# Mangrove Session Backup — Sep 18, 2026

This folder preserves work from the redesign session before reverting to the last git commit (`597368b`).

## Contact & business data

- **Phone:** +91 93438 31500
- **Emails:** suresh@mangroveit.com
- **Address:** Plot No. 23, 3rd Cross, SCR Layout, Anjanapura, JP Nagar 9th Phase, Bangalore , Karnataka 560108 , India
- **Company:** Mangrove Integrated Solutions Pvt. Ltd.
- **Site:** https://mangroveit.com

## Logo

- **File:** `public/mangrove_logo.png` (1021×98, transparent PNG)
- Full logo: MG emblem + "Makes good" + "MANGROVE INTEGRATED SOLUTIONS PVT. LTD."
- Processed from user-provided JPEG with black background removed (alpha channel)
- Source asset also at: `.cursor/projects/.../assets/image-19c91f37-6971-441a-99ea-c0f7ecc636aa.png`

## Navbar layout (Navigation.tsx)

- Left 50%: full transparent logo only (no separate "MANGROVE" text)
- Right 50%: Home | About | Services | NRI Real Estate | Contact | Get In Touch
- **Sectors removed** from navbar (section still on page)
- Nav links: `text-[15px] font-semibold`
- Get In Touch: `!py-3 !px-6 text-base !font-bold`

## New components (in `components/` backup)

| File                | Purpose                                           |
| ------------------- | ------------------------------------------------- |
| NRIRealEstate.tsx   | NRI Real Estate flagship section                  |
| ServiceShowcase.tsx | Reusable service detail layout                    |
| Sectors.tsx         | Sectors marquee/grid section                      |
| Preloader.tsx       | Animated preloader with logo                      |
| ParticleField.tsx   | Hero particle animation                           |
| PageBackground.tsx  | Clean static page gradient (added in bg redesign) |

## Page structure (page.tsx)

```
Preloader → Navigation → Hero → About → Services →
AVIntegration → ITIntegration → SecuritySurveillance →
InteriorAcoustics → ElectricalProjects → Metrics →
Sectors → NRIRealEstate → Testimonials → Contact → Footer
```

## Background redesign (reverted per user request)

User disliked busy backgrounds. Session tried:

- Removed: animated mesh, grid overlays, noise, ParticleField, radial glow orbs
- Added: `section-surface`, `section-surface-alt`, `PageBackground`, static gradients

Original (pre-session) had: `bg-mesh`, `bg-grid`, `bg-noise`, cyan/indigo radial gradients.

## Other assets

- `public/Jaswanth_Varma_Raghavaraju.pdf` — resume PDF added during session

## To restore later

```bash
# Example: restore logo only
cp .mangrove-backup/public/mangrove_logo.png public/

# Example: restore full session components
cp .mangrove-backup/components/*.tsx components/
cp .mangrove-backup/Navigation.tsx components/Navigation.tsx
# etc.
```
