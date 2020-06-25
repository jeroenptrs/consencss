const cache = new Set<string>();

export const has = (c: string) => cache.has(c);
export const add = (c: string) => cache.add(c);
export const size = () => cache.size;
