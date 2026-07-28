const HEX_SHORTHAND = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
const HEX_FULL = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const normalized = hex.replace(HEX_SHORTHAND, (_m, r, g, b) => r + r + g + g + b + b);
  const match = HEX_FULL.exec(normalized);
  if (!match) {
    throw new Error(`Invalid hex color: ${hex}`);
  }
  return {
    r: parseInt(match[1], 16),
    g: parseInt(match[2], 16),
    b: parseInt(match[3], 16),
  };
}

export function hexToRgba(hex: string, alpha: number): string {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const RGBA_PATTERN = /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)$/i;

export function rgbaToRgb(
  rgba: string,
  background: { r: number; g: number; b: number } = { r: 255, g: 255, b: 255 },
): string {
  const match = RGBA_PATTERN.exec(rgba);
  if (!match) {
    return rgba;
  }
  const [, r, g, b, a] = match;
  const alpha = a === undefined ? 1 : parseFloat(a);
  const blend = (channel: number, bg: number) => Math.round(channel * alpha + bg * (1 - alpha));
  return `rgb(${blend(parseFloat(r), background.r)}, ${blend(parseFloat(g), background.g)}, ${blend(parseFloat(b), background.b)})`;
}
