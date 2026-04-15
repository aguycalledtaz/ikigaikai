import { useMemo, useState } from "react";

export default function IkigaiKaiWebsite() {
  const [page, setPage] = useState("home");

  const pages = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "projects", label: "Projects" },
      { id: "schools", label: "For Schools" },
      { id: "donors", label: "For Donors" },
      { id: "culture", label: "Culture & Heritage" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const pillars = [
    {
      title: "Schools & Communities",
      text: "Supporting schools and communities with funding, infrastructure, and long-term development.",
      icon: "🏫",
    },
    {
      title: "Green Energy Systems",
      text: "Solar, battery storage, and EV infrastructure to reduce costs and create sustainable energy.",
      icon: "☀️",
    },
    {
      title: "Culture & Heritage",
      text: "Protecting and supporting cultural identity through meaningful community-led projects.",
      icon: "🏛️",
    },
  ];

  const steps = [
    {
      title: "Identify Need",
      text: "We work with schools and communities to understand real needs — funding, energy, or infrastructure.",
    },
    {
      title: "Structure Project",
      text: "We design a solution combining funding with green technologies such as solar and battery systems.",
    },
    {
      title: "Fund & Deploy",
      text: "Donors and partners support projects that are implemented with clear structure and transparency.",
    },
    {
      title: "Long-Term Impact",
      text: "Projects reduce costs, generate energy, and create lasting community value.",
    },
  ];

  const projectCards = [
    {
      title: "School Energy Upgrade",
      text: "Solar, battery storage, and EV-ready infrastructure deployed to reduce operating costs and improve resilience.",
    },
    {
      title: "Community Energy Hub",
      text: "Shared infrastructure supporting local communities with cleaner power, access, and long-term sustainability.",
    },
    {
      title: "Culture & Heritage Support",
      text: "Projects that preserve local identity while improving spaces through sustainable design and responsible funding.",
    },
  ];

  const donorPoints = [
    "Clear project structure and purpose",
    "Visible real-world outcomes",
    "Long-term social and infrastructure value",
    "Potential to support schools, communities, and heritage together",
  ];

  const schoolPoints = [
    "Lower operational energy costs",
    "Improved resilience and future-readiness",
    "Infrastructure that supports education and community use",
    "A practical path to sustainability without short-term thinking",
  ];

  const NavButton = ({ id, label }) => (
    <button
      onClick={() => setPage(id)}
      className={`rounded-full px-4 py-2 text-sm transition ${
        page === id
          ? "bg-gradient-to-r from-sky-500 to-emerald-400 text-slate-950 shadow-sm"
          : "bg-white/85 text-slate-700 border border-slate-200 hover:bg-sky-50"
      }`}
    >
      {label}
    </button>
  );

  const SectionIntro = ({ eyebrow, title, text }) => (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.18em] text-sky-600">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl text-slate-900">{title}</h2>
      <p className="mt-6 text-lg leading-8 text-slate-600">{text}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f0f9ff_0%,#f7fcfb_42%,#f1f5f9_100%)] text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-10">
          <button onClick={() => setPage("home")} className="text-left">
            <div className="text-xs uppercase tracking-[0.25em] text-sky-700">IKIGAI KAI</div>
            <div className="text-sm text-slate-600">Schools • Energy • Community Impact</div>
          </button>

          <nav className="flex flex-wrap gap-2">
            {pages.map((item) => (
              <NavButton key={item.id} id={item.id} label={item.label} />
            ))}
          </nav>
        </div>
      </header>

      {page === "home" && (
        <>
          <section className="relative overflow-hidden border-b border-slate-200/80 bg-[linear-gradient(135deg,#ffffff_0%,#e0f2fe_48%,#ecfdf5_100%)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(16,185,129,0.14),transparent_26%)]" />

            <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="mb-5 inline-flex rounded-full border border-sky-200 bg-white/70 px-4 py-1 text-sm text-sky-700">
                    Schools • Energy • Community Impact
                  </div>

                  <h1 className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
                    IKIGAI KAI
                  </h1>

                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                    Supporting schools and communities through funding, green technology, and long-term impact.
                  </p>

                  <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                    We combine donations with real infrastructure — solar energy, battery storage, and EV systems — to create sustainable projects that reduce costs and benefit communities.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <button
                      onClick={() => setPage("contact")}
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
                  <h3 className="text-xl font-semibold">Core Focus</h3>
                  <div className="mt-6 space-y-4 text-slate-100/90">
                    <p><b>Schools</b> – Infrastructure & support</p>
                    <p><b>Energy</b> – Solar, battery, EV systems</p>
                    <p><b>Impact</b> – Lower costs & community value</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <SectionIntro
              eyebrow="Mission"
              title="Turning funding into real-world impact"
              text="We connect funding with real infrastructure to create long-term value."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm shadow-slate-200/50">
                  <div className="text-3xl">{p.icon}</div>
                  <h3 className="mt-4 font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-slate-600">{p.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="border-y border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900">Why this matters</h2>
                <p className="mt-6 text-lg text-slate-600">
                  Schools face rising costs and limited funding. At the same time, energy systems are evolving.
                </p>
                <p className="mt-4 text-slate-600">
                  By combining funding with solar energy, battery storage, and EV infrastructure, we create long-term solutions rather than short-term donations.
                </p>
              </div>

              <div className="rounded-[2rem] border border-emerald-100 bg-[linear-gradient(180deg,#f0fdf4_0%,#f0f9ff_100%)] p-8">
                <ul className="space-y-3 text-slate-700">
                  <li className="rounded-2xl bg-white/80 p-4 ring-1 ring-slate-200">Lower costs</li>
                  <li className="rounded-2xl bg-white/80 p-4 ring-1 ring-slate-200">Renewable energy</li>
                  <li className="rounded-2xl bg-white/80 p-4 ring-1 ring-slate-200">Energy resilience</li>
                  <li className="rounded-2xl bg-white/80 p-4 ring-1 ring-slate-200">Community growth</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <h2 className="text-3xl font-semibold text-slate-900">How It Works</h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((s, i) => (
                <div key={s.title} className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/40">
                  <div className="text-sm font-medium text-sky-600">0{i + 1}</div>
                  <h3 className="mt-2 font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.text}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {page === "about" && (
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <SectionIntro
            eyebrow="About"
            title="A platform designed to connect capital, infrastructure, and community outcomes."
            text="IKIGAI KAI is built around a simple idea: funding should do more than fill a short-term gap. It should help create systems that lower costs, improve resilience, strengthen places, and produce long-term public value."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm shadow-slate-200/40">
              <h3 className="text-xl font-semibold text-slate-900">What we stand for</h3>
              <div className="mt-6 space-y-4 text-slate-600">
                <p>Structured, transparent projects</p>
                <p>Long-term thinking rather than one-off giving</p>
                <p>Practical sustainability through real infrastructure</p>
                <p>Support for communities, education, and cultural identity</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-sky-100 bg-[linear-gradient(145deg,#082f49_0%,#0ea5e9_54%,#34d399_100%)] p-8 text-white shadow-xl shadow-sky-200/40">
              <div className="text-sm uppercase tracking-wide text-sky-100">Approach</div>
              <div className="mt-6 space-y-5">
                <div>
                  <div className="text-2xl font-semibold">Practical</div>
                  <p className="mt-2 text-slate-100/85">Focused on deployable, understandable projects.</p>
                </div>
                <div>
                  <div className="text-2xl font-semibold">Responsible</div>
                  <p className="mt-2 text-slate-100/85">Designed for accountability and trust.</p>
                </div>
                <div>
                  <div className="text-2xl font-semibold">Scalable</div>
                  <p className="mt-2 text-slate-100/85">Built so one successful model can be repeated elsewhere.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {page === "projects" && (
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <SectionIntro
            eyebrow="Projects"
            title="Projects designed for visible, measurable impact."
            text="Each project is structured to connect funding with a clearly defined output — whether that is lower energy costs, better resilience, improved community use, or support for heritage and place-making."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projectCards.map((project) => (
              <div key={project.title} className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm shadow-slate-200/40">
                <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-4 text-slate-600">{project.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-emerald-100 bg-[linear-gradient(180deg,#f0fdf4_0%,#eff6ff_100%)] p-8">
            <h3 className="text-2xl font-semibold text-slate-900">Project model</h3>
            <p className="mt-4 max-w-3xl text-slate-600">
              A school or community site becomes the anchor point. Funding is directed into practical infrastructure such as solar, battery storage, or site upgrades. The result is a project that serves both immediate local needs and wider long-term value.
            </p>
          </div>
        </section>
      )}

      {page === "schools" && (
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <SectionIntro
            eyebrow="For Schools"
            title="Support that helps schools do more with less pressure."
            text="Schools need solutions that are practical, credible, and long-term. IKIGAI KAI helps create projects that can improve energy performance, reduce costs, and strengthen the wider role a school plays in its community."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm shadow-slate-200/40">
              <h3 className="text-xl font-semibold text-slate-900">What schools gain</h3>
              <div className="mt-6 space-y-4 text-slate-600">
                {schoolPoints.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-emerald-100 bg-[linear-gradient(180deg,#f0fdf4_0%,#f0f9ff_100%)] p-8">
              <h3 className="text-xl font-semibold text-slate-900">Ideal for</h3>
              <div className="mt-6 space-y-3 text-slate-700">
                <div className="rounded-2xl bg-white/85 p-4 ring-1 ring-slate-200">Primary and secondary schools</div>
                <div className="rounded-2xl bg-white/85 p-4 ring-1 ring-slate-200">Sites with rising energy costs</div>
                <div className="rounded-2xl bg-white/85 p-4 ring-1 ring-slate-200">Community-linked education facilities</div>
                <div className="rounded-2xl bg-white/85 p-4 ring-1 ring-slate-200">Schools seeking sustainability-led improvements</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {page === "donors" && (
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <SectionIntro
            eyebrow="For Donors"
            title="Support projects with substance, clarity, and long-term value."
            text="IKIGAI KAI is designed for donors who want their support to be structured, practical, and visible. The focus is not only on helping a cause, but on helping build systems that continue to create value after the initial contribution."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm shadow-slate-200/40">
              <h3 className="text-xl font-semibold text-slate-900">Why donors engage</h3>
              <ul className="mt-6 space-y-4 text-slate-600">
                {donorPoints.map((item) => (
                  <li key={item} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-sky-100 bg-[linear-gradient(145deg,#082f49_0%,#0284c7_56%,#22c55e_100%)] p-8 text-white shadow-xl shadow-sky-200/40">
              <div className="text-sm uppercase tracking-wide text-sky-100">Donor Perspective</div>
              <h3 className="mt-4 text-2xl font-semibold">More than a donation</h3>
              <p className="mt-4 text-slate-100/85">
                Contributions help create energy savings, community benefit, and durable infrastructure rather than one-time activity alone.
              </p>
            </div>
          </div>
        </section>
      )}

      {page === "culture" && (
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <SectionIntro
            eyebrow="Culture & Heritage"
            title="Supporting the identity, continuity, and value of place."
            text="IKIGAI KAI also supports projects connected to culture and heritage. This means helping communities protect what matters locally while improving how spaces function, are maintained, and continue to serve future generations."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm shadow-slate-200/40">
              <h3 className="text-xl font-semibold text-slate-900">Preserve</h3>
              <p className="mt-4 text-slate-600">Support projects that respect local identity and history.</p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm shadow-slate-200/40">
              <h3 className="text-xl font-semibold text-slate-900">Improve</h3>
              <p className="mt-4 text-slate-600">Introduce sustainable upgrades without losing the meaning of place.</p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-sm shadow-slate-200/40">
              <h3 className="text-xl font-semibold text-slate-900">Sustain</h3>
              <p className="mt-4 text-slate-600">Create models that keep local spaces active, valuable, and relevant.</p>
            </div>
          </div>
        </section>
      )}

      {page === "contact" && (
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <SectionIntro
                eyebrow="Contact"
                title="Start a project or partnership conversation."
                text="If you are a school, donor, community partner, or organisation exploring an aligned project, IKIGAI KAI can help structure a meaningful route forward."
              />
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-10 shadow-sm shadow-slate-200/40">
              <div className="space-y-5 text-slate-700">
                <div>
                  <div className="text-sm uppercase tracking-wide text-sky-600">Email</div>
                  <div className="mt-1 text-lg font-medium">hello@ikigaikai.org</div>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wide text-sky-600">Focus</div>
                  <div className="mt-1 text-lg font-medium">Schools • Energy • Community Projects • Heritage</div>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wide text-sky-600">Partnerships</div>
                  <div className="mt-1 text-lg font-medium">Open to structured discussions</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-slate-200 bg-white/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>IKIGAI KAI</div>
          <div>Funding • Green Technology • Schools • Communities • Heritage</div>
        </div>
      </footer>
    </div>
  );
}
