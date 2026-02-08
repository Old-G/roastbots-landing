const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3003";

export async function fetchFromApp<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${APP_URL}${path}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return res.json() as Promise<T>;
  } catch {
    return null;
  }
}
