# ✨ Shine Suite

> A high-end, comprehensive content management and AI generation platform
> custom-built for the Shine Advocacy Group — empowering advocates to create,
> manage, and optimize educational content for special education (IEP/504)
> advocacy across multiple social media platforms.

---

## 🔗 Live App

[View Shine Suite Live](https://ai.studio/apps/22bca21c-bd90-4f92-945e-3b82402259c0?fullscreenApplet=true)

---

## 🌟 Overview

In the complex world of special education advocacy, clear and consistent communication is vital. Shine Suite empowers the Shine Advocacy Group by automating the heavy lifting of content creation while maintaining a premium, authoritative brand voice. The platform blends structured data management with cutting-edge Generative AI to produce editorial-grade marketing assets.

---

## 🚀 Comprehensive Feature Set

### 🤖 Advanced AI Integration
- **Gemini 2.0 Content Engine** — Uses Google's latest LLMs to generate high-converting hooks, empathetic captions, and platform-specific calls-to-action (CTAs)
- **Imagen 3 Visual Studio** — Integrated AI image generation allows users to create custom, on-brand social media graphics without leaving the dashboard
- **Prompt Engineering** — Built-in Prompt Builders ensure that AI outputs always align with the Shine Advocacy Group's specific persona and educational goals

### 📚 Structured Content Libraries
- **Foundations of Advocacy Tips** — A curated database of advocacy nuggets (e.g., *"Their childhood isn't a race"*). Each tip includes:
  - Scheduled dates and day-of-week tracking
  - Targeted hooks and long-form captions
  - Automated hashtag generation
- **Educational Carousels** — Tools for building multi-slide educational decks
  - SEO optimization mapped to specific queries and keywords (e.g., "What is an IEP?")
  - Slide-by-slide logic with structured headlines and body text for up to 10 slides per carousel
- **Engagement Q&As** — Designed to spark community conversation
  - Persona-driven content tailored to specific parent personas (e.g., "Hope" or "Rebecca")
  - Platform-specific CTAs — automatically toggles between Facebook Group links and Instagram "Link in Bio" instructions

### 🎨 Premium Design & UX
- **Shine Aesthetic** — A sophisticated Black & Gold theme utilizing `#D4AF37` (shine-gold) and `#0A0A0A` (shine-black) for a luxury professional feel
- **Fluid Motion System** — Powered by Motion, the UI features entrance staggers, smooth sidebar transitions, and interactive hover states
- **Responsive Workspace** — A mobile-first, desktop-optimized layout with a persistent navigation rail and dynamic content cards

### 📐 Smart Formatting Engine
- **Aspect Ratio Support** — Built-in presets for Square (1:1), Portrait (4:5), and Story (9:16)
- **Resource Mapping** — Automatically links content to the group's lead magnets including the Free Evaluation Guide, IEP Cheat Sheet, and LD Checklist

---

## 💻 Tech Stack

### Frontend Architecture

| Technology | Description |
|------------|-------------|
| React 19 | Latest concurrent rendering features and hooks for state management |
| Vite 6 | Lightning-fast HMR and optimized production builds |
| TypeScript 5.8 | Strict type safety across content schemas and AI services |

### Styling & Animation

| Technology | Description |
|------------|-------------|
| Tailwind CSS 4 | Modern utility-first styling with custom Shine brand theme configuration |
| Motion (Framer Motion) | Advanced layout animations and gesture-based interactions |
| Lucide React | Crisp, consistent SVG icon library for intuitive navigation |

### AI & Backend Services

| Technology | Description |
|------------|-------------|
| @google/genai SDK | Direct integration with Google's Gemini and Imagen models |
| Express.js | Lightweight backend server for API proxying and environment security |
| Dotenv | Secure management of sensitive API credentials |

---

## 📁 Directory Structure

```
/src
  /data         — Source of truth for all advocacy content and formatting rules
  /services     — Logic for interacting with Google's AI models
  /utils        — Prompt builders and content formatters
  /components   — Atomic UI components (Sidebar, ContentCard, AIControls)
  App.tsx       — Main application shell and routing logic
  index.css     — Global styles and Tailwind configuration
```

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- A Google AI Studio API Key — get one free at [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)

### 1. Clone & Install

```bash
git clone https://github.com/quillein/shine-suite.git
cd shine-suite
npm install
```

### 2. Environment Configuration

Create a `.env` file in the root directory:

```env
# Required for AI features
GEMINI_API_KEY=your_google_ai_studio_key
```

### 3. Development Mode

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

---

## 📄 License

This project is licensed under the [Apache-2.0 License](LICENSE).

---

*Developed for Shine Advocacy Group — Empowering parents through technology and advocacy.*
