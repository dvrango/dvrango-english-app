import axios from "axios";
import { API_CONFIG } from "../config/api.config";
import type { StrapiResponse, ClaseData, EstudianteData, TareaData } from "../types";

// Create axios instance
const strapiApi = axios.create({
  baseURL: API_CONFIG.STRAPI.BASE_URL + "/api",
  headers: {
    Authorization: `Bearer ${API_CONFIG.STRAPI.API_KEY}`,
    "Content-Type": "application/json",
  },
  timeout: API_CONFIG.TIMEOUTS.DEFAULT,
});

// API Functions
export const strapiService = {
  // Get all classes
  async getClases(): Promise<ClaseData[]> {
    try {
      console.log('🔍 Fetching classes from:', `${API_CONFIG.STRAPI.BASE_URL}${API_CONFIG.STRAPI.ENDPOINTS.CLASES}${API_CONFIG.STRAPI.DEFAULT_PARAMS.POPULATE}`);
      
      const response = await strapiApi.get<StrapiResponse<ClaseData[]>>(
        `${API_CONFIG.STRAPI.ENDPOINTS.CLASES}${API_CONFIG.STRAPI.DEFAULT_PARAMS.POPULATE}`
      );
      
      console.log('📥 Raw Strapi response:', response.data);
      
      // Check if response has the expected structure
      if (!response.data) {
        console.error('❌ No data in response');
        throw new Error('No data received from Strapi');
      }
      
      if (!response.data.data) {
        console.error('❌ No data.data in response');
        throw new Error('Invalid response structure from Strapi');
      }
      
      console.log('✅ Classes fetched successfully:', response.data.data.length);
      
      // Validate each clase has the required structure
      const validatedClases = response.data.data.map((clase, index) => {
        console.log(`🔍 Class ${index}:`, clase);
        
        if (!clase.attributes) {
          console.warn(`⚠️  Class ${clase.id} has no attributes`);
          clase.attributes = {};
        }
        
        // Ensure nombre exists or provide a fallback
        if (!clase.attributes.nombre) {
          console.warn(`⚠️  Class ${clase.id} has no nombre field`);
          clase.attributes.nombre = `Class ${clase.id}`;
        }
        
        return clase;
      });
      
      return validatedClases;
      
    } catch (error) {
      console.error("❌ Error fetching classes:", error);
      
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Response status:', error.response.status);
          console.error('Response data:', error.response.data);
        } else if (error.request) {
          console.error('No response received:', error.request);
        }
      }
      
      throw new Error(`Failed to fetch classes from Strapi: ${error.message}`);
    }
  },

  // Get a specific class by ID
  async getClaseById(id: number): Promise<ClaseData> {
    try {
      console.log(`🔍 Fetching class ${id} from Strapi`);
      
      const response = await strapiApi.get<StrapiResponse<ClaseData>>(
        `/clases/${id}?populate=*`
      );
      
      console.log(`📥 Class ${id} response:`, response.data);
      
      if (!response.data.data) {
        throw new Error(`Class ${id} not found`);
      }
      
      return response.data.data;
    } catch (error) {
      console.error(`❌ Error fetching class ${id}:`, error);
      throw new Error(`Failed to fetch class ${id} from Strapi: ${error.message}`);
    }
  },

  // Get all estudiantes
  async getEstudiantes(): Promise<EstudianteData[]> {
    try {
      const response = await strapiApi.get<StrapiResponse<EstudianteData[]>>(
        `${API_CONFIG.STRAPI.ENDPOINTS.ESTUDIANTES}${API_CONFIG.STRAPI.DEFAULT_PARAMS.POPULATE}`
      );
      return response.data.data;
    } catch (error) {
      console.error("❌ Error fetching estudiantes:", error);
      throw new Error(`Failed to fetch estudiantes from Strapi: ${error.message}`);
    }
  },

  // Get all tareas
  async getTareas(): Promise<TareaData[]> {
    try {
      const response = await strapiApi.get<StrapiResponse<TareaData[]>>(
        `${API_CONFIG.STRAPI.ENDPOINTS.TAREAS}${API_CONFIG.STRAPI.DEFAULT_PARAMS.POPULATE}`
      );
      return response.data.data;
    } catch (error) {
      console.error("❌ Error fetching tareas:", error);
      throw new Error(`Failed to fetch tareas from Strapi: ${error.message}`);
    }
  },

  // Create a new class
  async createClase(
    data: Partial<ClaseData["attributes"]>
  ): Promise<ClaseData> {
    try {
      console.log('🆕 Creating new class:', data);
      
      const response = await strapiApi.post<StrapiResponse<ClaseData>>(
        `${API_CONFIG.STRAPI.ENDPOINTS.CLASES}`,
        { data }
      );
      
      console.log('✅ Class created successfully:', response.data.data);
      return response.data.data;
    } catch (error) {
      console.error("❌ Error creating class:", error);
      throw new Error(`Failed to create class in Strapi: ${error.message}`);
    }
  },

  // Update a class
  async updateClase(
    id: number,
    data: Partial<ClaseData["attributes"]>
  ): Promise<ClaseData> {
    try {
      console.log(`🔄 Updating class ${id}:`, data);
      
      const response = await strapiApi.put<StrapiResponse<ClaseData>>(
        `/clases/${id}`,
        { data }
      );
      
      console.log(`✅ Class ${id} updated successfully:`, response.data.data);
      return response.data.data;
    } catch (error) {
      console.error(`❌ Error updating class ${id}:`, error);
      throw new Error(`Failed to update class ${id} in Strapi: ${error.message}`);
    }
  },

  // Delete a class
  async deleteClase(id: number): Promise<void> {
    try {
      console.log(`🗑️  Deleting class ${id}`);
      
      await strapiApi.delete(`/clases/${id}`);
      
      console.log(`✅ Class ${id} deleted successfully`);
    } catch (error) {
      console.error(`❌ Error deleting class ${id}:`, error);
      throw new Error(`Failed to delete class ${id} from Strapi: ${error.message}`);
    }
  },

  // Test connection
  async testConnection(): Promise<boolean> {
    try {
      console.log('🔌 Testing Strapi connection...');
      
      const response = await strapiApi.get('/clases?pagination[limit]=1');
      
      console.log('✅ Connection successful:', response.status);
      return true;
    } catch (error) {
      console.error('❌ Connection failed:', error);
      return false;
    }
  }
};

export default strapiService;