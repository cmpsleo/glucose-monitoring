export function makeApiUrl(path: string): string {
  return `${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`;
}
