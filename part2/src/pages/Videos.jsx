const Videos = () => {
  const videoSrc = [
    "https://youtu.be/FE1LY_pbXms?si=v-11b06AQuSnYoNI",
    "https://youtu.be/1LZltsK5nKI?si=VsNgB4cAgpcxPPuE",
    "https://youtu.be/8c4rAoWajdI?si=aWVgaTROzEGydjp4",
    "https://youtu.be/CHe_QJcTK5Y?si=DkVu0SOEQ7PJuOeE",
    "https://youtu.be/foGklduxhM0?si=lDL8RMZQPGpcg4LK",
  ];

  // Helper: convert youtu.be → embed URL
  const getEmbedUrl = (url) => {
    const videoId = url.split("youtu.be/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Video Library</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoSrc.map((src, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-40 bg-gray-200 flex items-center justify-center">
              <iframe
                width="100%"
                height="100%"
                src={getEmbedUrl(src)}
                title={`YouTube video player ${index}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="p-4">
              <h3 className="font-semibold">Video Title {index + 1}</h3>
              <p className="text-sm text-gray-600 mt-1">
                Description of the video content
              </p>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <span>45:30</span>
                <span className="mx-2">•</span>
                <span>2 weeks ago</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
