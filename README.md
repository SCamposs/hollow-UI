# hollow-UI

<div align="center">
  
  <h1>hollow-UI</h1>
  <p>Modern React Components Framework with Dark Fantasy Design System</p>
  <p>Developed by <strong>Ítalo Soares Campos</strong></p>
  
  <p>
    <a href="#installation">Installation</a> •
    <a href="#usage">Usage</a> •
    <a href="#components">Components</a> •
    <a href="#documentation">Documentation</a>
  </p>
</div>

---

## About

hollow-UI is a collection of reusable components built with **React**, **TypeScript**, **Tailwind CSS**, and **Radix UI**. Designed to be:

- **Customizable** - Each component can be personalized to your needs
- **Accessible** - Built with Radix UI for accessibility
- **Copy-paste** - Copy and paste components directly into your project
- **Theme support** - Light, dark, and contrast modes included
- **TypeScript** - Fully typed for better development experience

## Installation

hollow-UI offers **two ways of usage** to suit different needs:

### 📦 Via CLI (Recommended)

Copy only the components you need directly into your project:

```bash
# 1. Initialize configuration (first time - REQUIRED)
npx @scmposs/hollow-ui init

# 2. Add specific components
npx @scmposs/hollow-ui add button
npx @scmposs/hollow-ui add card badge

# 3. List all available components
npx @scmposs/hollow-ui list
```

**What does `init` do?**

- ✅ Creates the `src/lib/utils.ts` file with utility functions
- ✅ Checks if Tailwind CSS is configured
- ✅ Prepares your project to receive the components

**Advantages:**

- ✅ You have full control of the code
- ✅ Can customize freely
- ✅ Doesn't increase `node_modules`
- ✅ Better for tree-shaking
- ✅ Components stay in your project

### 📚 Via NPM (Complete Package)

Install as a dependency for quick access to all components:

```bash
npm install @scmposs/hollow-ui
```

```bash
yarn add @scmposs/hollow-ui@latest
```

```bash
pnpm add @scmposs/hollow-ui@latest
```

**Advantages:**

- ✅ Quick installation
- ✅ Automatic updates
- ✅ Ideal for prototypes
- ✅ All components available

## Usage

### Basic import (Via NPM)

When installed as an npm package:

```tsx
import { Button, Card, Badge } from "@scmposs/hollow-ui";
import "@scmposs/hollow-ui/styles.css";

function App() {
  return (
    <Card>
      <h2>Hello hollow-UI!</h2>
      <p>Modern component framework with dark fantasy aesthetics</p>
      <div>
        <Button>Click here</Button>
        <Badge variant="secondary">v1.0.0</Badge>
      </div>
    </Card>
  );
}
```

### Import (Via CLI)

When added via CLI, components are copied to your project:

```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function App() {
  return (
    <Card>
      <h2>Hello hollow-UI!</h2>
      <p>Modern component framework with dark fantasy aesthetics</p>
      <div>
        <Button>Click here</Button>
        <Badge variant="secondary">v1.1.0</Badge>
      </div>
    </Card>
  );
}
```

### Style configuration (NPM)

When using via NPM, import the CSS styles into your project:

```tsx
import "@scmposs/hollow-ui/styles.css";
```

### Style configuration (CLI)

When using via CLI, styles are already integrated with your existing Tailwind CSS. No additional CSS import is needed.

### Tailwind Configuration

Add hollow-UI to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    // ... your existing content
    "./node_modules/@scmposs/hollow-ui/**/*.{js,ts,jsx,tsx}",
  ],
  // ... rest of configuration
};
```

## Components

### Interface Components

- **Button** - Buttons with multiple variants and sizes
- **Card** - Flexible containers for content
- **Badge** - Labels and tags for categorization
- **Input** - Styled input fields
- **Label** - Form labels
- **Textarea** - Multiline text fields

### Interactive Components

- **Dialog** - Modals and overlays
- **Select** - Dropdown selectors
- **Checkbox** - Selection boxes
- **Switch** - Toggle controls
- **Accordion** - Collapsible lists
- **Popover** - Tooltips and popups

### Layout Components

- **Separator** - Visual dividers
- **Scroll Area** - Custom scroll areas
- **Table** - Responsive tables

### Feedback Components

- **Toast** - Temporary notifications
- **Skeleton** - Loading placeholders

## Documentation

Each component comes with complete documentation including:

- **Visual examples** - See components in action
- **Copyable code** - Copy and paste directly into your project
- **Props API** - Complete documentation of all properties
- **Variations** - Different styles and configurations
- **Use cases** - Practical implementation examples

### Component examples

#### Button

```tsx
// Basic variants
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🎉</Button>
```

#### Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Optional description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

## Color System

hollow-UI uses a custom color system with a dark fantasy aesthetic:

- **Primary**: `#2E4A78` - Deep blue, main brand color
- **Accent**: `#3D5FA8` - Vibrant blue for highlights
- **Muted**: Gray tones for secondary text
- **Destructive**: Red for destructive actions
- **Success**: Green for confirmations

### Theme support

- **Light Mode** - Default light theme
- **Dark Mode** - Elegant dark theme with deep blue accents
- **Contrast Mode** - High contrast for accessibility

## Development

### Project structure

```
hollow-ui/
├── src/
│   ├── app/                 # Next.js app router
│   ├── registry/
│   │   └── ui/             # UI Components
│   ├── lib/
│   │   └── utils.ts        # Utilities
│   └── styles/
│       └── globals.css     # Global styles
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

### Available scripts

```bash
# Development
npm run dev

# Production build
npm run build

# Lint
npm run lint

# Build components for NPM
npm run build:package
```

## Author

<div align="center">
  <img src="https://github.com/SCamposs.png" alt="Ítalo Soares Campos" width="100" />
  
  **Ítalo Soares Campos**  
  *Frontend Developer*

  <p>
    <a href="https://github.com/SCamposs">GitHub</a> •
    <a href="https://www.linkedin.com/in/italo-soares-campos/">LinkedIn</a> •
    <a href="mailto:soarescmpos@gmail.com">Email</a>
  </p>
</div>

## License

MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Made by <strong>Ítalo Soares Campos</strong></p>
  <p>© 2025 hollow-UI. All rights reserved.</p>
</div>
