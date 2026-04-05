import { useParams, Link } from "react-router-dom";
import { games } from "@/data/games";

const GameDetailPage = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const game = games.find((g) => g.id === gameId);

  if (!game) {
    return (
      <div className="pixel-border bg-card p-6 text-center">
        <div className="text-primary text-2xl mb-2">ERROR 404</div>
        <div className="text-muted-foreground text-sm">Archivo no encontrado o deliberadamente eliminado.</div>
        <Link to="/juegos" className="text-accent text-xs mt-3 inline-block">
          ▸ Volver al archivo
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Link to="/juegos" className="text-accent text-xs hover:text-primary no-underline">
        ◄ VOLVER AL ARCHIVO
      </Link>

      <div className="pixel-border bg-card p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-primary text-[10px] tracking-widest">{game.status}</span>
          <span className="animate-blink text-primary text-sm">● REC</span>
        </div>

        <h2 className="text-foreground text-xl font-bold mb-1">{game.title}</h2>
        <div className="text-accent text-xs font-mono mb-4">{game.codename}</div>

        <div className="border border-primary/20 bg-secondary/30 p-3 mb-4">
          <div className="text-primary text-[10px] mb-2 tracking-widest">▸ INFORME DE CONTENCIÓN</div>
          <p className="text-foreground text-sm leading-relaxed">{game.description}</p>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {game.tags.map((t) => (
            <span key={t} className="bg-primary/10 border border-primary/30 text-primary text-[9px] px-1.5 py-0.5">
              {t}
            </span>
          ))}
        </div>

        <div className="border border-primary/30 bg-primary/5 p-3 text-center">
          <div className="text-primary text-xs mb-2">⚠ NIVEL DE AMENAZA: {game.threat}</div>
          <a
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-border bg-primary/20 text-primary font-bold text-sm px-4 py-2 inline-block glitch-hover no-underline hover:bg-primary/30 transition-colors"
          >
            {game.linkLabel}
          </a>
          <div className="text-muted-foreground text-[9px] mt-2">
            Al hacer clic, aceptas que el equipo de contención no es responsable de las consecuencias.
          </div>
        </div>
      </div>

      {game.id === "talkingtom" && (
        <div className="pixel-border bg-card p-3 text-xs text-muted-foreground">
          <div className="text-accent text-[10px] mb-1">▸ NOTA DEL INVESTIGADOR:</div>
          <p>
            "La última persona que instaló este APK reportó que su teléfono comenzó a hacer
            llamadas a las 3:33 AM. El destinatario siempre era el mismo número: el suyo propio.
            La grabación del buzón de voz contenía 4 minutos de respiración y un susurro:
            'Ya te vi'."
          </p>
        </div>
      )}

      {game.id === "happymod" && (
        <div className="pixel-border bg-card p-3 text-xs text-muted-foreground">
          <div className="text-accent text-[10px] mb-1">▸ NOTA DEL INVESTIGADOR:</div>
          <p>
            "Los usuarios del portal reportan una sensación persistente de ser observados.
            Las apps modificadas funcionan perfectamente... demasiado perfectamente.
            Un usuario notó que su app de calculadora ahora resuelve ecuaciones que él nunca escribió.
            Todas las respuestas son correctas. Todas terminan en el número 7."
          </p>
        </div>
      )}
    </div>
  );
};

export default GameDetailPage;
