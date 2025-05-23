import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    rules: {
      // Allow unused vars/args if prefixed with "_"
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
      ],
      // Optional: allow use of `any`
      "@typescript-eslint/no-explicit-any": "off"
    }
  }
];

export default eslintConfig;