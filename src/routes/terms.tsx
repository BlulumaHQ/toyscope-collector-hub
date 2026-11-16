import { createFileRoute } from "@tanstack/react-router";
import { TextPage } from "@/components/site";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — ToyScope" },
      { name: "description", content: "ToyScope Terms. Questions? hello@toyscope.app" },
      { property: "og:title", content: "Terms — ToyScope" },
      { property: "og:description", content: "ToyScope Terms." },
      { property: "og:url", content: `${SITE_URL}/terms` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/terms` }],
  }),
  component: () => <TextPage title="Terms" />,
});
