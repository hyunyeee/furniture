import React from "react";

interface YouTubePreviewProps {
  url: string;
}

function extractYouTubeId(url: string): string | null {
  const regex =
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export default function YouTubePreview({ url }: YouTubePreviewProps) {
  const videoId = extractYouTubeId(url);
  if (!videoId) return <p>잘못된 유튜브 링크입니다.</p>;

  return (
    <iframe
      className="mx-auto mt-24 aspect-video w-[60%]"
      src={url}
      title="YouTube video preview"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}
