// IKIGAI KAI WEBSITE — ENGLISH + PORTUGUESE / DONOR & PARTNERSHIP READY

import { useMemo, useState } from "react";

export default function IkigaiKaiWebsite() {
  const [page, setPage] = useState("home");

  if (typeof document !== "undefined") {
    const id = "ikigai-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.href =
        "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
  }

  const pages = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "impact", label: "Impact" },
      { id: "partners", label: "Partners" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const navClass = (id) =>
    `rounded-full px-4 py-2 text-sm transition ${
      page === id
        ? "bg-gradient-to-r from-sky-500 to-emerald-400 text-slate-950 shadow-sm"
        : "bg-white/85 text-slate-700 border border-slate-200 hover:bg-sky-50"
    }`;

  const PageIntro = ({ eyebrow, title, en, pt }) => (
    <div className="max-w-4xl">
      <p className="text-sm uppercase tracking-[0.18em] text-sky-600">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-6 text-lg leading-8 text-slate-600">{en}</p>
      <p className="mt-4 text-base leading-8 text-slate-500">{pt}</p>
    </div>
  );

  const LegalFooter = () => (
    <div className="border-t border-slate-200 bg-white/90">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          IKIGAI KAI — Avenida da República, n.º 6, 8.º Esq, 1050-191 Lisboa, Portugal — NIPC / Registration No. 518854213
        </div>
        <div>Charity • Sustainable Energy • Communities • Culture & Heritage</div>
      </div>
    </div>
  );

  return (
    <div
      className="min-h-screen bg-[linear-gradient(180deg,#f0f9ff_0%,#f7fcfb_42%,#f1f5f9_100%)] text-slate-900"
      style={{
        fontFamily:
          "'Inter', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-10">
          <button onClick={() => setPage("home")} className="text-left">
            <div className="text-xs uppercase tracking-[0.25em] text-sky-700">IKIGAI KAI</div>
            <div className="text-sm text-slate-600">Charity • Energia • Comunidade</div>
          </button>

          <nav className="flex flex-wrap gap-2">
            {pages.map((item) => (
              <button key={item.id} onClick={() => setPage(item.id)} className={navClass(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {page === "home" && (
        <>
          <section className="relative overflow-hidden border-b border-slate-200/80 bg-[linear-gradient(135deg,#ffffff_0%,#e0f2fe_48%,#ecfdf5_100%)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(16,185,129,0.14),transparent_26%)]" />

            <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10">
              <div>
                <div className="mb-5 inline-flex rounded-full border border-sky-200 bg-white/70 px-4 py-1 text-sm text-sky-700">
                  Sustainable Energy • Community Relief • Cultural Continuity
                </div>

                <h1 className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
                  IKIGAI KAI
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  IKIGAI KAI is a Lisbon-based charity focused on sustainable energy, community support, and long-term public benefit.
                </p>

                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
                  A IKIGAI KAI é uma associação sediada em Lisboa focada em energia sustentável, apoio às comunidades e benefício público de longo prazo.
                </p>

                <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
                  We help reduce energy costs in community buildings, support the adoption of renewable energy, and create projects that allow more resources to flow back into education, wellbeing, and local development.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    onClick={() => setPage("partners")}
                    className="rounded-xl bg-gradient-to-r from-sky-500 to-emerald-400 px-6 py-3 text-white shadow-lg shadow-sky-200/70"
                  >
                    Partner With Us
                  </button>
                  <button
                    onClick={() => setPage("about")}
                    className="rounded-xl border border-slate-200 bg-white/80 px-6 py-3 text-slate-700"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              <div className="rounded-[2rem] border border-sky-100 bg-[linear-gradient(145deg,#0f172a_0%,#0369a1_48%,#10b981_100%)] p-8 text-white shadow-xl shadow-sky-200/40">
                <h3 className="text-xl font-semibold">What the charity does</h3>
                <div className="mt-6 space-y-4 text-slate-100/90">
                  <p><b>Supports communities</b> through practical, cost-reducing energy solutions.</p>
                  <p><b>Promotes renewable energy</b> by encouraging the use of solar systems and cleaner infrastructure.</p>
                  <p><b>Relieves financial pressure</b> so schools and community-led spaces can redirect funds into essential services.</p>
                  <p><b>Protects continuity and identity</b> through projects connected to local culture and heritage.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <PageIntro
              eyebrow="Purpose"
              title="Clear, practical and easy to understand"
              en="IKIGAI KAI exists to support communities by lowering energy costs, improving environmental outcomes, and creating more capacity for local investment in people and places."
              pt="A IKIGAI KAI existe para apoiar comunidades, reduzindo custos energéticos, melhorando resultados ambientais e criando maior capacidade de investimento local nas pessoas e nos territórios."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm shadow-slate-200/40">
                <div className="text-3xl">☀️</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">Sustainable Energy</h3>
                <p className="mt-3 text-slate-600">
                  Solar and related renewable systems can reduce energy bills, strengthen resilience, and support a lower-carbon future.
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm shadow-slate-200/40">
                <div className="text-3xl">🏫</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">Community Benefit</h3>
                <p className="mt-3 text-slate-600">
                  Lower operating costs help community-led organisations redirect savings into education, welfare, care, and local services.
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm shadow-slate-200/40">
                <div className="text-3xl">🏛️</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">Culture & Heritage</h3>
                <p className="mt-3 text-slate-600">
                  Projects can also support the continuity, identity, and long-term value of local places and communities.
                </p>
              </div>
            </div>
          </section>

          <section className="border-y border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900">Why this matters</h2>
                <p className="mt-6 text-lg text-slate-600">
                  Rising energy costs reduce what community buildings can spend on the people they serve.
                </p>
                <p className="mt-4 text-slate-600">
                  By improving energy efficiency and supporting renewable energy adoption, more money can remain available for essential services, local development, and community wellbeing.
                </p>
                <p className="mt-4 text-slate-500">
                  Em português: ao reduzir despesas energéticas e promover energia renovável, sobra mais capacidade financeira para investir em educação, apoio social e desenvolvimento comunitário.
                </p>
              </div>

              <div className="rounded-[2rem] border border-emerald-100 bg-[linear-gradient(180deg,#f0fdf4_0%,#f0f9ff_100%)] p-8">
                <ul className="space-y-3 text-slate-700">
                  <li className="rounded-2xl bg-white/80 p-4 ring-1 ring-slate-200">Lower energy costs</li>
                  <li className="rounded-2xl bg-white/80 p-4 ring-1 ring-slate-200">Reduced carbon emissions</li>
                  <li className="rounded-2xl bg-white/80 p-4 ring-1 ring-slate-200">Greater financial relief for communities</li>
                  <li className="rounded-2xl bg-white/80 p-4 ring-1 ring-slate-200">Better capacity for education and local support services</li>
                </ul>
              </div>
            </div>
          </section>
        </>
      )}

      {page === "about" && (
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <PageIntro
            eyebrow="About IKIGAI KAI"
            title="A Lisbon-based non-profit association"
            en="IKIGAI KAI is a non-profit association established for an indefinite duration and based in Lisbon, Portugal. Its core charitable purpose is community development through sustainable energy solutions, especially solar technology for community buildings."
            pt="A IKIGAI KAI é uma associação sem fins lucrativos, constituída por tempo indeterminado e sediada em Lisboa, Portugal. O seu objetivo principal é o desenvolvimento comunitário através de soluções energéticas sustentáveis, em especial tecnologia solar para edifícios comunitários."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm shadow-slate-200/40">
              <h3 className="text-xl font-semibold text-slate-900">Our charitable aims</h3>
              <div className="mt-6 space-y-4 text-slate-600">
                <p>Promote community development through sustainable energy solutions.</p>
                <p>Support environmental protection by encouraging renewable energy use, especially solar energy.</p>
                <p>Relieve financial pressures on communities through cost-effective energy solutions.</p>
                <p>Help community-managed buildings redirect savings into other essential services and development initiatives.</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-sky-100 bg-[linear-gradient(145deg,#082f49_0%,#0ea5e9_54%,#34d399_100%)] p-8 text-white shadow-xl shadow-sky-200/40">
              <div className="text-sm uppercase tracking-wide text-sky-100">Simple explanation</div>
              <div className="mt-6 space-y-5">
                <div>
                  <div className="text-2xl font-semibold">English</div>
                  <p className="mt-2 text-slate-100/85">
                    We help communities spend less on energy, use cleaner energy, and keep more money available for people and services.
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-semibold">Português</div>
                  <p className="mt-2 text-slate-100/85">
                    Ajudamos comunidades a gastar menos em energia, usar energia mais limpa e manter mais recursos disponíveis para as pessoas e para os serviços locais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {page === "impact" && (
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <PageIntro
            eyebrow="Impact"
            title="How support can translate into real outcomes"
            en="IKIGAI KAI is structured to create visible, practical outcomes. Support can help identify suitable community buildings, assess energy needs, introduce sustainable energy solutions, and create long-term social and environmental value."
            pt="A IKIGAI KAI está estruturada para gerar resultados visíveis e práticos. O apoio pode ajudar a identificar edifícios comunitários adequados, avaliar necessidades energéticas, introduzir soluções sustentáveis e criar valor social e ambiental de longo prazo."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm shadow-slate-200/40">
              <h3 className="text-xl font-semibold text-slate-900">Environmental</h3>
              <p className="mt-4 text-slate-600">
                Renewable energy projects can lower dependence on non-renewable sources and contribute to carbon reduction goals.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm shadow-slate-200/40">
              <h3 className="text-xl font-semibold text-slate-900">Financial</h3>
              <p className="mt-4 text-slate-600">
                Lower energy expenses can allow communities to redirect funds into education, social support, maintenance, and future development.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm shadow-slate-200/40">
              <h3 className="text-xl font-semibold text-slate-900">Community</h3>
              <p className="mt-4 text-slate-600">
                Stronger buildings, lower operating pressures, and better use of local resources can create wider long-term benefit.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] border border-emerald-100 bg-[linear-gradient(180deg,#f0fdf4_0%,#eff6ff_100%)] p-8">
            <h3 className="text-2xl font-semibold text-slate-900">How support works</h3>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              <div>
                <div className="text-sm font-medium text-sky-600">01</div>
                <p className="mt-2 text-slate-700"><b>Identify & assess</b> suitable community buildings and needs.</p>
              </div>
              <div>
                <div className="text-sm font-medium text-sky-600">02</div>
                <p className="mt-2 text-slate-700"><b>Support implementation</b> of practical sustainable energy solutions.</p>
              </div>
              <div>
                <div className="text-sm font-medium text-sky-600">03</div>
                <p className="mt-2 text-slate-700"><b>Create long-term relief</b> through lower costs and stronger community capacity.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {page === "partners" && (
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <PageIntro
            eyebrow="Partners & Supporters"
            title="Structured for donors, CSR partnerships, and aligned supporters"
            en="IKIGAI KAI is designed to be easy to understand for donors, corporate partners, and supporters. The aim is simple: turn financial support into projects with measurable environmental and social benefit."
            pt="A IKIGAI KAI foi pensada para ser facilmente compreendida por doadores, parceiros corporativos e apoiantes. O objetivo é simples: transformar apoio financeiro em projetos com benefício ambiental e social mensurável."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm shadow-slate-200/40">
              <h3 className="text-xl font-semibold text-slate-900">Why partner with IKIGAI KAI</h3>
              <ul className="mt-6 space-y-4 text-slate-600">
                <li className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">Clear charitable mission and legal structure</li>
                <li className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">Direct environmental and community relevance</li>
                <li className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">Strong alignment with CSR and sustainability objectives</li>
                <li className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">Potential for visible, practical, long-term impact</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-sky-100 bg-[linear-gradient(145deg,#082f49_0%,#0284c7_56%,#22c55e_100%)] p-8 text-white shadow-xl shadow-sky-200/40">
              <div className="text-sm uppercase tracking-wide text-sky-100">Partnership types</div>
              <div className="mt-6 space-y-5 text-slate-100/90">
                <p><b>Corporate Support</b> — CSR-aligned funding and sustainability partnerships.</p>
                <p><b>Foundational Giving</b> — donations that help establish and deliver charitable projects.</p>
                <p><b>Strategic Collaboration</b> — aligned organisations, specialists, and supporters contributing expertise or resources.</p>
                <p><b>Recognition Opportunities</b> — impact reporting, acknowledgement, and long-term association with visible positive outcomes.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm shadow-slate-200/40">
            <h3 className="text-2xl font-semibold text-slate-900">What partners help make possible</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-3 text-slate-600">
              <div>
                <p className="font-medium text-slate-900">Energy relief</p>
                <p className="mt-2">Reducing costs for community-managed buildings.</p>
              </div>
              <div>
                <p className="font-medium text-slate-900">Environmental progress</p>
                <p className="mt-2">Supporting renewable energy and lower emissions.</p>
              </div>
              <div>
                <p className="font-medium text-slate-900">Stronger communities</p>
                <p className="mt-2">Helping preserve capacity for education, social support, and local development.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {page === "contact" && (
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <PageIntro
                eyebrow="Contact"
                title="Start a conversation"
                en="If you are a donor, corporate partner, advisor, or community organisation interested in working with IKIGAI KAI, we welcome conversations around aligned support and partnership."
                pt="Se é doador, parceiro corporativo, consultor ou organização comunitária interessada em colaborar com a IKIGAI KAI, teremos todo o gosto em conversar sobre apoio e parcerias alinhadas com a nossa missão."
              />
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-10 shadow-sm shadow-slate-200/40">
              <div className="space-y-5 text-slate-700">
                <div>
                  <div className="text-sm uppercase tracking-wide text-sky-600">Email</div>
                  <div className="mt-1 text-lg font-medium">hello@ikigaikai.org</div>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wide text-sky-600">Address</div>
                  <div className="mt-1 text-lg font-medium">Avenida da República, n.º 6, 8.º Esq, 1050-191 Lisboa, Portugal</div>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wide text-sky-600">Registration</div>
                  <div className="mt-1 text-lg font-medium">NIPC / Registration No. 518854213</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <LegalFooter />
    </div>
  );
}
