import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchArtistById, fetchTopTracks } from '../api/musicServices';
import { ArtistFullDetails, Track } from '../types/interfaces';
import './artistDetails.css';

const ArtistDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [artist, setArtist] = useState<ArtistFullDetails | null>(null);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);

  const loadArtistData = async () => {
    if (!id) return;
    setLoading(true);
    try {
      const artistData = await fetchArtistById(id);
      if (artistData) {
        setArtist(artistData);
        const tracksData = await fetchTopTracks(artistData.name);
        setTracks(tracksData);
      }
    } catch (error) {
      console.error("Error loading artist details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadArtistData();
  }, [id]);

  if (loading) return <div className="loader"> Loading data...</div>;
  if (!artist) return <div className="error">Artist not found.</div>;

  return (
    <div className="artist-page-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <span>←</span> Back to Search
      </button>

      <header className="artist-header">
        <div className="image-wrapper">
          <img 
            src={artist.imageUrl || 'https://via.placeholder.com/400'} 
            alt={artist.name} 
            className="artist-main-img" 
          />
        </div>
        
        <div className="artist-main-info">
          <h1>{artist.name}</h1>
          <div className="tags">
            <span className="genre-tag">{artist.genre || 'Music'}</span>
            <span className="country-tag">{artist.country}</span>
          </div>
          
          <div className="bio-section">
            <h3>Biography</h3>
            <p>{artist.biography || "No biography available for this artist"}</p>
          </div>
        </div>
      </header>

      <section className="top-tracks-section">
        <h2>3 Top Tracks</h2>
        <div className="tracks-list">
          {tracks.length > 0 ? (
            tracks.map((track, index) => (
              <div key={track.id || index} className="track-card">
                <span className="track-number">0{index + 1}</span>
                <div className="track-details">
                  <p className="track-name">{track.name}</p>
                  <p className="track-album">{track.album}</p>
                </div>
                {track.duration && (
                  <span className="track-duration">
                    {Math.floor(Number(track.duration) / 60000)}:
                    {((Number(track.duration) % 60000) / 1000).toFixed(0).padStart(2, '0')}
                  </span>
                )}
              </div>
            ))
          ) : (
            <p className="no-tracks">No top tracks available for this artist.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ArtistDetails;