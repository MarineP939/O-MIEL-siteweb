import path from "node:path";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Un yarn.lock présent plus haut dans l'arborescence fait deviner une mauvaise racine à Turbopack.
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
};

export default nextConfig;
