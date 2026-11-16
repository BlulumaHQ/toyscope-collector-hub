import { createFileRoute } from "@tanstack/react-router";
import { TextPage } from "@/components/site";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support — ToyScope" },
      { name: "description", content: "ToyScope Support. Questions? hello@toyscope.app" },
      { property: "og:title", content: "Support — ToyScope" },
      { property: "og:description", content: "ToyScope Support." },
      { property: "og:url", content: `${SITE_URL}/support` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/support` }],
  }),
  component: () => <TextPage page="support" />,
});
