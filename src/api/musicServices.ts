import { Artist } from '../types/interfaces';
import { apiCall } from './baseApi';

export const fetchArtistsByName = async (name: string): Promise<Artist[]> => {
  try {
    const response = await apiCall(`search.php?s=${name}`);
    return response.artists || [];
  } catch (error) {
    console.error("Failed to fetch artists", error);
    throw error;
  }
};