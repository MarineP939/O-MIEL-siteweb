/**
 * Injecte des données structurées schema.org dans la page.
 *
 * Le `<` est échappé en `<` : `JSON.stringify` ne neutralise pas les
 * fragments de HTML, et une chaîne contenant `</script>` refermerait la balise.
 * Une balise `<script>` native est volontaire — le contenu est de la donnée,
 * pas du code à exécuter, donc `next/script` n'apporterait rien.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
