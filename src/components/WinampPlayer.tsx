import { useState, useEffect } from "react";

const tracks = [
  "lavender_town_reversed.mid",
  "unknown_signal_003.ogg",
  "tom_ambient_loop.wav",
  "static_channel_7.mp3",
  "happymod_jingle_corrupted.flac",
];

const WinampPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [track, setTrack] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!playing) return;
    const iv = setInterval(() => setElapsed((e) => (e + 1) % 240), 1000);
    return () => clearInterval(iv);
  }, [playing]);

  const fmt = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  return (
    <div className="pixel-border bg-card p-2 text-xs">
      <div className="bg-secondary/80 border border-border p-1 mb-1 flex items-center justify-between">
        <span className="text-primary font-bold text-[10px]">◄ ABISMO PLAYER v6.66 ►</span>
        <div className="flex gap-1">
          <span className="text-muted-foreground">_</span>
          <span className="text-muted-foreground">□</span>
          <span className="text-primary">✕</span>
        </div>
      </div>
      <div className="bg-black p-1 mb-1 border border-border">
        <div className="text-accent text-[10px] truncate animate-flicker">
          ♫ {tracks[track]}
        </div>
        <div className="flex justify-between text-muted-foreground text-[9px]">
          <span>{fmt(elapsed)}</span>
          <span>{playing ? "▶ PLAYING" : "■ STOPPED"}</span>
          <span>-{fmt(240 - elapsed)}</span>
        </div>
        <div className="w-full bg-secondary h-1 mt-1">
          <div
            className="bg-accent h-1 transition-all"
            style={{ width: `${(elapsed / 240) * 100}%` }}
          />
        </div>
      </div>
      <div className="flex justify-center gap-2 text-primary">
        <button onClick={() => setTrack((t) => (t - 1 + tracks.length) % tracks.length)}>⏮</button>
        <button onClick={() => setPlaying(!playing)}>{playing ? "⏸" : "▶"}</button>
        <button onClick={() => { setTrack((t) => (t + 1) % tracks.length); setElapsed(0); }}>⏭</button>
      </div>
    </div>
  );
};

export default WinampPlayer;
