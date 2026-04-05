import { Link } from "react-router-dom";
import type { GameData } from "@/data/games";

const GameCard = ({ game }: { game: GameData }) => (
  <Link to={`/juegos/${game.id}`} className="block no-underline">
    <div className="pixel-border bg-card p-4 glitch-hover transition-all hover:bg-secondary/50 group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-primary text-[10px] tracking-widest">{game.status}</span>
        <span className="animate-blink text-primary text-xs">●</span>
      </div>
      <h3 className="text-foreground text-base font-bold mb-1 group-hover:text-primary transition-colors">
        {game.title}
      </h3>
      <div className="text-accent text-[10px] mb-2 font-mono">{game.codename}</div>
      <p className="text-muted-foreground text-xs line-clamp-3 mb-3">
        {game.description}
      </p>
      <div className="flex flex-wrap gap-1">
        {game.tags.map((t) => (
          <span key={t} className="bg-primary/10 border border-primary/30 text-primary text-[9px] px-1.5 py-0.5">
            {t}
          </span>
        ))}
      </div>
      <div className="text-primary text-[10px] mt-3 tracking-widest">
        ▸ THREAT: {game.threat}
      </div>
    </div>
  </Link>
);

export default GameCard;
