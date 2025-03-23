import { MediaItem } from '../data/service';
import '../styles/service.css';

interface ServiceMediaProps {
  item: MediaItem;
}

const ServiceMedia = ({ item }: ServiceMediaProps) => {
  if (item.type === 'image') {
    return (
      <div className="media-box">
        <img 
          src={item.url} 
          alt={item.title} 
          className="media-content"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (!target.src.includes('https://drive.google.com/thumbnail?id=')) {
              const idMatch = target.src.match(/d\/([^/]+)/);
              if (idMatch && idMatch[1]) {
                target.src = `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w1000`;
              }
            }
          }}
        />
      </div>
    );
  } else if (item.type === 'video') {
    return (
      <div className="media-box video-box">
        <div className="video-container">
          <iframe
            src={item.url}
            title={item.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
  return null;
};

interface ServiceEventBoxProps {
  title: string;
  description: string;
  mediaItems: MediaItem[];
  type: 'gallery' | 'event';
}

const ServiceEventBox = ({ title, description, mediaItems, type }: ServiceEventBoxProps) => {
  return (
    <div className={`${type}-section`}>
      <h2 className="subsection-title">{title}</h2>
      <p className="subsection-description">{description}</p>
      
      <div className={`media-section ${type === 'gallery' ? 'photo-gallery' : 'event-media'}`}>
        {mediaItems.map((item) => (
          <ServiceMedia key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ServiceEventBox;