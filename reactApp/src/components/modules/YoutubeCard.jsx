import React, { useEffect, useState } from "react";

const YouTubeCard = ({ url }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    fetch(`https://www.youtube.com/oembed?url=${url}&format=json`)
      .then((res) => {
        if (!res.ok) throw new Error("Invalid YouTube URL");
        return res.json();
      })
      .then((info) => setData(info))
      .catch(() => {
        console.error("Invalid YouTube URL:", url);
        setError(true);
      });
  }, [url]);

  // Error UI
  if (error)
    return (
      <div className="p-6 text-center bg-red-50 border border-red-200 text-red-600 rounded-xl max-w-md mx-auto">
        ❌ Unable to load YouTube video.
      </div>
    );

  // Loading UI
  if (!data)
    return (
      <div className="p-6 text-center text-gray-600 max-w-md mx-auto">
        <div className="animate-pulse">
          <div className="w-full h-48 bg-gray-300 rounded-lg"></div>
          <div className="h-4 mt-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
          <div className="h-3 mt-2 bg-gray-300 rounded w-1/2 mx-auto"></div>
        </div>
      </div>
    );

  return (
    <div className="bg-white rounded-xl shadow-md p-4 max-w-md mx-auto hover:shadow-lg transition-all duration-300">
      
      {/* Thumbnail */}
      <div className="rounded-lg overflow-hidden aspect-video">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img
            src={data.thumbnail_url}
            alt={data.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </a>
      </div>

      {/* Video Title */}
      <h2 className="mt-4 text-lg font-bold text-gray-900 line-clamp-2">
        {data.title}
      </h2>

      {/* Channel Name */}
      <p className="text-sm text-gray-600 mt-1">{data.author_name}</p>

      {/* Watch Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Watch Video
      </a>
    </div>
  );
};

export default YouTubeCard;
