import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Compose des classes Tailwind en laissant les dernières l'emporter.
 *
 * Une simple concaténation ne suffit pas : à spécificité égale, c'est l'ordre
 * dans la feuille de style qui tranche, pas l'ordre dans l'attribut `class`.
 * `max-w-3xl` passé à un composant qui porte déjà `max-w-6xl` était donc
 * silencieusement ignoré, `.max-w-6xl` étant déclaré plus bas dans le CSS.
 *
 * `twMerge` connaît les familles d'utilitaires et résout le conflit dans le
 * sens attendu : le dernier argument gagne.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
