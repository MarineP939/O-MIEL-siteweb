import { readFileSync } from "node:fs";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

/**
 * Vignette de partage, héritée par toutes les routes qui n'en définissent pas.
 *
 * Générée à la compilation plutôt que stockée en image : le jour où la baseline
 * change, elle suit automatiquement. Satori ne gère qu'un sous-ensemble de CSS,
 * d'où une mise en page en flexbox explicite et des couleurs en dur.
 */
export const alt = `${site.name} — ${site.baseline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CREME = "#fdf8f0";
const MIEL_200 = "#ecd7ba";
const MIEL_700 = "#74552f";
const NUIT = "#1c1a17";

export default function OpengraphImage() {
  const logo = readFileSync(join(process.cwd(), "public", "Logo-o-miel.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: CREME,
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {/* `next/image` n'a pas cours ici : Satori ne rend que du HTML brut. */}
          <img src={logoSrc} width={104} height={117} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 46, letterSpacing: 8, color: MIEL_700 }}>O’MIEL</span>
            <span style={{ fontSize: 22, letterSpacing: 6, color: "#6e9e55" }}>GUADELOUPE</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 68, color: NUIT, lineHeight: 1.15 }}>
            Miel artisanal de Guadeloupe
          </span>
          <span style={{ marginTop: 20, fontSize: 32, color: "#5a544c" }}>
            Miels de terroir · Formations · Biosurveillance
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", width: 120, height: 8, background: MIEL_200 }} />
          <span style={{ fontSize: 26, color: MIEL_700 }}>
            3 médailles d’or au Concours Général Agricole de Paris
          </span>
        </div>
      </div>
    ),
    size,
  );
}
