import { createFileRoute } from "@tanstack/react-router";
import { TextPage } from "@/components/site";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/refunds")({
  head: () => ({
    meta: [
      { title: "Refund Policy — ToyScope" },
      { name: "description", content: "ToyScope Refund Policy. Questions? support@toyscope.app" },
      { property: "og:title", content: "Refund Policy — ToyScope" },
      { property: "og:description", content: "ToyScope Refund Policy." },
      { property: "og:url", content: `${SITE_URL}/refunds` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/refunds` }],
  }),
  component: () => <TextPage page="refunds" />,
});
