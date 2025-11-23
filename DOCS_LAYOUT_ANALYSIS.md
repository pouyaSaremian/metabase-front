# Docs Section Layout Analysis & Best Practices

## Current HTML Structure Analysis

Based on the analysis of the static HTML files, the docs section follows this layout pattern:

### Layout Structure

```
<div class="learn docs blog-post MB-Page">
  <!-- Left Sidebar: Main Navigation -->
  <div class="learn-left-sidebar" id="main-navigation-content">
    - Docs/Learn toggle
    - Hierarchical navigation menu (sections, subsections)
    - Expandable/collapsible menu items
  </div>

  <!-- Main Content Area -->
  <article class="MB-Documentation">
    - Page title
    - Documentation content (markdown-rendered)
    - Code blocks, images, tables, etc.
  </article>

  <!-- Right Sidebar: Table of Contents & Widgets -->
  <div class="learn__right-sidebar">
    - Sub-navigation (table of contents for current page)
    - "Was this helpful?" feedback widget
    - Additional widgets
  </div>
</div>
```

### Key Features Identified

1. **Left Sidebar (`learn-left-sidebar`)**:
   - Contains main navigation menu
   - Hierarchical structure with expandable sections
   - Active/selected state management
   - Docs/Learn mode toggle
   - Sections organized by categories (Analytics, Data Modeling, etc.)

2. **Main Content (`MB-Documentation`)**:
   - Markdown-rendered content
   - Code syntax highlighting
   - Images with zoom functionality
   - Tables with overflow handling
   - Anchor links for headings

3. **Right Sidebar (`learn__right-sidebar`)**:
   - Auto-generated table of contents from page headings
   - Feedback widget ("Was this helpful?")
   - Version selector
   - Additional contextual widgets

## Best Practice Implementation for Next.js with RTL

### 1. Layout Component Structure

**Recommended File Structure:**
```
src/app/docs/
  ├── layout.tsx              # Docs-specific layout wrapper
  ├── page.tsx                # Docs index page
  ├── [version]/
  │   ├── layout.tsx          # Version-specific layout
  │   └── [...slug]/
  │       └── page.tsx        # Dynamic docs pages
  └── components/
      ├── DocsLayout.tsx      # Main layout component
      ├── DocsSidebar.tsx     # Left navigation sidebar
      ├── DocsContent.tsx     # Main content wrapper
      ├── DocsTOC.tsx         # Right sidebar TOC
      └── DocsNavigation.tsx # Navigation menu component
```

### 2. RTL-Aware Layout Implementation

**Key RTL Considerations:**

1. **Sidebar Positioning:**
   - Use `flex-row-reverse` or logical properties (`margin-inline-start/end`)
   - Left sidebar becomes right sidebar in RTL
   - Right sidebar becomes left sidebar in RTL

2. **Spacing & Margins:**
   - Use logical properties: `margin-inline-start`, `padding-inline-end`
   - Avoid `margin-left/right`, `padding-left/right`

3. **Icons & Chevrons:**
   - Flip chevrons horizontally for RTL
   - Use `transform: scaleX(-1)` or RTL-aware icon variants

4. **Text Alignment:**
   - Use `text-start` and `text-end` instead of `text-left/right`
   - Content should be right-aligned in RTL

### 3. Recommended Component Architecture

#### DocsLayout Component

```typescript
// src/components/docs/DocsLayout.tsx
interface DocsLayoutProps {
  children: React.ReactNode;
  version?: string;
  sidebarData: DocsNavigationItem[];
  tocItems?: TOCItem[];
}

export const DocsLayout: React.FC<DocsLayoutProps> = ({
  children,
  version,
  sidebarData,
  tocItems,
}) => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Sidebar - becomes right in RTL */}
      <DocsSidebar 
        data={sidebarData} 
        version={version}
        className="fixed right-0 top-0 h-screen w-64 overflow-y-auto border-l border-gray-200"
      />
      
      {/* Main Content */}
      <main className="flex-1 mr-64 rtl:ml-64 rtl:mr-0">
        <div className="container mx-auto px-6 py-8 max-w-4xl">
          {children}
        </div>
      </main>
      
      {/* Right Sidebar TOC - becomes left in RTL */}
      {tocItems && (
        <DocsTOC 
          items={tocItems}
          className="fixed left-0 top-0 h-screen w-64 overflow-y-auto border-r border-gray-200 hidden lg:block"
        />
      )}
    </div>
  );
};
```

#### RTL-Aware Styling Pattern

```typescript
// Use Tailwind's RTL support with logical properties
className="
  flex flex-row-reverse
  mr-4 rtl:ml-4 rtl:mr-0
  text-start
  border-l rtl:border-r rtl:border-l-0
  pl-4 rtl:pr-4 rtl:pl-0
"
```

