# Happometer UI Boilerplate

A standalone, staff-level React UI component library extracted and standardized for high-scale reuse.

## 🚀 Quick Start

### Installation
Clone this repository and install dependencies:

```bash
npm install
```

### Run Component Gallery
View all components in action:

```bash
npm run dev
```

## 📁 Structure

```text
src/
 ├── components/
 │   ├── atoms/         # Base inputs, buttons, badges
 │   ├── molecules/     # Compound elements (FormField, Alert)
 │   ├── organisms/     # Complex units (Modal, Table, Tabs)
 │   └── layouts/       # Shell and spacing structures
 ├── playground/        # Documentation & Showcase Gallery
 ├── tokens/            # Design system constants (colors, radius)
 ├── utils/             # Shared helpers (cn)
 └── index.ts           # Central library export
```

## 🛠️ Components

### Atoms
- **Button**: Multi-variant, accessible action component.
- **Input**: Standardized text input with error state support.
- **Label**: Typography-optimized form labels.
- **Badge**: Status indicators with semantic color mappings.
- **Spinner**: Async state visualizer.

### Molecules
- **FormField**: Integrated Label/Input/Error unit.
- **Alert**: Feedback system for Success, Warning, and Error states.
- **Card**: Versatile content container with sub-component support.

### Organisms
- **Modal**: Accessible dialog system with backdrop and animations.
- **Table**: Semi-automated data grid with semantic HTML structure.
- **Tabs**: Logic-encapsulated tabbed interface.

## 🎨 Styling
This library uses **Tailwind CSS v4** for maximum performance and flexibility. To customize themes, modify `src/index.css` or `src/tokens/*.ts`.

---
*Created by Google Antigravity*
