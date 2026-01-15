# PROMPT FOR LOVABLE / AI ASSISTANTS

Use this system prompt to ensure all generated UI matches the **NS UI Boilerplate** look and feel.

## 🔗 Context Source (CRITICAL)
**Repository:** [https://github.com/smali-wq/NS-Boilerplate](https://github.com/smali-wq/NS-Boilerplate)

Before generating any code, you **MUST** analyze the following directories in the provided repository:
1.  `src/components/**` (Understand existing Atoms, Molecules, Organisms)
2.  `src/playground/ComponentGallery.tsx` (Understand usage patterns and naming)

---

## 🧠 Component Gallery Awareness
The `ComponentGallery.tsx` file is the **Source of Truth** for how components are composed and named. You must recognize and strictly use the naming conventions found there.

**Specific Patterns to Memorize & Reuse:**
-   **"06.2 Selection Groups"**: Refers to `RadioGroup` implementations.
-   **"Multi-Column Registration Pattern"**: Refers to the specific layout in `RegistrationForm`.
-   **"Sign-In Pattern"**: Refers to `SignInForm`.
-   **"03.3 Media Objects"**: Refers to the `MediaObject` component usage.
-   **"05.1 Modal Dialogs"**: Refers to the usage of `Modal` with `ModalHeader`/`ModalFooter`.

**Rule:** When a user asks for a "registration form" or "selection group", you MUST output code that matches the *exact* structure and props used in these gallery examples.

---

## 🎨 Design System & Tokens

### 1. Colors (Strict Adherence)
You must **strictly** follow the defined color tokens. Do NOT invent new colors.
-   **Brand Primary:** `#550c2f`
-   **Brand Secondary:** `#8d144e`
-   **Brand Muted:** `#fdf2f7`
-   **Neutrals:** `slate-50` through `slate-950`
-   **Status:** `emerald` (success), `amber` (warning), `blue` (info), `red` (destructive).

### 2. Radius & Shape
-   **Cards/Containers:** `rounded-3xl` (Signature look)
-   **Buttons:** `rounded-xl` (md), `rounded-2xl` (lg)
-   **Inputs:** `rounded-xl`

### 3. Typography (Signature Style)
-   **Headings (H1/H2):** `font-black`, `uppercase`, `tracking-tight`
-   **Subtitles/Labels:** `font-bold`, `uppercase`, `text-xs`, `tracking-widest`, `text-slate-400`
-   **Body:** `text-slate-600`, `text-sm`

---

## 📝 Coding Standards

1.  **Always use `forwardRef`**: Every component must be ref-forwarding.
2.  **Always use `cn()`**: Merge local classes with props.
3.  **Strict Typing**: Props must extend `React.HTMLAttributes<T>`.

## 🧬 Gold Standard Example
*Match this coding style exactly.*

```tsx
import * as React from "react"
import { cn } from "@/utils/cn"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      // SIGNATURE STYLES: rounded-3xl, slate border, soft shadow
      className={cn(
        "rounded-3xl border border-slate-200 bg-white text-slate-950 shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)
Card.displayName = "Card"
```

## 🚀 Execution Rules
1.  **Repo First:** Always check the repo URL for existing components before creating new ones.
2.  **Gallery First:** If a UI pattern exists in `ComponentGallery.tsx`, reuse it 1:1.
3.  **No Hallucinations:** Do not import components that are not in the file list of the repo.
