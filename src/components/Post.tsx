import type { Post as PostType } from '../types';

interface Props {
  post: PostType;
}

function formatTimestamp(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(hours / 24);
  
  if (days > 0) return `${days}d`;
  if (hours > 0) return `${hours}h`;
  return 'now';
}

function formatNumber(num: number): string {
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
}

export default function Post({ post }: Props) {
  return (
    <article className="border-b border-gray-800 p-3 sm:p-4 hover:bg-gray-900/50 transition-colors">
      <div className="flex gap-2 sm:gap-3">
        <img 
          src={post.author.profilePicture} 
          alt={post.author.name}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-shrink-0 object-cover"
          loading="lazy"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 mb-1 flex-wrap">
            <span className="font-bold text-white">{post.author.name}</span>
            {post.author.isVerified && (
              <svg className="w-4 h-4 text-red-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"/>
              </svg>
            )}
            <span className="text-gray-500">@{post.author.username}</span>
            <span className="text-gray-500">·</span>
            <time className="text-gray-500">{formatTimestamp(post.timestamp)}</time>
          </div>
          <p className="text-white text-sm sm:text-[15px] leading-normal mb-3">{post.content}</p>
          
          {post.images && post.images.length > 0 && (
            <div className={`mb-3 rounded-2xl overflow-hidden border border-gray-700 ${
              post.images.length === 1 ? 'max-h-[500px]' : 
              post.images.length === 2 ? 'grid grid-cols-2 gap-0.5' :
              post.images.length === 3 ? 'grid grid-cols-2 gap-0.5' :
              'grid grid-cols-2 gap-0.5'
            }`}>
              {post.images.map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  alt={`Post image ${idx + 1}`}
                  className={`w-full object-cover ${
                    post.images!.length === 1 ? 'max-h-[500px]' :
                    post.images!.length === 3 && idx === 0 ? 'col-span-2' :
                    'h-[200px] sm:h-[280px]'
                  }`}
                  loading="lazy"
                />
              ))}
            </div>
          )}
          
          <div className="flex gap-6 sm:gap-12 text-gray-500 text-xs sm:text-sm">
            <button 
              className="flex items-center gap-2 hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label={`${formatNumber(post.engagement.replies)} replies`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>{formatNumber(post.engagement.replies)}</span>
            </button>
            <button 
              className="flex items-center gap-2 hover:text-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
              aria-label={`${formatNumber(post.engagement.reposts)} reposts`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>{formatNumber(post.engagement.reposts)}</span>
            </button>
            <button 
              className="flex items-center gap-2 hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
              aria-label={`${formatNumber(post.engagement.likes)} likes`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>{formatNumber(post.engagement.likes)}</span>
            </button>
            <button 
              className="flex items-center gap-2 hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label={`${formatNumber(post.engagement.views)} views`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>{formatNumber(post.engagement.views)}</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
