import { Artist, ArtistFullDetails, Track } from '../types/interfaces';
import { apiCall } from './baseApi';
import { convertToArtistFullDetails, convertToArtists, convertToTracks } from './conversions';

export const fetchArtistsByName = async (name: string): Promise<Artist[]> => {
  try {
    const response = await apiCall(`search.php?s=${name}`);
    return convertToArtists(response);

  } catch (error) {
    console.error("Failed to fetch artists", error);
    throw error;
  }
};

export const fetchArtistById = async (id: string): Promise<ArtistFullDetails | null> => {
  try {
    const response = await apiCall(`artist.php?i=${id}`);
    return convertToArtistFullDetails(response);
  } catch (error) {
    console.error("Failed to fetch artist details", error);
    return null;
  }
};

export const fetchTopTracks = async (artistName: string): Promise<Track[]> => {
  try {
    const response = await apiCall(`track-top10.php?s=${artistName}`);
    return convertToTracks(response);
  } catch (error) {
    console.error("Failed to fetch tracks", error);
    return [];
  }
};