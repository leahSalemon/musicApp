import { Artist } from "../types/interfaces";

export const convertToArtists = (data: any): Artist[] => {
  if (!data || !data.artists) {
    return [];
  }
    return data.artists.map((artistData: any) => convertToArtist(artistData));
};

export const convertToArtist = (data: any): Artist => {
  return {
    id: data.idArtist,
    name: data.strArtist,
    genre: data.strGenre,
    imageUrl: data.strArtistThumb,
  };
};