### 4. Navigation Data Structure

**Recommended TypeScript Types:**

```typescript
interface DocsNavigationItem {
  id: string;
  title: string;
  href: string;
  icon?: React.ReactNode;
  children?: DocsNavigationItem[];
  expanded?: boolean;
  active?: boolean;
}

interface TOCItem {
  id: string;
  title: string;
  level: number; // 1 for h1, 2 for h2, etc.
  href: string;
}
```

### 5. Flexible Implementation Strategy

**Option A: Static Generation (Recommended for Performance)**
- Pre-generate all docs pages at build time
- Use `generateStaticParams` for dynamic routes
- Store navigation data in JSON/MDX files

**Option B: Dynamic Rendering**
- Fetch content from CMS or markdown files at request time
- Better for frequently updated content
- Use Next.js `cache` for performance

**Option C: Hybrid Approach**
- Static generation for stable content
- Dynamic rendering for frequently updated sections
- ISR (Incremental Static Regeneration) for balance

### 6. Component Reusability Pattern

**Create Reusable Components:**

1. **DocsSidebar**: Handles navigation menu
   - Expandable/collapsible sections
   - Active state management
   - Search functionality (optional)

2. **DocsContent**: Wraps main content
   - Markdown rendering
   - Code syntax highlighting
   - Image optimization
   - Anchor link generation

3. **DocsTOC**: Table of contents
   - Auto-generate from headings
   - Smooth scroll to sections
   - Active section highlighting

4. **DocsVersionSelector**: Version switcher
   - Dropdown for version selection
   - Maintains current page context

### 7. RTL-Specific Implementation Details

**Tailwind Configuration:**
```javascript
// tailwind.config.js
module.exports = {
  plugins: [
    require('tailwindcss-rtl'),
  ],
}
```

**CSS Variables for RTL:**
```css
:root[dir="rtl"] {
  --sidebar-left: right;
  --sidebar-right: left;
  --text-align: right;
}
```

**Component-Level RTL Handling:**
```typescript
const isRTL = useMemo(() => {
  return document.documentElement.dir === 'rtl';
}, []);

// Use conditional classes
className={cn(
  "flex",
  isRTL ? "flex-row-reverse" : "flex-row",
  isRTL ? "mr-4" : "ml-4"
)}
```

### 8. Responsive Design Considerations

**Breakpoints:**
- Mobile (< 768px): Single column, collapsible sidebar
- Tablet (768px - 1024px): Sidebar + content, no TOC
- Desktop (> 1024px): Full three-column layout

**Mobile Menu:**
- Hamburger menu for sidebar
- Drawer/sheet component for mobile
- TOC as dropdown or bottom sheet

### 9. Performance Optimizations

1. **Code Splitting:**
   - Lazy load sidebar navigation
   - Dynamic imports for heavy components

2. **Virtual Scrolling:**
   - For long navigation menus
   - Use `react-window` or `react-virtual`

3. **Image Optimization:**
   - Next.js Image component
   - Lazy loading for below-fold images

4. **Content Caching:**
   - Cache markdown parsing
   - Cache navigation data
   - Use React Query or SWR for data fetching

### 10. Accessibility Requirements

1. **Keyboard Navigation:**
   - Tab order: Sidebar → Content → TOC
   - Arrow keys for menu navigation
   - Enter/Space for expanding sections

2. **ARIA Labels:**
   - Proper roles and labels
   - Announce expanded/collapsed states
   - Screen reader friendly

3. **Focus Management:**
   - Visible focus indicators
   - Skip to content link
   - Focus trap in mobile menu

## Implementation Checklist

- [ ] Create base DocsLayout component with RTL support
- [ ] Implement DocsSidebar with hierarchical navigation
- [ ] Build DocsContent wrapper for markdown rendering
- [ ] Create DocsTOC component with auto-generation
- [ ] Add version selector component
- [ ] Implement mobile responsive design
- [ ] Add keyboard navigation support
- [ ] Test RTL layout thoroughly
- [ ] Add loading states and error handling
- [ ] Implement search functionality (optional)
- [ ] Add analytics tracking
- [ ] Optimize performance (code splitting, caching)

## Recommended Libraries

- **Markdown Rendering**: `react-markdown` + `remark-gfm`
- **Syntax Highlighting**: `react-syntax-highlighter` or `shiki`
- **TOC Generation**: `markdown-toc` or custom parser
- **Icons**: `lucide-react` or `heroicons` (with RTL variants)
- **Animations**: `framer-motion` for smooth transitions
- **State Management**: React Context or Zustand for navigation state

