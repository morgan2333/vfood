/// <reference types="vite/client" />

export interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_IS_REQUEST_PROXY: string;
  readonly VITE_API_URL: string;
  readonly VITE_API_URL_PREFIX: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
