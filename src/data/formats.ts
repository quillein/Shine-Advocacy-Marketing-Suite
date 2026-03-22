export interface VisualFormat {
  id: string;
  name: string;
  bg: string;
  use: string;
  palette: string[];
  typography: string[];
  rules: {
    do: string[];
    dont: string[];
  };
  promptTemplate: string;
}

export const FORMAT_RULES: Record<string, VisualFormat> = {
  "2.1": {
    id: "2.1",
    name: "Cream Flat Design",
    bg: "#F5F0E8",
    use: "MWF tips, carousel body slides",
    palette: ["#F5F0E8", "#CFA012", "#010101"],
    typography: ["Raleway Bold", "PT Serif"],
    rules: {
      do: ["Use line-art icons", "Gold highlights for keywords", "Shine logo top center"],
      dont: ["No photos", "No gradients", "No heavy shadows"]
    },
    promptTemplate: "Flat design educational infographic, cream background #F5F0E8, thin line-art icons black outline, gold text accents #CFA012, parent education advocacy layout, Raleway bold typography, no photographs no gradients, 1080x1080 square format"
  },
  "2.2": {
    id: "2.2",
    name: "Dark Authority",
    bg: "#2A2520",
    use: "Service ads, carousel covers",
    palette: ["#2A2520", "#CFA012", "#D8CF93"],
    typography: ["Raleway ExtraBold", "Caveat"],
    rules: {
      do: ["Organic blob shapes", "Massive gold headline", "Flat illustration"],
      dont: ["No lifestyle photos", "No cream backgrounds", "No cartoon-like blobs"]
    },
    promptTemplate: "Bold dark authority social media graphic, warm dark background #2A2520, oversized gold bold typography, organic warm blob shapes low opacity, Raleway ExtraBold headline, flat design no gradients, 1080x1080 square format"
  },
  "2.3": {
    id: "2.3",
    name: "Warm Photo Overlay",
    bg: "PHOTO",
    use: "IEP meeting prep, checklists, step-by-step guides",
    palette: ["#F5F0E8", "#CFA012", "#010101"],
    typography: ["Raleway Bold", "PT Serif"],
    rules: {
      do: ["Warm desk photography", "Parchment card overlay", "Gold pen props"],
      dont: ["No flat design icons", "No faces", "No color photography (use warm/muted)"]
    },
    promptTemplate: "Overhead flat lay warm beige desk, gold ballpoint pen, spiral notebook, cream sticky notes, laptop corner, warm golden light, no people no faces, academic workspace, muted photograph, 1080x1080 square format"
  },
  "2.4": {
    id: "2.4",
    name: "Camera Viewfinder",
    bg: "PHOTO+UI",
    use: "ADHD day-in-the-life empathy carousels",
    palette: ["#CFA012", "#FFFFFF"],
    typography: ["Raleway ExtraBold", "Caveat"],
    rules: {
      do: ["Real photography", "Camera UI overlay", "Handwritten inner monologue"],
      dont: ["Never show child faces", "No Shine logo", "No clinical settings"]
    },
    promptTemplate: "Child from behind at school desk writing, warm golden afternoon light, cinematic bokeh, candid educational moment, no face visible, warm film aesthetic, 1080x1350 portrait"
  },
  "2.5": {
    id: "2.5",
    name: "Olive Playful Strategy",
    bg: "#C8CC7A",
    use: "BAM Strategy, PDA, EF coaching tips",
    palette: ["#C8CC7A", "#CFA012", "#010101"],
    typography: ["Nunito ExtraBold", "Poppins Bold"],
    rules: {
      do: ["Solid olive background", "Gold sparkle stars in corners", "Rounded pill badge"],
      dont: ["No photos", "No Shine logo", "No other background colors"]
    },
    promptTemplate: "Flat design chartreuse olive green background, four-point gold sparkle star corners, rounded pill badge label top, educational strategy tips, mixed typography black gold gray, no photographs, playful professional design, 1080x1080 square format"
  },
  "2.6": {
    id: "2.6",
    name: "Awareness Minimal",
    bg: "PHOTO_COOL",
    use: "ADHD/Autism Awareness Month, milestones",
    palette: ["#7B7B7B", "#010101"],
    typography: ["Raleway", "PT Serif"],
    rules: {
      do: ["Cool desaturated landscape", "Black Shine logo centered", "Extremely minimal"],
      dont: ["No gold", "No cream backgrounds", "No flat icons"]
    },
    promptTemplate: "Muted cool gray ocean horizon, overcast sky, calm water, desaturated film photography, no people, peaceful contemplative mood, 1080x1080 square format"
  },
  "2.7": {
    id: "2.7",
    name: "AI Art Illustration",
    bg: "AI_DARK",
    use: "Brand statement moments, quarterly maximum",
    palette: ["#010101", "#CFA012", "#185FA5"],
    typography: ["PT Serif Italic"],
    rules: {
      do: ["Van Gogh-style painterly illustration", "Gold quote text", "No CTA"],
      dont: ["Do not overuse", "No resource links", "No flat icons"]
    },
    promptTemplate: "Van Gogh starry night style illustration, glowing lightbulbs with brain patterns inside, swirling dark navy and gold brushstrokes, neurodiversity symbolism, different sized lightbulbs, gold quote typography overlay, 1080x1350 portrait"
  },
  "2.8": {
    id: "2.8",
    name: "Photo Banner Carousel",
    bg: "PHOTO+GOLD_BANNER",
    use: "Accommodation lists, visual resource carousels",
    palette: ["#CFA012", "#D8CF93", "#010101"],
    typography: ["Raleway ExtraBold", "PT Serif"],
    rules: {
      do: ["Full-bleed child photos", "Semi-transparent gold banner", "Faces visible (AI/stock only)"],
      dont: ["No real identifiable children", "No flat opaque gold", "No Q&A content"]
    },
    promptTemplate: "Elementary school girl concentrating at desk with open book, warm natural classroom light, clean portrait, soft bokeh background, authentic educational moment, warm tones, no text, 4:5 portrait 1080x1350"
  },
  "2.9": {
    id: "2.9",
    name: "Tan Desk Pill Cards",
    bg: "#D8CF93+CREAM",
    use: "Resource lists, accommodation categories",
    palette: ["#D8CF93", "#F5F0E8", "#010101"],
    typography: ["Raleway ExtraBold", "PT Serif"],
    rules: {
      do: ["Warm tan/kraft paper desk cover", "Stacked rounded pill cards", "Pencil props"],
      dont: ["No photography on body slides", "No complex icons", "No emotional content"]
    },
    promptTemplate: "Warm tan kraft paper desk flat lay, sharpened pencils mix of wood and black, cream and gold sticky notes, black notebook, soft natural light, organized educational workspace, overhead or slight angle, no people, 1080x1350 portrait"
  },
  "2.10": {
    id: "2.10",
    name: "Olive Split Layout",
    bg: "#C8CC7A+PHOTO",
    use: "Myth-busting, educational awareness, editorial",
    palette: ["#C8CC7A", "#010101", "#CFA012"],
    typography: ["PT Serif Bold", "Raleway ExtraBold"],
    rules: {
      do: ["Left half olive + headline", "Right half warm photo", "Thick black divider"],
      dont: ["No flat design icons", "No camera viewfinder UI", "No cream background"]
    },
    promptTemplate: "Handwritten notebook on warm wooden desk, gold sticky note visible, black pen nearby, warm amber lighting, stationery and journaling aesthetic, no people, 4:5 portrait close-up shot"
  },
  "2.11": {
    id: "2.11",
    name: "Olive Sketch Carousel",
    bg: "#C8CC7A+SKETCH",
    use: "Relatable humor, myth-busting",
    palette: ["#C8CC7A", "#CFA012", "#010101"],
    typography: ["Raleway ExtraBold", "PT Serif"],
    rules: {
      do: ["Drawn tablet outline", "Doodle sun/clouds", "Stick figure children"],
      dont: ["No real photography", "No camera viewfinder UI", "No polished flat icons"]
    },
    promptTemplate: "Hand-drawn tablet device outline in sketch style, olive chartreuse background, doodle sun gold corner, rough crayon cloud sketches, simple stick figure children with gold accents, 4-point star sparkles gold and black, playful children educational illustration, 1080x1080 square format"
  }
};
