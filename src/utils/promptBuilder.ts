import { Tip } from "../data/content";
import { FORMAT_RULES } from "../data/formats";

export function assembleImagenPrompt(
  content: { headline: string; body?: string; cta?: string },
  formatId: string,
  platform: string = "Instagram",
  variant: "A" | "B" = "A"
): string {
  const format = FORMAT_RULES[formatId];
  if (!format) return "";

  let prompt = format.promptTemplate;

  // Inject content
  prompt += `, headline: '${content.headline.replace(/—/g, '.')}'`;
  if (content.body) {
    prompt += `, caption: '${content.body.replace(/—/g, '.')}'`;
  }
  if (content.cta) {
    prompt += `, CTA: '${content.cta.replace(/—/g, '.')}'`;
  }

  // Brand rules
  prompt += `, SHINEADVOCACY.COM watermark bottom center gold Courier italic`;
  prompt += `, Shine starburst logo top center`;
  prompt += `, professional special education parent advocacy brand`;
  prompt += `, no em dashes in any text`;

  // Platform specs
  if (platform === "TikTok") {
    prompt += `, 1080x1920 vertical format --ar 9:16`;
  } else if (platform === "Instagram" || platform === "Facebook") {
    prompt += `, 1080x1080 square format --ar 1:1`;
  }

  return prompt;
}
