export const sanitizeValue = (v: any) =>
  typeof v === "string" ? v.replace(/[^a-zA-Z0-9-_]+/g, "-") : v;
