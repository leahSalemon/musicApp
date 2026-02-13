export interface Artist {
  id: string;
  name: string;
  genre: string;
  imageUrl: string;
}
export interface ArtistFullDetails extends Artist {
  country: string;
  biography: string;
}

export interface Track {
  id: string;
  name: string;
  album: string;
  duration: string;
  imageUrl?: string;
}


