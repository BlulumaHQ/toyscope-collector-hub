import { createFileRoute } from "@tanstack/react-router";
import { TextPage } from "@/components/site";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — ToyScope" },
      { name: "description", content: "ToyScope Privacy. Questions? support@toyscope.app" },
      { property: "og:title", content: "Privacy — ToyScope" },
      { property: "og:description", content: "ToyScope Privacy." },
      { property: "og:url", content: `${SITE_URL}/privacy` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy` }],
  }),
  component: () => <TextPage page="privacy" />,
});
