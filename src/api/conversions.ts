import { Artist, ArtistFullDetails, Track } from "../types/interfaces";

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

export const convertToArtistFullDetails = (data: any): ArtistFullDetails => {
  const apiArtist = data.artists ? data.artists[0] : data;
  return {
    ...convertToArtist(apiArtist),
    country: apiArtist.strCountry,
    biography: apiArtist.strBiographyEN
  };
};

export const convertToTracks = (data: any): Track[] => {
  if (!data || !data.track) {
    return [];
  } 
    return data.track.map((trackData: any) => (convertToTrack(trackData)));
};

export const convertToTrack = (data: any): Track => {
  return {
    id: data.idTrack,
    name: data.strTrack,
    album: data.strAlbum,
    duration: data.intDuration,
    imageUrl: data.strTrackThumb,
  };
};