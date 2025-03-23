import React from 'react';
import { ChevronDown, ChevronUp, Instagram } from 'lucide-react';

interface Member {
  name: string;
  gradYear: string;
  instagram?: string;
  position?: string;
}

interface ProfileCardProps {
  profile: {
    name: string;
    gradYear: string;
    position?: string;
    imageUrl: string;
    bio: string;
    spotlight?: string;
    isGroup?: boolean;
    members?: Member[];
  };
  isExpanded: boolean;
  toggleProfile: () => void;
  index: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ 
  profile, 
  isExpanded, 
  toggleProfile,
}) => {
  // Function to handle image error and fallback to thumbnail
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    if (!target.src.includes('https://drive.google.com/thumbnail?id=')) {
      const idMatch = target.src.match(/d\/([^/]+)/);
      if (idMatch && idMatch[1]) {
        target.src = `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w1000`;
      }
    }
  };

  return (
    <div className="profile-card">
      <div 
        className="profile-header"
        onClick={toggleProfile}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h3>{profile.name}</h3>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        <div className="profile-meta">
          <span>Class of {profile.gradYear}</span>
          {profile.position && <span>{profile.position}</span>}
          {profile.isGroup && <span>Group</span>}
        </div>
      </div>
      
      {isExpanded && (
        <>
          <img 
            src={profile.imageUrl} 
            alt={profile.name} 
            className="profile-image"
            onError={handleImageError}
          />
          
          <div className="profile-content">
            <p>{profile.bio}</p>
            
            {profile.isGroup && profile.members && profile.members.length > 0 && (
              <div className="members-section">
                <h5>Group Members:</h5>
                {profile.members.map((member, memberIndex) => (
                  <div key={memberIndex} className="member-item">
                    <span>
                      {member.name} (Class of {member.gradYear})
                      {member.position && ` - ${member.position}`}
                    </span>
                    {member.instagram && (
                      <a 
                        href={`https://instagram.com/${member.instagram.replace('@', '')}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="instagram"
                      >
                        <Instagram size={16} />
                        {member.instagram}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {profile.spotlight && profile.spotlight !== 'N/A' && (
            <div className="profile-spotlight">
              <strong>Spotlight Nomination:</strong> {profile.spotlight}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProfileCard;