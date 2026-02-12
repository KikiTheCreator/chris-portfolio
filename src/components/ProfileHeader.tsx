interface Props {
  coverImage: string;
  profilePicture: string;
}

export default function ProfileHeader({ coverImage, profilePicture }: Props) {
  return (
    <div className="relative">
      <div className="h-48 md:h-64 bg-gray-700 overflow-hidden">
        <img 
          src={coverImage} 
          alt="Cover" 
          className="object-cover"
        />
      </div>
      <div className="absolute">
        <img 
          src={profilePicture} 
          alt="Kirby"
          className="rounded-full border-4 border-black bg-black object-cover"
        />
      </div>
    </div>
  );
}
