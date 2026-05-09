import ReactPlayer from 'react-player';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
  onProgress: (state: any) => void;
  playerRef: React.RefObject<any>;
}

export function VideoPlayer({ url, onProgress, playerRef }: VideoPlayerProps) {
  const Player = ReactPlayer as any;

  return (
    <div className="glass-panel w-full h-full rounded-2xl overflow-hidden relative group bg-slate-900">

      {!url && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-slate-900/80">
          <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4 border border-slate-700">
            <Play className="w-6 h-6 text-slate-500 ml-1" />
          </div>
          <p className="text-slate-400 text-sm font-medium">Paste a YouTube URL to begin</p>
        </div>
      )}

      {url && (
        <div className="w-full h-full relative pointer-events-auto">
          <Player
            ref={playerRef}
            url={url}
            width="100%"
            height="100%"
            controls={true}
            playing={true}

            onProgress={onProgress}
            progressInterval={500}
            config={{
              youtube: {
                playerVars: { showinfo: 1, modestbranding: 1 } as any
              }
            } as any}
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        </div>
      )}
    </div>
  );
}
