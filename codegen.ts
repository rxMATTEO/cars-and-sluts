import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://rickandmortyapi.com/graphql",
  documents: "components/**/*.vue",
  generates: {
    "types/": {
      preset: "client",
      plugins: ["typescript", "typescript-operations"]
    }
  }
};

export default config;
