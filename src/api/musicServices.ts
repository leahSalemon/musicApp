import { Artist } from '../types/interfaces';
import { apiCall } from './baseApi';
import { convertToArtist, convertToArtists } from './conversions';

export const fetchArtistsByName = async (name: string): Promise<Artist[]> => {
  try {
    const response = await apiCall(`search.php?s=${name}`);
    return convertToArtists(response);

  } catch (error) {
    console.error("Failed to fetch artists", error);
    throw error;
  }
};