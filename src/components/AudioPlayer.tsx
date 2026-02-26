import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export function AudioPlayer({ title, src }: { title: string, src: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      if (duration) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const bounds = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const percent = x / bounds.width;
      audioRef.current.currentTime = percent * audioRef.current.duration;
      setProgress(percent * 100);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
    setIsMuted(val === 0);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume > 0 ? volume : 1;
        setVolume(volume > 0 ? volume : 1);
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  return (
    <div className="hardware-panel p-4 md:p-6 mb-4 relative overflow-hidden group border border-white/5 hover:border-[#2266f0]/30 transition-colors">
      <div className="halftone-overlay opacity-10 group-hover:opacity-30"></div>
      
      {/* Avant-garde decorative line */}
      <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-white/10">
        <div className="absolute top-0 left-[-1px] w-[4px] h-[4px] bg-[#2266f0]"></div>
        <div className="absolute bottom-0 left-[-1px] w-[4px] h-[4px] bg-[#2266f0]"></div>
      </div>

      <audio 
        ref={audioRef} 
        src={src} 
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 pl-4">
        {/* Play Button */}
        <button 
          onClick={togglePlay}
          className="w-12 h-12 rounded-full border border-[#2266f0]/50 flex items-center justify-center text-[#2266f0] hover:bg-[#2266f0] hover:text-white transition-all shrink-0 relative overflow-hidden"
        >
          {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
        </button>

        {/* Track Info & Progress */}
        <div className="flex-1 w-full flex flex-col gap-3">
          <div className="flex justify-between items-end">
            <span className="text-sm font-medium tracking-wide text-white">{title}</span>
            <span className="text-mono text-[10px] text-[#2266f0] tracking-widest">AUDIO.WAV</span>
          </div>
          
          {/* Progress Bar */}
          <div 
            className="h-1.5 w-full bg-[#0a0a0a] border border-white/10 cursor-pointer relative overflow-hidden rounded-sm"
            onClick={handleProgressClick}
          >
            <div 
              className="absolute top-0 left-0 h-full bg-[#2266f0] transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-3 shrink-0 w-full md:w-auto mt-4 md:mt-0">
          <button onClick={toggleMute} className="text-[#666] hover:text-white transition-colors">
            {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.01" 
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-24 h-1 bg-white/10 appearance-none cursor-pointer accent-[#2266f0]"
          />
        </div>
      </div>
    </div>
  );
}
