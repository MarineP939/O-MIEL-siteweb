"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState, type FormEvent } from "react";

import { formations } from "@/lib/catalogue";
import { site } from "@/lib/site";

/**
 * Formulaire de contact sans backend : la soumission ouvre le client e-mail du
 * visiteur avec un message pré-rempli.
 *
 * TODO (évolution) : pour un envoi côté serveur, remplacer `handleSubmit` par une
 * Server Action (`"use server"`) branchée sur un service d'e-mail transactionnel
 * (Resend, Brevo…) et afficher l'état via `useActionState`.
 */

const SUBJECTS = [
  { value: "commande", label: "Commande de miel" },
  { value: "formation", label: "Formation" },
  { value: "biosurveillance", label: "Biosurveillance" },
  { value: "professionnel", label: "Demande professionnelle / revendeur" },
  { value: "autre", label: "Autre" },
] as const;

type SubjectValue = (typeof SUBJECTS)[number]["value"];

function isSubject(value: string | null): value is SubjectValue {
  return SUBJECTS.some((subject) => subject.value === value);
}

const fieldClasses =
  "mt-2 w-full rounded-xl border border-miel-200 bg-white px-4 py-3 text-sm text-nuit placeholder:text-nuit/35 focus:border-miel-500";

export function ContactForm() {
  const searchParams = useSearchParams();

  const sujetParam = searchParams.get("sujet");
  const initialSubject: SubjectValue = isSubject(sujetParam) ? sujetParam : "commande";

  const initialMessage = useMemo(() => {
    const slug = searchParams.get("formation");
    const formation = formations.find((item) => item.slug === slug);
    return formation ? `Bonjour,\n\nJe souhaite connaître les prochaines dates de la formation « ${formation.title} ».\n\n` : "";
  }, [searchParams]);

  const [subject, setSubject] = useState<SubjectValue>(initialSubject);
  const [message, setMessage] = useState(initialMessage);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const subjectLabel =
      SUBJECTS.find((item) => item.value === data.get("subject"))?.label ?? "Contact";

    const body = [
      String(data.get("message") ?? ""),
      "",
      "—",
      `Nom : ${name}`,
      `E-mail : ${email}`,
      phone ? `Téléphone : ${phone}` : null,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const mailto = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      `[${subjectLabel}] ${name}`,
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-nuit">
            Nom <span aria-hidden className="text-miel-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClasses}
            placeholder="Votre nom"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-semibold text-nuit">
            E-mail <span aria-hidden className="text-miel-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClasses}
            placeholder="vous@exemple.fr"
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-nuit">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClasses}
            placeholder="Facultatif"
          />
        </div>

        <div>
          <label htmlFor="subject" className="text-sm font-semibold text-nuit">
            Sujet
          </label>
          <select
            id="subject"
            name="subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value as SubjectValue)}
            className={fieldClasses}
          >
            {SUBJECTS.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-nuit">
          Message <span aria-hidden className="text-miel-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={7}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={fieldClasses}
          placeholder="Produits et quantités souhaités, dates envisagées, description de votre projet…"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-miel-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-miel-700"
      >
        Rédiger le message
      </button>

      <p className="text-xs leading-6 text-nuit/55" role={submitted ? "status" : undefined}>
        {submitted
          ? "Votre logiciel de messagerie vient de s’ouvrir avec le message pré-rempli. S’il ne s’est rien passé, écrivez-nous directement à "
          : "Ce formulaire prépare un e-mail dans votre logiciel de messagerie : aucune donnée n’est enregistrée sur ce site. Vous pouvez aussi écrire directement à "}
        <a href={`mailto:${site.contact.email}`} className="font-semibold text-miel-700 underline">
          {site.contact.email}
        </a>
        .
      </p>
    </form>
  );
}
