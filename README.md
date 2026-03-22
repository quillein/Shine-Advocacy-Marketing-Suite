Shine Suite
Shine Suite is a premium, AI-powered marketing and advocacy content management system designed specifically for the Shine Advocacy Group. It streamlines the creation, formatting, and scheduling of high-impact social media content for special education advocacy.
🚀 Key Features
🤖 AI-Powered Content Creation
Gemini Integration: Leverage Google's advanced language models to generate compelling marketing copy, hooks, and captions.
Imagen Visuals: Create high-quality, on-brand social media visuals directly within the suite using AI image generation.
📊 Comprehensive Content Management
Advocacy Tips: Manage a library of foundations-of-advocacy tips with scheduled dates and persona targeting.
Educational Carousels: Build multi-slide educational carousels (e.g., "What is an IEP?") with SEO-optimized queries and keywords.
Engagement Q&As: Draft interactive Q&A posts with specific engagement hooks and platform-specific CTAs (Facebook vs. Instagram).
🎨 Premium Editorial Interface
Shine Aesthetic: A sophisticated "Black & Gold" design language that reflects the premium nature of the advocacy group.
Fluid Motion: Smooth transitions and entrance animations powered by motion for a modern, high-end feel.
Responsive Dashboard: A fully responsive sidebar-driven layout optimized for both desktop and mobile workflows.
🛠️ Format & Resource Optimization
Smart Formatting: Built-in rules for various social media aspect ratios (Square 1:1, Portrait 4:5, Story 9:16).
Resource Linking: Integrated access to the "Free Evaluation Guide," "IEP Cheat Sheet," and the "Shine Bright Community."
💻 Tech Stack
Technology	Description
React 19	The latest version of React for building a fast, component-based UI.
Vite 6	Next-generation frontend tooling for lightning-fast development and builds.
TypeScript 5.8	Static typing for enhanced developer experience and code reliability.
Tailwind CSS 4	Utility-first CSS framework for rapid, custom styling.
Motion	Modern animation library (formerly Framer Motion) for high-performance UI transitions.
Lucide React	A beautiful, consistent icon set for modern web applications.
Google GenAI SDK	Official SDK for integrating Gemini and Imagen AI capabilities.
📁 Project Structure
code
Text
/src
  /components  - Reusable UI components (Buttons, Cards, Modals)
  /services    - AI integration logic (Imagen, Gemini)
  /data        - Content libraries (Tips, Carousels, Q&As)
  /utils       - Helper functions (Prompt builders, Formatters)
  App.tsx      - Main application shell and routing logic
  index.css    - Global styles and Tailwind configuration
🛠️ Getting Started
Prerequisites
Node.js (v18 or higher)
A Google AI Studio API Key (for Gemini/Imagen features)
Installation
Clone the repository.
Install dependencies:
code
Bash
npm install
Create a .env file in the root directory and add your API key:
code
Env
GEMINI_API_KEY=your_api_key_here
Start the development server:
code
Bash
npm run dev
📄 License
This project is licensed under the Apache-2.0 License.
Developed for Shine Advocacy Group to empower parents and advocates through technology.
