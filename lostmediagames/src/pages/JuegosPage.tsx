import { games } from "@/data/games";
import GameCard from "@/components/GameCard";

const JuegosPage = () => (
  <div className="space-y-4">
    <div className="pixel-border bg-card p-3">
      <h2 className="text-primary text-sm font-bold mb-1">
        ▓ ARCHIVO DE JUEGOS — CLASIFICADOS ▓
      </h2>
      <p className="text-muted-foreground text-xs">
        Los siguientes archivos han sido recuperados de fuentes no verificadas.
        Cada entrada ha sido catalogada según su nivel de amenaza.
        El equipo de contención no garantiza la seguridad de ninguna descarga.
      </p>
    </div>

    <div className="text-[10px] text-primary animate-blink mb-2">
      ▸ ESCANEANDO ARCHIVOS... {games.length} AMENAZAS DETECTADAS
    </div>

    <div className="space-y-3">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>

    <div className="pixel-border bg-card p-2 text-center text-[10px] text-muted-foreground">
      [ FIN DEL REGISTRO — MÁS ARCHIVOS PENDIENTES DE DESCLASIFICACIÓN ]
    </div>
  </div>
);

export default JuegosPage;
