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
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute -bottom-12 sm:-bottom-16 left-3 sm:left-4">
        <img 
          src={profilePicture} 
          alt="Profile" 
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-black bg-black"
        />
      </div>
    </div>
  );
}
