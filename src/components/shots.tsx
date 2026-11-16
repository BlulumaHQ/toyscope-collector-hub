import { useEffect, useRef, useState } from "react";
import { PhoneMockup } from "@/components/site";

type Shot = { img: string; alt: string; title: string; text: string };

// Desktop: a plain row that scrolls. Mobile: an endless loop with the next and previous phones peeking in,
// page dots and an animated swipe hint.
export function ShotCarousel({ shots, swipeLabel }: { shots: Shot[]; swipeLabel: string }) {
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const n = shots.length;

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const on = () => setMobile(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  const step = () => {
    const el = ref.current;
    const a = el?.children[0] as HTMLElement | undefined;
    const b = el?.children[1] as HTMLElement | undefined;
    return a && b ? b.offsetLeft - a.offsetLeft : 1;
  };
  const go = (idx: number, smooth = true) => {
    const el = ref.current;
    if (!el) return;
    el.scrollTo({ left: idx * step(), behavior: smooth ? "smooth" : "auto" });
  };

  // Start on the first phone of the middle copy so there is always something on both sides
  useEffect(() => {
    if (!mobile) return;
    requestAnimationFrame(() => go(n, false));
  }, [mobile, n]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !mobile) return;
    let t: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      const s = step();
      const idx = Math.round(el.scrollLeft / s);
      setActive(((idx % n) + n) % n);
      clearTimeout(t);
      t = setTimeout(() => {
        const i = Math.round(el.scrollLeft / s);
        if (i < n) go(i + n, false);
        else if (i >= 2 * n) go(i - n, false);
      }, 140);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => { el.removeEventListener("scroll", onScroll); clearTimeout(t); };
  }, [mobile, n]);

  const list = mobile ? [...shots, ...shots, ...shots] : shots;
  return (
    <div>
      <div className={mobile ? "screens loop" : "screens"} ref={ref}>
        {list.map((s, k) => (
          <div className="shot" key={k} aria-hidden={mobile && (k < n || k >= 2 * n) ? true : undefined}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><h3>{s.title}</h3><p>{s.text}</p></div>
            <PhoneMockup small width={250} src={`/images/app/${s.img}.jpg`} alt={s.alt} />
          </div>
        ))}
      </div>
      {mobile && (
        <div className="shotnav">
          <div className="dots" role="tablist">
            {shots.map((s, i) => (
              <button key={s.img} className={i === active ? "on" : ""} aria-label={s.title} onClick={() => go(n + i)} />
            ))}
          </div>
          <div className="swipehint" aria-hidden="true"><span className="ar l">‹</span>{swipeLabel.replace(/\s*→\s*$/, "")}<span className="ar r">›</span></div>
        </div>
      )}
    </div>
  );
}
