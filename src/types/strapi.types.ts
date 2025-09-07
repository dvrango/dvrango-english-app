// Strapi API response types
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface ClaseData {
  id: number;
  documentId?: string;
  content?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  attributes: {
    nombre?: string;
    descripcion?: string;
    estudiantes?: EstudianteData[];
    tareas?: TareaData[];
    [key: string]: any; // Allow for flexible field structure
  };
}

export interface EstudianteData {
  id: number;
  nombre: string;
  edad?: number;
  email?: string;
  createdAt: string;
  updatedAt: string;
}

export interface TareaData {
  id: number;
  titulo: string;
  descripcion?: string;
  fechaVencimiento?: string;
  completada?: boolean;
  createdAt: string;
  updatedAt: string;
}

// API Error types
export interface StrapiError {
  data: null;
  error: {
    status: number;
    name: string;
    message: string;
    details?: any;
  };
}