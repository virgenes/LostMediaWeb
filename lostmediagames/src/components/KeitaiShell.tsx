import { ReactNode } from "react";

const KeitaiShell = ({ children, title }: { children: ReactNode; title?: string }) => (
  <div className="min-h-screen bg-background flex flex-col">
    {/* Phone top bar */}
    <div className="bg-secondary border-b border-primary/30 px-3 py-1 flex justify-between items-center text-[10px]">
      <span className="text-primary">▓▓▓</span>
      <span className="text-muted-foreground">{title || "LMW.kei"}</span>
      <span className="text-accent">⚡2%</span>
    </div>
    {/* Content */}
    <div className="flex-1 overflow-auto p-2 text-xs">
      {children}
    </div>
    {/* Bottom nav */}
    <div className="bg-secondary border-t border-primary/30 px-2 py-1 flex justify-around text-[10px]">
      <span className="text-muted-foreground">[←]</span>
      <span className="text-primary">◉</span>
      <span className="text-muted-foreground">[→]</span>
    </div>
  </div>
);

export default KeitaiShell;
