import { Artist } from '../types/interfaces';
import { useNavigate } from 'react-router-dom';
import './ArtistCard.css';

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
    const { id, genre, imageUrl,name } = artist;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/artist/${id}`);
  };

  return (
    <div className="artist-card-container" onClick={handleClick}>
      <div className="artist-card-image-wrapper">
        <img 
          src={artist.imageUrl || 'https://via.placeholder.com/300'} 
          alt={artist.name}
          className="artist-card-image"
        />
        <div className="artist-card-overlay">
          <span className="artist-card-overlay-text">צפה בפרטים נוספים ←</span>
        </div>
      </div>
      <div className="artist-card-info">
        <h3 className="artist-card-name">{artist.name}</h3>
        <p className="artist-card-genre">{artist.genre || 'Music Artist'}</p>
      </div>
    </div>
  );
};

export default ArtistCard;