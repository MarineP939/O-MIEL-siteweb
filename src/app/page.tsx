const highlights = [
  {
    title: "Miel artisanal",
    text: "Des récoltes soignées, sélectionnées avec exigence pour un goût authentique.",
  },
  {
    title: "Qualité naturelle",
    text: "Aucune transformation inutile, juste le meilleur du rucher dans chaque pot.",
  },
  {
    title: "Service humain",
    text: "Un accompagnement proche, pensé pour les particuliers comme pour les entreprises.",
  },
];

export default function Home() {
  const navItems = [
    { label: "Accueil", href: "#home" },
    { label: "Formations", href: "#formations" },
    { label: "Boutique", href: "#boutique" },
    { label: "Biosurveillance", href: "#biosurveillance" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main id="home" className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top_left,_rgba(255,214,102,0.25),_transparent_35%)] text-stone-800">
      <header className="sticky top-0 z-50 border-b border-amber-100 bg-white backdrop-blur-none">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 sm:px-8 lg:px-12">
          <a href="#home" className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white p-1 sm:h-18 sm:w-18">
              <img src="/Logo-o-miel.png" alt="Logo O’MIEL" className="h-16 w-16 object-contain sm:h-18 sm:w-18" />
            </div>
            <span className="text-3xl font-semibold tracking-[0.2em] text-[rgb(189,146,102)] sm:text-4xl" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              O'MIEL
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-base font-semibold md:flex">
            {navItems.map((item) => {
              const isActive = item.href === "#home";
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`transition ${isActive ? 'text-[rgb(189,146,102)] underline decoration-2 underline-offset-4' : 'text-[rgb(169,209,142)] hover:text-[rgb(189,146,102)]'}`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <details className="relative md:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-center rounded-full border border-amber-200 bg-amber-50 px-3 py-2 text-stone-700">
              ☰
            </summary>
            <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-amber-100 bg-white p-3 shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-stone-700 transition hover:bg-amber-50 hover:text-[rgb(189,146,102)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </header>

      <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
              O’MIEL • Miel de qualité, naturellement
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
                Le goût du terroir, dans un miel d’exception.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-stone-600">
                O’MIEL met à l’honneur un savoir-faire authentique, des fleurs locales et un miel d’une pureté remarquable, pensé pour sublimer vos moments du quotidien.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-stone-900 px-6 py-3 text-center font-medium text-white transition hover:bg-stone-700"
              >
                Découvrir nos produits
              </a>
              <a
                href="#about"
                className="rounded-full border border-stone-300 px-6 py-3 text-center font-medium text-stone-700 transition hover:border-stone-900 hover:text-stone-900"
              >
                En savoir plus
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-amber-100 bg-white/80 p-8 shadow-[0_20px_60px_-20px_rgba(120,53,15,0.35)] backdrop-blur">
            <div className="rounded-2xl bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
                Notre promesse
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-stone-900">
                Un miel pur, doux et généreux.
              </h2>
              <ul className="mt-6 space-y-3 text-sm text-stone-700">
                <li>• Récolte méticuleuse et traçabilité simple</li>
                <li>• Goût naturel, parfum floral et notes délicates</li>
                <li>• Présentation élégante pour vos cadeaux et vos tables</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="formations" className="border-t border-amber-100 bg-white/70 px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
              À propos
            </p>
            <h3 className="mt-3 text-3xl font-semibold text-stone-900">
              Une histoire de douceur, de nature et de passion.
            </h3>
          </div>
          <p className="text-lg leading-8 text-stone-600">
            Chez O’MIEL, chaque pot raconte un engagement envers la qualité, le respect des ruches et la transmission d’un savoir-faire transmis avec cœur. Notre objectif est de vous offrir un miel qui apporte une touche de chaleur à chaque dégustation.
          </p>
        </div>
      </section>

      <section id="boutique" className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h4 className="text-xl font-semibold text-stone-900">{item.title}</h4>
              <p className="mt-3 text-sm leading-7 text-stone-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="biosurveillance" className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-3xl border border-amber-100 bg-white/80 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Biosurveillance</p>
          <h3 className="mt-3 text-3xl font-semibold text-stone-900">Suivi de la santé des ruches et du terroir.</h3>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-600">
            Nous accompagnons les pratiques de surveillance avec une approche attentive, afin de préserver la qualité du miel et la vitalité des colonies.
          </p>
        </div>
      </section>

      <section id="contact" className="px-6 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl bg-stone-900 px-8 py-10 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              Contact
            </p>
            <h3 className="mt-2 text-2xl font-semibold">
              Prêt à goûter à l’authenticité ?
            </h3>
          </div>
          <a
            href="mailto:contact@omiel.fr"
            className="rounded-full bg-white px-6 py-3 text-center font-medium text-stone-900 transition hover:bg-amber-100"
          >
            contact@omiel.fr
          </a>
        </div>
      </section>
    </main>
  );
}
