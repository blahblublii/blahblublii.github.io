// From mdx-embed repo
export interface IYouTubeProps {
  youTubeId?: string;
  youTubePlaylistId?: string;
  aspectRatio?: '1/1' | '16/9' | '4/3' | '3/2' | '8/5';
  skipTo?: {
    h?: number;
    m: number;
    s: number;
  };
  autoPlay?: boolean;
}

export function YouTube ({ 
  youTubeId,
  youTubePlaylistId,
  aspectRatio = '16/9',
  autoPlay = false,
  skipTo = { h: 0, m: 0, s: 0 },
}: IYouTubeProps) {
  
  const { h, m, s } = skipTo;

  const tH = h! * 60;
  const tM = m * 60;

  const startTime = tH + tM + s;
  const provider = 'https://www.youtube.com';
  const baseUrl = `${provider}/embed/`;
  const src = `${baseUrl}${
    youTubeId ? `${youTubeId}?&autoplay=${autoPlay}&start=${startTime}` : `&videoseries?list=${youTubePlaylistId}`
  }`;

  return (
    <div>
      <iframe
        src={src}
        frameBorder="0"
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          width: "100%",
          aspectRatio: aspectRatio 
        }}
      ></iframe>
    </div>
  );
};
