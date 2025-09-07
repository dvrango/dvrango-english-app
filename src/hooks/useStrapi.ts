import { useState, useEffect } from 'react';
import { strapiService } from '../services/strapi';
import type { ClaseData, EstudianteData, TareaData, LoadingState } from '../types';

export const useClases = () => {
  const [clases, setClases] = useState<ClaseData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchClases = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await strapiService.getClases();
      setClases(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error fetching clases');
      console.error('Error fetching clases:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClases();
  }, []);

  return {
    clases,
    loading,
    error,
    refetch: fetchClases
  };
};

export const useEstudiantes = () => {
  const [estudiantes, setEstudiantes] = useState<EstudianteData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEstudiantes = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await strapiService.getEstudiantes();
      setEstudiantes(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error fetching estudiantes');
      console.error('Error fetching estudiantes:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEstudiantes();
  }, []);

  return {
    estudiantes,
    loading,
    error,
    refetch: fetchEstudiantes
  };
};

export const useTareas = () => {
  const [tareas, setTareas] = useState<TareaData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTareas = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await strapiService.getTareas();
      setTareas(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error fetching tareas');
      console.error('Error fetching tareas:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTareas();
  }, []);

  return {
    tareas,
    loading,
    error,
    refetch: fetchTareas
  };
};

export const useLoadingState = (initialState: boolean = false): LoadingState & {
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
} => {
  const [isLoading, setIsLoading] = useState(initialState);
  const [error, setError] = useState<string | null>(null);

  const reset = () => {
    setIsLoading(false);
    setError(null);
  };

  return {
    isLoading,
    error,
    setLoading: setIsLoading,
    setError,
    reset
  };
};