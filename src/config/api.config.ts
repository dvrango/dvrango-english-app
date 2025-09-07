// API Configuration
export const API_CONFIG = {
  STRAPI: {
    BASE_URL: import.meta.env.VITE_STRAPI_URL || "http://localhost:1337",
    API_KEY: "e998aad189325b037c8e9f6f9fd3b7eb012f04980a3c87167c8e7f3a442991ec62476bbd471ecf39966c6970d372c3df5f00c19f19a3b531316c44f9ac7468b1104f6223988c8cc53dc3e0a35860ea32ceeb03741e4309821ace7da9d1aaeddb9f4ef8a41163d7b1dda9edf5179ac92e8fccde244d9a7e6c0a7029124e39136c",
    ENDPOINTS: {
      CLASES: "/api/clases",
      ESTUDIANTES: "/api/estudiantes", 
      TAREAS: "/api/tareas",
    },
    DEFAULT_PARAMS: {
      POPULATE: "?populate=*",
      PAGINATION_LIMIT: "?pagination[limit]=1",
    }
  },
  TIMEOUTS: {
    DEFAULT: 10000, // 10 seconds
    UPLOAD: 30000,  // 30 seconds
  },
  RETRY: {
    ATTEMPTS: 3,
    DELAY: 1000, // 1 second
  }
} as const;