# AI GUIDE — NS UI Boilerplate
## Authoritative Instructions for AI Agents

This document defines **non-negotiable rules** for AI assistants working on the **NS UI Boilerplate**.
If there is any conflict between this guide and generated code, **THIS GUIDE WINS**.

---

## 0. ABSOLUTE RULES (READ FIRST)

- ❌ DO NOT generate new UI components unless explicitly instructed
- ❌ DO NOT introduce new UI libraries or styling systems
- ❌ DO NOT inline arbitrary Tailwind styles when a component already exists
- ❌ DO NOT bypass the Component Gallery
- ❌ DO NOT expose Atomic Design terms (Atoms/Molecules/Organisms) in UI navigation
- ❌ DO NOT hardcode colors, spacing, or typography values

- ✅ ALWAYS reuse existing components
- ✅ ALWAYS use design tokens
- ✅ ALWAYS use the `cn()` utility for class merging
- ✅ ALWAYS register UI changes in the Playground
- ✅ ALWAYS ask before creating a new component

If a required UI component does not exist:
👉 **STOP and ASK before proceeding**

---

## 1. Project Overview

**NS UI Boilerplate** is a **standalone, production-grade React UI system** designed for reuse across multiple applications.

- **Purpose:** High-scale, consistent UI
- **Audience:** Staff / Senior frontend architecture
- **Business Logic:** ❌ NONE (UI only)
- **Source of Truth:** `src/playground/ComponentGallery.tsx`

---

## 2. Architecture Rules (IMPORTANT)

### Atomic Design Usage

- Atomic Design is used **ONLY** for filesystem organization
- Atomic Design is **NOT** used for UI categorization or navigation

### UI Categories (Functional)

The Component Gallery uses **functional categories**, such as:
- Elements
- Forms
- Navigation
- Layout
- Overlays
- Feedback
- Data Display

⚠️ **Never create or expose tabs like “Atoms”, “Molecules”, or “Organisms” in the UI**

---

## 3. Tech Stack (LOCKED)

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS v4 (using `@theme`)
- **Icons:** Lucide React
- **Utilities:** `clsx` + `tailwind-merge` via `cn()`
- **Headless Logic:** Headless UI (Transitions / Dialogs only)

❌ Do NOT add other UI frameworks or styling systems.

---

## 4. Component Inventory (SOURCE OF TRUTH)

When referencing or adding components, use this master list as the **authoritative source**.
If a component exists here, it **MUST be reused**.

### Atoms (`src/components/atoms`)
- Avatar
- Badge
- Button
- Checkbox
- Input
- Label
- ProgressBar
- RadioGroup
- Select
- Spinner
- Switch
- Textarea

### Molecules (`src/components/molecules`)
- ActionPanel
- Alert
- ButtonGroup
- Card
- Dropdown
- EmptyState
- FormField
- InputGroup
- ListContainer
- MediaObject
- Notification
- Pagination
- StatsCard

### Organisms (`src/components/organisms`)
- AuthForms
- Breadcrumbs
- Calendar
- DataDisplay
- DataTable
- Drawer
- MegaMenu
- Modal
- Navbar
- Steps
- Table
- Tabs
- ValidatedForm
- VerticalNavigation

### Layouts (`src/components/layouts`)
- LayoutElements (Container, Divider)
- MultiColumnLayout
- SidebarLayout
- StackedLayout

---

## 5. Coding Conventions

### Component Pattern (MANDATORY)

All components MUST:

1. Use **named exports**
2. Be wrapped in `React.forwardRef`
3. Extend native HTML attributes
4. Handle variants via props
5. Use `cn()` for class merging
6. Avoid side effects unless unavoidable

### Example

```tsx
import * as React from "react"
import { cn } from "../../utils/cn"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered"
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl bg-white",
          variant === "bordered" && "border border-slate-200",
          className
        )}
        {...props}
      />
    )
  }
)

Card.displayName = "Card"

export { Card }
```

---

## 6. Styling Rules (Tailwind v4)

- **Fluidity:** Use `rounded-xl`, `rounded-2xl`, etc., aligned with theme tokens
- **Neutrals:** Use `slate-50` → `slate-900`
- **Brand Colors:** Use CSS variables:
  - `bg-[var(--color-brand-primary)]`
  - Reference `src/index.css` for exact mappings

### ❌ Forbidden

- Hardcoded hex values
- Arbitrary Tailwind values
- Inline styles

---

## 7. Icons

- Use **Lucide React** exclusively
- Pass icons as components (`icon={Mail}`) or children
- Do NOT inline raw SVGs

---

## 8. Playground Workflow (CRITICAL)

1. Create or update the component
2. Register it in `src/playground/ComponentGallery.tsx`
3. Place it under the correct **functional category**
4. Display variants, states, and sizes

⚠️ If it’s not visible in the Playground, it does not exist.

---

## 9. Workflow for AI Assistants

### Creating a Component
- Confirm it does NOT already exist in the inventory
- Identify correct atomic folder
- Follow the Component Pattern
- Register in the Playground

### Modifying Styles
- Check `src/index.css` first
- Tailwind config changes are rarely needed

### Debugging
- Check console for React 19 issues or import errors

---

## END OF RULES
