import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [".next/**"],
  },
  ...nextVitals,
  ...nextTypescript,
  {
    files: ["src/components/Projects/ProjectGallery.tsx", "src/components/theme-toggle.tsx"],
    rules: {
      "react-hooks/set-state-in-effect": "off",
    },
  },
  {
    files: ["src/components/theme-toggle.tsx"],
    rules: {
      "react-hooks/immutability": "off",
    },
  },
];

export default eslintConfig;
