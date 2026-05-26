import { createFileRoute } from "@tanstack/react-router";
import { MeshBackdrop } from "@/components/site/MeshBackdrop";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Organizacao } from "@/components/site/Organizacao";
import { Sobre } from "@/components/site/Sobre";
import { Cronograma } from "@/components/site/Cronograma";
import { FAQ } from "@/components/site/FAQ";
import { Patrocinadores } from "@/components/site/Patrocinadores";
import { Footer } from "@/components/site/Footer";

const title = "Vibe Hack Queer";
const description = "Hackathon de vibe coding para a comunidade LGBTQIAPN+.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Vibe Hack Queer",
          startDate: "2026-11-14T18:00:00-03:00",
          endDate: "2026-11-16T20:00:00-03:00",
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: {
            "@type": "Place",
            name: "CIn UFPE",
            address: "Recife, PE — Brasil",
          },
          description,
        }),
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <MeshBackdrop />
      <Nav />
      <main>
        <Hero />
        <Organizacao />
        <Sobre />
        <Cronograma />
        <FAQ />
        <Patrocinadores />
      </main>
      <Footer />
    </div>
  );
}
