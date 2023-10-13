import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://api.atlas-probeg.ru/graphql',
  documents: 'components/**/*.vue',
  generates: {
    'types/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
