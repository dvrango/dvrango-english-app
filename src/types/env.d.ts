interface ImportMetaEnv {
  VITE_STRAPI_URL: string;
  VITE_STRAPI_API_KEY: string;
  // Agrega aquí otras variables si las necesitas
}

interface ImportMeta {
  env: ImportMetaEnv;
}
