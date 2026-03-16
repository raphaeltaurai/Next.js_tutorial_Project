# Handcrafted Haven — Design System

This document outlines the colors, fonts, layout, and graphical elements chosen for the Handcrafted Haven web application.

## Color Palette

The color palette is inspired by natural materials, craftsmanship, and sustainability — evoking warmth, authenticity, and artisanal quality.

### Primary Colors — Amber/Brown

Warm amber and brown tones serve as the primary brand colors, reflecting natural wood, leather, and handcrafted materials.

| Token        | Hex       | Usage                              |
| ------------ | --------- | ---------------------------------- |
| `amber-50`   | `#FFF8F0` | Lightest background tint           |
| `amber-100`  | `#FFEDD5` | Light background                   |
| `amber-200`  | `#FED7AA` | Borders, subtle accents            |
| `amber-300`  | `#FDBA74` | Chart bars, progress indicators    |
| `amber-400`  | `#FB923C` | Hover states                       |
| `amber-500`  | `#C87533` | Primary buttons, links             |
| `amber-600`  | `#A0522D` | Header backgrounds, active buttons |
| `amber-700`  | `#7C3F1E` | Sidebar logo background            |
| `amber-800`  | `#5C2E16` | Icon accents, card icons           |
| `amber-900`  | `#3D1F0F` | Heading text on light backgrounds  |

### Accent Colors — Sage Green

Sage green accents represent sustainability, nature, and the organic feel of handmade goods.

| Token       | Hex       | Usage                            |
| ----------- | --------- | -------------------------------- |
| `sage-50`   | `#F5F7F4` | Lightest green tint              |
| `sage-100`  | `#E8ECE6` | Subtle green backgrounds         |
| `sage-200`  | `#D1D9CD` | Green borders                    |
| `sage-300`  | `#A8B89F` | Secondary accents                |
| `sage-400`  | `#7D9B6F` | Success states, eco badges       |
| `sage-500`  | `#5C7A4E` | Primary green for CTAs           |
| `sage-600`  | `#4A6340` | Hover state for green elements   |
| `sage-700`  | `#3B4F33` | Dark green text                  |
| `sage-800`  | `#2D3B27` | Very dark green                  |
| `sage-900`  | `#1F291B` | Deepest green                    |

### Neutral Colors — Cream/Warm White

Warm neutral tones for backgrounds and surfaces, avoiding cold whites.

| Token       | Hex       | Usage                            |
| ----------- | --------- | -------------------------------- |
| `cream-50`  | `#FEFCF8` | Page background                  |
| `cream-100` | `#FDF8EF` | Card backgrounds, surface color  |
| `cream-200` | `#FAF0DE` | Alternate row backgrounds        |
| `cream-300` | `#F5E6CC` | Borders                          |
| `cream-400` | `#E8D5B5` | Disabled states                  |
| `cream-500` | `#D4C4A0` | Muted text backgrounds           |

### Supporting Colors

Standard Tailwind gray and green scales are used for text, borders, and status indicators where the brand colors are not appropriate.

## Typography

### Display Font — Playfair Display

- **Usage**: Headings, hero text, brand name, card values, breadcrumbs
- **Weights**: 400 (Regular), 700 (Bold)
- **Style**: Elegant serif with high contrast strokes — conveys craftsmanship and sophistication
- **Source**: Google Fonts

### Body Font — Lato

- **Usage**: Body text, labels, navigation, form inputs, buttons
- **Weights**: 400 (Regular), 700 (Bold)
- **Style**: Clean, friendly sans-serif with warm letterforms — highly readable and approachable
- **Source**: Google Fonts

## Layout

### General Structure

- **Responsive**: Mobile-first design using Tailwind CSS breakpoints (`md:` for tablet/desktop)
- **Navigation**: Sidebar layout on desktop, bottom bar on mobile
- **Content**: Card-based dashboard with rounded corners (`rounded-xl`, `rounded-lg`)
- **Spacing**: Consistent padding and margin using Tailwind's spacing scale

### Grid System

- Standard CSS Grid and Flexbox layouts
- Custom 13-column grid for dashboard chart layouts
- Cards arranged in responsive grid patterns

## Graphical Elements

### Icons

- **Library**: Heroicons (outline style)
- **Brand Icon**: `HandRaisedIcon` — representing handcrafted artistry and human touch
- **Size**: Consistent `w-5`/`w-6` for navigation, `h-12 w-12` for logo

### Decorative Elements

- Triangular accent shape using CSS borders (amber-colored)
- Rounded corners on all cards and containers
- Subtle shadows (`shadow-sm`) on cards for depth
- Shimmer animation for loading skeleton states

### Button Styles

- Primary: Amber-600 background with white text
- Hover: Lighter amber-500
- Active: Darker amber-700
- Focus: Amber-600 outline with 2px offset for accessibility
- Disabled: 50% opacity with `cursor-not-allowed`

## Brand Identity

- **App Name**: Handcrafted Haven
- **Logo**: Playfair Display font + HandRaisedIcon (rotated 15°)
- **Tagline**: "Discover unique, handcrafted treasures made with love by talented artisans."
- **Tone**: Warm, inviting, artisanal, sustainable, community-focused
