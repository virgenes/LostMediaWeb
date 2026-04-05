const Credits = () => (
  <div className="pixel-border bg-card p-4 my-6 relative overflow-hidden">
    <div className="absolute inset-0 opacity-5 pointer-events-none bg-gradient-to-b from-primary/20 to-transparent" />
    <h2 className="text-primary text-lg font-bold mb-3 text-center tracking-widest">
      ╔══════════════════════════════╗
      <br />
      LOS ARQUITECTOS DEL ABISMO
      <br />
      ╚══════════════════════════════╝
    </h2>
    <div className="space-y-4 text-sm">
      <div className="border border-primary/20 p-3 bg-secondary/30">
        <div className="text-primary text-xs mb-1">▸ DISEÑO Y CONSTRUCCIÓN DE LA WEB</div>
        <a
          href="https://www.youtube.com/@CuevadelosVirgenes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-bold glitch-hover inline-block"
        >
          ▶ Cuevadelosvirgenes
        </a>
        <p className="text-muted-foreground text-xs mt-1">
          Arquitecto principal de esta interfaz. Cada píxel fue colocado con intención.
          La cueva tiene paredes, pero no tiene fondo.
        </p>
      </div>
      <div className="border border-primary/20 p-3 bg-secondary/30">
        <div className="text-primary text-xs mb-1">▸ FOCO PRINCIPAL Y CONTENIDO</div>
        <a
          href="https://www.youtube.com/@DATOSCURIOSOSDEVIDEOJUEGOSYAPP"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-bold glitch-hover inline-block"
        >
          ▶ DatosCuriosos
        </a>
        <p className="text-muted-foreground text-xs mt-1">
          El corazón de la investigación. Lost media, juegos olvidados, archivos corruptos.
          Si existe algo que no debería existir, ellos lo encontraron primero.
        </p>
      </div>
    </div>
    <div className="text-center text-muted-foreground text-[10px] mt-4 animate-blink">
      [ ESTE SITIO FUE CONSTRUIDO EN LA OSCURIDAD ]
    </div>
  </div>
);

export default Credits;
