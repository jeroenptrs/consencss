const cache = new Set<string>();

export const has = (k: string) => cache.has(k);
export const add = (c: string) => cache.add(c);
