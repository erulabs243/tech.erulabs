/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_APP_NAME: string;
  readonly PUBLIC_APP_TAGLINE: strring;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
