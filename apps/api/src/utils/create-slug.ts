export function createSlug(text: string): string {
  return text
    .normalize('NFD') // decompose accents
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/[^a-zA-Z0-9\s-]/g, '') // remove symbols
    .trim() // trim spaces
    .replace(/\s+/g, '-') // spaces to hyphens
    .replace(/-+/g, '-') // collapse multiple hyphens
    .toLowerCase() // lowercase
}
