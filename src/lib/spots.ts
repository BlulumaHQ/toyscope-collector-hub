import { useEffect, useState } from "react";

const SB_URL = "https://deknzrajghaatahmdrwn.supabase.co";
// Publishable (public) key, same one the app ships with. Read-only access to founding_spots().
const SB_KEY = "sb_publishable_xOp7aSByxfPuyojXVo6-kg_F-aF4MB0";

export type Spots = { lifetime: number; founding: number };
// Shown until the live numbers arrive (server render and first paint)
const FALLBACK: Spots = { lifetime: 17, founding: 180 };
let cache: Spots | null = null;
let pending: Promise<Spots | null> | null = null;

function load(): Promise<Spots | null> {
  if (!pending) {
    pending = fetch(`${SB_URL}/rest/v1/rpc/founding_spots`, {
      method: "POST",
      headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}`, "Content-Type": "application/json" },
      body: "{}",
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        const v = d && (d.founding_spots ?? d);
        if (v && typeof v.lifetime_left === "number") cache = { lifetime: Math.max(0, v.lifetime_left), founding: Math.max(0, v.founding_left) };
        return cache;
      })
      .catch(() => null);
  }
  return pending;
}

export function useSpots(): Spots {
  const [s, setS] = useState<Spots>(cache ?? FALLBACK);
  useEffect(() => {
    let live = true;
    load().then((v) => { if (v && live) setS(v); });
    return () => { live = false; };
  }, []);
  return s;
}

export const fill = (str: string, n: number) => str.replace("{n}", String(n));
