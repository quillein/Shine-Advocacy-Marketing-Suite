import { GoogleGenAI } from "@google/genai";

export class ImagenService {
  private ai: GoogleGenAI | null = null;
  private apiKey: string | null = null;

  constructor() {
    this.apiKey = process.env.GEMINI_API_KEY || localStorage.getItem('shine_api_key');
    if (this.apiKey) {
      this.ai = new GoogleGenAI({ apiKey: this.apiKey });
    }
  }

  setApiKey(key: string) {
    this.apiKey = key;
    this.ai = new GoogleGenAI({ apiKey: key });
    localStorage.setItem('shine_api_key', key);
  }

  async generateImage(prompt: string, aspectRatio: "1:1" | "4:5" | "9:16" = "1:1"): Promise<string> {
    if (!this.ai) {
      throw new Error("API Key not configured. Please add it in Settings.");
    }

    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3.1-flash-image-preview',
        contents: {
          parts: [{ text: prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: aspectRatio === "4:5" ? "3:4" : aspectRatio,
            imageSize: "1K"
          }
        }
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
      throw new Error("No image data received from API.");
    } catch (error: any) {
      console.error("Imagen Error:", error);
      throw new Error(error.message || "Failed to generate image.");
    }
  }
}

export const imagenService = new ImagenService();
