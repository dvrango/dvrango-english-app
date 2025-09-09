// API Configuration
export const API_CONFIG = {
  STRAPI: {
    BASE_URL: import.meta.env.VITE_STRAPI_URL || "http://localhost:1337",
    API_KEY: import.meta.env.VITE_STRAPI_API_KEY || "",
    ENDPOINTS: {
      CLASES: "/clases",
      ESTUDIANTES: "/estudiantes",
      TAREAS: "/tareas",
    },
    DEFAULT_PARAMS: {
      POPULATE: "?populate=*",
      PAGINATION_LIMIT: "?pagination[limit]=1",
    },
  },
  TIMEOUTS: {
    DEFAULT: 10000, // 10 seconds
    UPLOAD: 30000, // 30 seconds
  },
  RETRY: {
    ATTEMPTS: 3,
    DELAY: 1000, // 1 second
  },
} as const;
